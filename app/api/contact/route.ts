import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "De e-mailservice is nog niet ingesteld." }, { status: 500 });
    }

    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const city = String(body.city || "").trim();
    const message = String(body.message || "").trim();
    const privacy = String(body.privacy || "");
    const honeypot = String(body.website || "").trim();

    if (honeypot) return NextResponse.json({ success: true });

    if (name.length < 2 || !email.includes("@") || message.length < 10 || privacy !== "accepted") {
      return NextResponse.json({ error: "Controleer de verplichte velden en probeer het opnieuw." }, { status: 400 });
    }

    if (name.length > 100 || email.length > 160 || phone.length > 30 || city.length > 100 || message.length > 4000) {
      return NextResponse.json({ error: "Een of meer velden zijn te lang." }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const to = process.env.OFFERTE_TO_EMAIL || "info@klushulpnoord.nl";
    const from = process.env.OFFERTE_FROM_EMAIL || "KlusHulp Noord <noreply@klushulpnoord.nl>";

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Niet ingevuld");
    const safeCity = escapeHtml(city || "Niet ingevuld");
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Nieuwe offerteaanvraag van ${name}`,
      text: `Nieuwe offerteaanvraag\n\nNaam: ${name}\nE-mail: ${email}\nTelefoon: ${phone || "Niet ingevuld"}\nPlaats: ${city || "Niet ingevuld"}\n\nKlusomschrijving:\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#222">
          <div style="background:#111;padding:22px;border-bottom:5px solid #f5b800">
            <h1 style="margin:0;color:white;font-size:24px">Nieuwe offerteaanvraag</h1>
          </div>
          <div style="padding:24px;border:1px solid #ddd;border-top:0">
            <p><strong>Naam:</strong> ${safeName}</p>
            <p><strong>E-mail:</strong> ${safeEmail}</p>
            <p><strong>Telefoon:</strong> ${safePhone}</p>
            <p><strong>Plaats:</strong> ${safeCity}</p>
            <h2 style="margin-top:28px;font-size:18px">Klusomschrijving</h2>
            <p style="line-height:1.6">${safeMessage}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "De aanvraag kon niet worden verzonden. Bel of WhatsApp ons gerust." }, { status: 502 });
    }

    await resend.emails.send({
      from,
      to: [email],
      subject: "Uw aanvraag is ontvangen - KlusHulp Noord",
      text: `Beste ${name},\n\nBedankt voor uw aanvraag bij KlusHulp Noord. We nemen zo snel mogelijk contact met u op.\n\nMet vriendelijke groet,\nKlusHulp Noord\n06 26 41 20 71`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#222">
          <div style="background:#111;padding:22px;border-bottom:5px solid #f5b800">
            <h1 style="margin:0;color:white;font-size:24px">KlusHulp Noord</h1>
          </div>
          <div style="padding:24px;border:1px solid #ddd;border-top:0">
            <p>Beste ${safeName},</p>
            <p>Bedankt voor uw aanvraag. We hebben uw bericht goed ontvangen en nemen zo snel mogelijk contact met u op.</p>
            <p>Met vriendelijke groet,<br /><strong>KlusHulp Noord</strong><br />06 26 41 20 71</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json({ error: "Er ging iets mis bij het verzenden." }, { status: 500 });
  }
}
