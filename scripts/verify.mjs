import puppeteer from "puppeteer-core";
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";

const base = "http://127.0.0.1:5173";
const chrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const outDir = resolve("tmp-verify");
mkdirSync(outDir, { recursive: true });

const routes = [
  ["home", "/"],
  ["about", "/about"],
  ["services", "/services"],
  ["solutions", "/solutions"],
  ["contact", "/contact"],
];

const issues = [];

function listen(page, label) {
  page.on("pageerror", (err) => issues.push(`[${label}] pageerror ${err.message}`));
  page.on("console", (msg) => {
    if (msg.type() === "error") issues.push(`[${label}] console ${msg.text()}`);
  });
}

async function metrics(page, label) {
  const data = await page.evaluate(() => {
    const doc = document.documentElement;
    const font = getComputedStyle(document.body).fontFamily;
    const overflow = doc.scrollWidth - window.innerWidth;
    const h1 = document.querySelector("h1");
    const active = [...document.querySelectorAll(".nav-links a.is-active")].map((a) => a.textContent);
    const bg = getComputedStyle(document.body).backgroundColor;
    return {
      title: document.title,
      font,
      overflow,
      h1: h1?.textContent?.replace(/\s+/g, " ").trim() ?? null,
      active,
      bg,
      hasPoppins: font.toLowerCase().includes("poppins"),
    };
  });
  console.log(JSON.stringify({ label, ...data }, null, 2));
  if (data.overflow > 2) issues.push(`[${label}] horizontal overflow ${data.overflow}px`);
  if (!data.hasPoppins) issues.push(`[${label}] Poppins not applied: ${data.font}`);
  if (!data.h1) issues.push(`[${label}] missing H1`);
}

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: true,
  args: ["--no-sandbox", "--window-size=1440,900"],
  defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 1 },
});

const page = await browser.newPage();
listen(page, "desktop");

for (const [name, path] of routes) {
  await page.goto(base + path, { waitUntil: "networkidle0", timeout: 30000 });
  await page.waitForSelector("h1", { timeout: 15000 });
  await new Promise((r) => setTimeout(r, 700));
  await metrics(page, `desktop:${name}`);
  await page.screenshot({ path: resolve(outDir, `${name}-1440.png`), fullPage: false });
}

await page.goto(base + "/contact", { waitUntil: "networkidle0" });
await page.click("button[type=submit]");
await new Promise((r) => setTimeout(r, 300));
const formErrors = await page.evaluate(() => [...document.querySelectorAll(".field em")].map((el) => el.textContent));
console.log("form errors", formErrors);
if (formErrors.length < 3) issues.push("contact form did not show validation errors");

await page.type("input[name=name]", "Ada Lovelace");
await page.type("input[name=email]", "ada@example.com");
await page.select("select[name=service]", "AI Automation");
await page.type("textarea[name=message]", "We want to automate follow-up across support and sales.");
await page.waitForSelector("button[type=submit]:not([disabled])");
await page.click("button[type=submit]");
await page.waitForFunction(
    () => document.body.innerText.toLowerCase().includes("message received"),
    { timeout: 5000 },
  ).catch(() => {
    issues.push("contact success state did not appear");
  });

await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 2 });
for (const [name, path] of routes) {
  await page.goto(base + path, { waitUntil: "networkidle0", timeout: 30000 });
  await page.waitForSelector("h1", { timeout: 15000 });
  await new Promise((r) => setTimeout(r, 500));
  await metrics(page, `mobile:${name}`);
  await page.screenshot({ path: resolve(outDir, `${name}-375.png`), fullPage: false });
}

await page.goto(base + "/", { waitUntil: "networkidle0" });
const hamburger = await page.$(".menu-toggle");
if (!hamburger) issues.push("mobile hamburger missing");
else {
  await hamburger.click();
  await new Promise((r) => setTimeout(r, 400));
  const open = await page.evaluate(() => Boolean(document.querySelector(".mobile-nav")));
  if (!open) issues.push("mobile nav did not open");
  await page.screenshot({ path: resolve(outDir, "mobile-nav.png") });
  const about = await page.$(".mobile-nav a[href='/about']");
  if (about) {
    await about.click();
    await page.waitForSelector("h1");
    const url = page.url();
    if (!url.endsWith("/about")) issues.push(`mobile nav about failed: ${url}`);
  }
}

await browser.close();
console.log("ISSUES", issues.length ? issues : "none");
if (issues.length) process.exitCode = 1;
