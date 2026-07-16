"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Verzenden is mislukt.");

      form.reset();
      setStatus("success");
      setMessage("Bedankt! Uw aanvraag is verzonden. We nemen zo snel mogelijk contact met u op.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Verzenden is mislukt. Probeer het later opnieuw.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Naam *
          <input name="name" type="text" required minLength={2} maxLength={100} autoComplete="name" />
        </label>
        <label>
          E-mailadres *
          <input name="email" type="email" required maxLength={160} autoComplete="email" />
        </label>
        <label>
          Telefoonnummer
          <input name="phone" type="tel" maxLength={30} autoComplete="tel" />
        </label>
        <label>
          Plaats
          <input name="city" type="text" maxLength={100} autoComplete="address-level2" />
        </label>
      </div>

      <label>
        Welke klus wilt u laten uitvoeren? *
        <textarea name="message" required minLength={10} maxLength={4000} rows={7} />
      </label>

      <label className="privacy-check">
        <input name="privacy" type="checkbox" value="accepted" required />
        <span>Ik ga akkoord met verwerking van mijn gegevens om mijn aanvraag te behandelen.</span>
      </label>

      <input className="honeypot" name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <button className="btn" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Bezig met verzenden..." : "Offerteaanvraag versturen"}
      </button>

      {message && <p className={`form-message ${status}`}>{message}</p>}
    </form>
  );
}
