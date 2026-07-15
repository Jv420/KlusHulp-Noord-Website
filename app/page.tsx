import Image from "next/image";

const services = ["Kleine klussen en montage","Timmer- en herstelwerk","Schilder- en kitwerk","Kleine verbouwingen","Tuin en buiten","Klein auto-onderhoud op afspraak"];

export default function Home(){return <>
<header><div className="wrap nav"><Image src="/logo-klushulp-noord.svg" alt="KlusHulp Noord" width={230} height={69} priority/><nav><a href="#diensten">Diensten</a><a href="#over">Over ons</a><a href="#contact">Contact</a></nav></div></header>
<main><section className="hero"><div className="wrap grid"><div><p className="eyebrow">Allround servicebedrijf in Noord-Nederland</p><h1>Betaalbaar vakwerk<br/><span>voor iedereen.</span></h1><p className="lead">Van een schilderijtje ophangen tot kleine verbouwingen. Eerlijk, persoonlijk en zonder onnodig hoge kosten.</p><a className="btn" href="mailto:info@klushulpnoord.nl?subject=Offerteaanvraag">Gratis offerte aanvragen</a></div><aside><h2>Sociaal tarief mogelijk</h2><p>Heeft u een minimuminkomen, AOW of een beperking? Wij bekijken discreet samen wat mogelijk is.</p></aside></div></section>
<section id="diensten" className="section"><div className="wrap"><p className="eyebrow dark">Wat wij doen</p><h2>Van kleine klus tot renovatie</h2><div className="cards">{services.map(s=><article key={s}><h3>{s}</h3><p>Neem contact op voor een eerlijke inschatting en duidelijke prijsafspraak.</p></article>)}</div></div></section>
<section id="over" className="section black"><div className="wrap cols"><div><p className="eyebrow">Onze missie</p><h2>Wij kijken niet alleen naar de klus, maar ook naar de mens.</h2></div><p>KlusHulp Noord is opgericht vanuit de overtuiging dat iedereen een veilig en goed onderhouden thuis verdient. Een kleine beurs mag geen reden zijn om noodzakelijke werkzaamheden uit te stellen.</p></div></section>
<section id="contact" className="section"><div className="wrap contact"><div><h2>Heeft u een klus?</h2><p>Vertel wat er moet gebeuren. U ontvangt een duidelijke en vrijblijvende reactie.</p></div><div><p><strong>E-mail</strong><br/>info@klushulpnoord.nl</p><p><strong>Telefoon / WhatsApp</strong><br/>06-00000000</p><p><strong>Werkgebied</strong><br/>Noord-Nederland</p></div></div></section></main>
<footer><div className="wrap">© {new Date().getFullYear()} KlusHulp Noord — Betaalbaar vakwerk voor iedereen.</div></footer>
</>}
