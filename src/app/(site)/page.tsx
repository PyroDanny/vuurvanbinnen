import Link from "next/link";
import clsx from "clsx";

const pijlers = [
  {
    naam: "Kou",
    tekst:
      "Koud douchen, ijsbaden en winterzwemmen. Stap voor stap wennen aan de kou.",
    warm: false,
  },
  {
    naam: "Ademhaling",
    tekst:
      "Rustige ademoefeningen die je hoofd stil maken en je lijf laten zakken.",
    warm: true,
  },
  {
    naam: "Beweging",
    tekst: "Van revalidatie naar hardlopen. Kleine stappen die wél tellen.",
    warm: false,
  },
  {
    naam: "Vasten",
    tekst:
      "Intermittent fasting, eerlijk uitgelegd: wat het me bracht en waar je op let.",
    warm: true,
  },
];

// "use cache": het jaartal wordt bij de build berekend en daarna gecachet.
// Zo weet Next.js dat deze waarde vast mag liggen in de statische pagina.
async function Jaar() {
  "use cache";
  return new Date().getFullYear();
}

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="site-header">
        <div className="container-page header-inner">
          <Link href="/" className="logo">
            <span className="logo-flame" aria-hidden="true">
              🔥
            </span>
            Vuur van Binnen
          </Link>
          <nav className="nav-links" aria-label="Hoofdmenu">
            <a href="#" className="nav-link">
              Mijn verhaal
            </a>
            <a href="#pijlers" className="nav-link">
              Pijlers
            </a>
            <a href="#" className="nav-link">
              Blog
            </a>
            <a href="#" className="nav-link">
              Agenda
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero section frost">
          <div
            className="orb"
            style={{ width: 520, height: 520, right: "-120px", top: "-80px" }}
          />
          <div className="embers" aria-hidden="true">
            {Array.from({ length: 14 }, (_, i) => (
              <span key={i} />
            ))}
          </div>

          <div
            className="container-page stack"
            style={{ position: "relative", gap: 28 }}
          >
            <p className="eyebrow eyebrow-dot">Helmond · Eindhoven</p>
            <h1 className="display">
              <span className="text-frost">Koud van buiten,</span>
              <br />
              <span className="text-flame">Vuur van binnen.</span>
            </h1>
            <p className="lead">
              Na mijn ongeluk en hersenletsel moest ik mijn kracht opnieuw
              vinden. Met kou, ademhaling, beweging en vasten. Hier laat ik
              eerlijk zien hoe — stap voor stap.
            </p>
            <div className="row">
              <a href="#" className="btn btn-flame btn-lg heat">
                Start de 30-dagenchallenge
              </a>
              <a href="#" className="btn btn-ghost btn-lg">
                Lees mijn verhaal
              </a>
            </div>
          </div>
          <div className="horizon" />
        </section>

        <div className="flame-line" />

        {/* Pijlers */}
        <section id="pijlers" className="section">
          <div className="container-page stack" style={{ gap: 40 }}>
            <div className="stack">
              <p className="eyebrow eyebrow-flame">De vier pijlers</p>
              <h2 className="h2">Waar ik mee werk</h2>
            </div>
            <div className="grid-auto">
              {pijlers.map((p) => (
                <a
                  key={p.naam}
                  href="#"
                  className={clsx("card card-hover", p.warm && "card-warm")}
                >
                  <span
                    className={clsx("tag", p.warm && "tag-warm")}
                    style={{ alignSelf: "flex-start" }}
                  >
                    {p.naam}
                  </span>
                  <h3 className="h3">{p.naam}</h3>
                  <p style={{ margin: 0 }}>{p.tekst}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container-page footer-bottom">
          <span>
            © <Jaar /> Vuur van Binnen
          </span>
          <span>In opbouw — binnenkort meer 🔥</span>
        </div>
      </footer>
    </>
  );
}
