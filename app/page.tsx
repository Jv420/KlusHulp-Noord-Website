import Image from "next/image";
import ContactForm from "./components/ContactForm";

const services = [
  ["Montage & kleine klussen", "Meubels monteren, lampen ophangen, planken plaatsen en andere klussen in en om het huis."],
  ["Timmer- & herstelwerk", "Kleine reparaties, aftimmerwerk, deuren, kozijnen en praktisch herstelwerk."],
  ["Schilder- & kitwerk", "Net schilderwerk, bijwerken, afkitten en onderhoud voor een verzorgde afwerking."],
  ["Kleine verbouwingen", "Praktische aanpassingen en renovaties met duidelijke afspraken vooraf."],
  ["Tuin & buiten", "Schuttingen, kleine tuinprojecten, onderhoud en herstel van buitenwerk."],
  ["Klein auto-onderhoud", "Eenvoudige onderhoudswerkzaamheden op afspraak, transparant en betaalbaar."],
];
const steps = [["01","Vertel wat er moet gebeuren","Stuur foto's en een korte omschrijving via het formulier of WhatsApp."],["02","Duidelijke prijsafspraak","U krijgt vooraf een eerlijke inschatting zonder verborgen verrassingen."],["03","Netjes uitgevoerd","Wij werken persoonlijk, zorgvuldig en laten de werkplek netjes achter."]];
const faq = [["Werken jullie met een sociaal tarief?","Ja. Voor mensen met een minimuminkomen, AOW of een beperking bekijken we discreet wat mogelijk is."],["Is een offerte vrijblijvend?","Ja. Een eerste prijsinschatting of offerte is vrijblijvend, tenzij vooraf anders afgesproken."],["In welk gebied werken jullie?","KlusHulp Noord is actief in Noord-Nederland. Neem contact op om uw locatie te controleren."],["Doen jullie ook kleine klussen?","Juist. Ook voor één lamp, plank, lekkende kitrand of kleine reparatie kunt u contact opnemen."]];

export default function Home() {
  const displayPhone = "06 26 41 20 71";
  const phoneHref = "tel:+31626412071";
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "31626412071";
  const whatsapp = `https://wa.me/${number}?text=${encodeURIComponent("Hallo KlusHulp Noord, ik wil graag een klus bespreken.")}`;
  return <>
    <header className="site-header"><div className="wrap nav"><a className="brand" href="#top"><Image className="site-logo" src="/logo-klushulp-noord.svg" alt="KlusHulp Noord" width={320} height={145} priority/></a><nav><a href="#diensten">Diensten</a><a href="#werkwijze">Werkwijze</a><a href="#over">Over ons</a><a href="#faq">FAQ</a><a className="nav-cta" href="#contact">Offerte</a></nav></div></header>
    <main id="top">
      <section className="hero"><div className="wrap hero-grid"><div><p className="eyebrow">Allround servicebedrijf in Noord-Nederland</p><h1>Betrouwbare klushulp.<br/><span>Betaalbaar voor iedereen.</span></h1><p className="lead">Van een schilderijtje ophangen tot kleine verbouwingen. Persoonlijk, duidelijk en zonder onnodig hoge kosten.</p><div className="actions"><a className="btn" href="#contact">Gratis offerte aanvragen</a><a className="btn secondary" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp ons</a></div><div className="trust"><span>✓ Duidelijke afspraken</span><span>✓ Eerlijke prijzen</span><span>✓ Persoonlijke service</span></div></div><aside className="hero-card"><p className="eyebrow dark">Sociaal en betrokken</p><h2>Een veilig en goed onderhouden thuis moet bereikbaar zijn.</h2><p>Heeft u een minimuminkomen, AOW of een beperking? Wij bekijken discreet samen wat mogelijk is.</p><a href="#contact">Bespreek de mogelijkheden →</a></aside></div></section>
      <section id="diensten" className="section"><div className="wrap"><p className="eyebrow dark">Wat wij doen</p><div className="section-head"><h2>Van kleine klus tot praktische renovatie</h2><p>Geen ingewikkelde verkooppraatjes, maar duidelijke hulp voor werkzaamheden die écht gedaan moeten worden.</p></div><div className="cards">{services.map(([title,text],i)=><article key={title}><span className="card-number">0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section id="werkwijze" className="section muted"><div className="wrap"><p className="eyebrow dark">Zo werkt het</p><h2>In drie duidelijke stappen</h2><div className="steps">{steps.map(([n,t,d])=><article key={n}><strong>{n}</strong><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
      <section id="over" className="section black"><div className="wrap about-grid"><div><p className="eyebrow">Onze missie</p><h2>Wij kijken niet alleen naar de klus, maar ook naar de mens.</h2></div><div><p>KlusHulp Noord is opgericht vanuit de overtuiging dat iedereen een veilig, verzorgd en goed onderhouden thuis verdient.</p><p>Een kleine beurs mag geen reden zijn om noodzakelijk onderhoud uit te stellen. Daarom werken we met heldere prijzen, persoonlijke aandacht en waar mogelijk een passend sociaal tarief.</p></div></div></section>
      <section id="faq" className="section"><div className="wrap faq-grid"><div><p className="eyebrow dark">Veelgestelde vragen</p><h2>Goed om te weten</h2></div><div>{faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
      <section id="contact" className="section contact-section"><div className="wrap contact-layout"><div className="contact-copy"><p className="eyebrow">Vrijblijvend contact</p><h2>Heeft u een klus?</h2><p>Vul het formulier in. Uw aanvraag wordt veilig via Resend naar KlusHulp Noord verstuurd en u ontvangt automatisch een bevestiging.</p><div className="contact-info"><p><strong>E-mail</strong><br/><a href="mailto:info@klushulpnoord.nl">info@klushulpnoord.nl</a></p><p><strong>Telefoon / WhatsApp</strong><br/><a href={phoneHref}>{displayPhone}</a></p><p><strong>Werkgebied</strong><br/>Noord-Nederland</p></div><div className="actions"><a className="btn secondary" href={whatsapp} target="_blank" rel="noreferrer">Liever WhatsApp?</a></div></div><ContactForm/></div></section>
    </main>
    <footer><div className="wrap footer-grid"><Image src="/logo-klushulp-noord.svg" alt="KlusHulp Noord" width={240} height={109}/><div><strong>KlusHulp Noord</strong><br/>Betaalbaar • Betrouwbaar • Voor Iedereen</div><div>© {new Date().getFullYear()} KlusHulp Noord<br/><a href="mailto:info@klushulpnoord.nl">info@klushulpnoord.nl</a><br/><a href={phoneHref}>{displayPhone}</a></div></div></footer>
    <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
  </>;
}
