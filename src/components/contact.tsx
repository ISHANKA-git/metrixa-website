"use client";

import { MessageCircle } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { Container } from "@/components/container";
import {
  contactServices,
  defaultWhatsappMessage,
  whatsappHref,
} from "@/lib/site";

type FormState = {
  name: string;
  email: string;
  business: string;
  service: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const emptyForm: FormState = {
  name: "",
  email: "",
  business: "",
  service: contactServices[0],
  message: "",
};

function validate(values: FormState): Errors {
  const errors: Errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "Please add a short note about what you need.";
  }

  return errors;
}

export function Contact() {
  const [values, setValues] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const whatsappMessage = useMemo(() => {
    const details = [
      defaultWhatsappMessage,
      values.name.trim() ? `Name: ${values.name.trim()}` : "",
      values.business.trim() ? `Business: ${values.business.trim()}` : "",
      values.service ? `Interest: ${values.service}` : "",
      values.message.trim() ? values.message.trim() : "",
    ].filter(Boolean);

    return details.join("\n");
  }, [values]);

  const whatsappUrl = whatsappHref(whatsappMessage);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setSubmitted(false);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-zinc-950 py-20 text-white sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-violet-300 uppercase">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Tell us what you want to set up
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-zinc-300">
            Share a few details about your business. WhatsApp is the direct way
            to start. The form checks that a message is complete, and it does
            not send email yet.
          </p>
          <div className="mt-8">
            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-[#1ebe5d]"
              >
                <MessageCircle aria-hidden="true" size={18} />
                Chat on WhatsApp
              </a>
            ) : (
              <div>
                <a
                  href="#contact-form"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-semibold text-zinc-950"
                >
                  <MessageCircle aria-hidden="true" size={18} />
                  Chat on WhatsApp
                </a>
                <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-400">
                  Add your number in{" "}
                  <code className="rounded bg-white/10 px-1.5 py-0.5 text-zinc-200">
                    src/lib/site.ts
                  </code>{" "}
                  and this button will open WhatsApp with the visitor&apos;s note.
                </p>
              </div>
            )}
          </div>
        </div>

        <form
          id="contact-form"
          onSubmit={onSubmit}
          noValidate
          className="rounded-3xl border border-white/10 bg-white p-5 text-zinc-950 sm:p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              id="name"
              label="Name"
              value={values.name}
              error={errors.name}
              autoComplete="name"
              onChange={(value) => update("name", value)}
            />
            <Field
              id="email"
              label="Email"
              type="email"
              value={values.email}
              error={errors.email}
              autoComplete="email"
              onChange={(value) => update("email", value)}
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field
              id="business"
              label="Business name"
              value={values.business}
              autoComplete="organization"
              optional
              onChange={(value) => update("business", value)}
            />
            <div>
              <label htmlFor="service" className="text-sm font-medium text-zinc-800">
                What do you need?
              </label>
              <select
                id="service"
                name="service"
                value={values.service}
                onChange={(event) => update("service", event.target.value)}
                className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-3 py-3 text-sm text-zinc-950"
              >
                {contactServices.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="text-sm font-medium text-zinc-800">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={(event) => update("message", event.target.value)}
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="mt-2 w-full resize-y rounded-xl border border-zinc-300 px-3 py-3 text-sm text-zinc-950"
            />
            {errors.message ? (
              <p id="message-error" className="mt-2 text-sm text-red-700">
                {errors.message}
              </p>
            ) : null}
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-violet-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-violet-500"
            >
              Check message
            </button>
            <p className="text-sm text-zinc-500">
              Preview form. It does not deliver messages.
            </p>
          </div>
          {submitted ? (
            <p role="status" className="mt-4 rounded-2xl bg-violet-50 px-4 py-3 text-sm leading-6 text-violet-950">
              Thanks, {values.name.trim()}. Your details look complete. This
              form is not connected to an inbox, so nothing was sent. Use
              WhatsApp when the button is linked to your number.
            </p>
          ) : null}
        </form>
      </Container>
    </section>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  optional?: boolean;
};

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  optional = false,
}: FieldProps) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-zinc-800">
        {label}
        {optional ? <span className="text-zinc-500"> (optional)</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="mt-2 w-full rounded-xl border border-zinc-300 px-3 py-3 text-sm text-zinc-950"
      />
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
