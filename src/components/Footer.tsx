import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { brand, nav, social } from "../data/siteData";

function placeholder(event: MouseEvent<HTMLAnchorElement>) {
  if (event.currentTarget.getAttribute("href") === "#") {
    event.preventDefault();
  }
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="footer-grid">
          <div>
            <Logo variant="footer" />
            <p>{brand.tagline} SoftTell designs intelligent systems that connect people, data, software, and workflows.</p>
          </div>
          <div>
            <h3>Pages</h3>
            {nav.map((item) => (
              <Link key={item.path} to={item.path}>
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <h3>Services</h3>
            <Link to="/services#digital-transformation">Digital Transformation</Link>
            <Link to="/services#shopify">Shopify</Link>
            <Link to="/services#emerging-technologies">Emerging Technologies</Link>
            <Link to="/services#data-engineering">Data Engineering</Link>
            <Link to="/services#saas">SaaS</Link>
          </div>
          <div>
            <h3>Company</h3>
            <Link to="/about">About</Link>
            <Link to="/#testimonials">Testimonials</Link>
            <Link to="/#pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <h3>Connect</h3>
            <a href={social.linkedin} onClick={placeholder}>LinkedIn</a>
            <a href={social.facebook} onClick={placeholder}>Facebook</a>
            <a href={social.instagram} onClick={placeholder}>Instagram</a>
            <a href={social.x} onClick={placeholder}>X</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} SoftTell. All rights reserved.</span>
          <span>Intelligent Technology. Smarter Business.</span>
        </div>
      </div>
    </footer>
  );
}
