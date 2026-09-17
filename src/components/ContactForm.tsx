import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { contact, serviceOptions } from "../data/siteData";

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const empty: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!emailPattern.test(values.email.trim())) errors.email = "Please enter a valid email.";
  if (values.phone.trim() && values.phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Enter a valid phone number or leave this blank.";
  }
  if (!values.service) errors.service = "Select a service or solution.";
  if (values.message.trim().length < 10) errors.message = "Tell us a little more about what you need.";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(empty);
  const [status, setStatus] = useState<Status>("idle");
  const [attempted, setAttempted] = useState(false);
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const errors = useMemo(() => validate(values), [values]);
  const invalid = Object.keys(errors).length > 0;

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  const show = (field: keyof FormState) => Boolean((touched[field] || attempted) && errors[field]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAttempted(true);
    setTouched({
      name: true,
      email: true,
      company: true,
      phone: true,
      service: true,
      message: true,
    });
    if (Object.keys(validate(values)).length) return;

    setStatus("submitting");
    try {
      if (contact.formEndpoint) {
        const response = await fetch(contact.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!response.ok) throw new Error("Request failed");
      } else {
        await new Promise((resolve) => window.setTimeout(resolve, 900));
      }
      setStatus("success");
      setValues(empty);
      setTouched({});
      setAttempted(false);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <h3>Message received</h3>
        <p className="lead">
          Thank you. We’ll take it from here. Your note is ready for the SoftTell team. Replace the contact details in
          <code> src/data/siteData.ts </code>
          when you connect a live inbox.
        </p>
        <button className="btn btn-primary" type="button" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <Field id="contact-name" label="Full Name" error={show("name") ? errors.name : undefined}>
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          value={values.name}
          onBlur={() => setTouched((t) => ({ ...t, name: true }))}
          onChange={(event) => update("name", event.currentTarget.value)}
        />
      </Field>
      <Field id="contact-email" label="Email" error={show("email") ? errors.email : undefined}>
        <input
          id="contact-email"
          type="email"
          name="email"
          autoComplete="email"
          value={values.email}
          onBlur={() => setTouched((t) => ({ ...t, email: true }))}
          onChange={(event) => update("email", event.currentTarget.value)}
        />
      </Field>
      <Field id="contact-company" label="Company">
        <input
          id="contact-company"
          name="company"
          autoComplete="organization"
          value={values.company}
          onChange={(event) => update("company", event.currentTarget.value)}
        />
      </Field>
      <Field id="contact-phone" label="Phone" error={show("phone") ? errors.phone : undefined}>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          autoComplete="tel"
          value={values.phone}
          onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
          onChange={(event) => update("phone", event.currentTarget.value)}
        />
      </Field>
      <Field id="contact-service" label="Service / Solution" error={show("service") ? errors.service : undefined} wide>
        <select
          id="contact-service"
          name="service"
          value={values.service}
          onBlur={() => setTouched((t) => ({ ...t, service: true }))}
          onChange={(event) => update("service", event.currentTarget.value)}
        >
          <option value="">Select an option</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>
      <Field id="contact-message" label="Message" error={show("message") ? errors.message : undefined} wide>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          onBlur={() => setTouched((t) => ({ ...t, message: true }))}
          onChange={(event) => update("message", event.currentTarget.value)}
        />
      </Field>
      {status === "error" ? (
        <p className="form-error wide" role="alert">
          Something went wrong while sending. Please try again.
        </p>
      ) : null}
      <button className="btn btn-primary wide" type="submit" disabled={status === "submitting" || (attempted && invalid)}>
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
  wide = false,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <div className={`field${wide ? " wide" : ""}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error ? <em id={`${id}-error`}>{error}</em> : null}
    </div>
  );
}
