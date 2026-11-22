# 🔥 Vuur van Binnen

> **Koud van buiten, vuur van binnen.**

Een persoonlijk platform over kracht terugvinden na tegenslag. Na een ongeluk en niet-aangeboren hersenletsel (NAH) vond ik mijn weg terug met vier pijlers: **kou, ademhaling, beweging en vasten**. Op deze site deel ik dat eerlijk: mijn verhaal, gidsen, een logboek, een ademtimer, een 30-dagenchallenge en sessies in de regio Helmond/Eindhoven.

De site is **prikkelarm en toegankelijk** gebouwd (WCAG 2.2 AA), met een licht en donker thema en een rustige modus zonder animaties, speciaal voor mensen met NAH.

**Status:** 🚧 in ontwikkeling: sprint 0 (fundament) → sprint 1 (design system en layout).

---

## Stack

| Onderdeel                     | Keuze                                                                        |
| ----------------------------- | ---------------------------------------------------------------------------- |
| Framework                     | [Next.js 16](https://nextjs.org) (App Router, Cache Components) + TypeScript |
| Styling                       | Tailwind CSS v4 + eigen design tokens in `globals.css`                       |
| UI-hulpmiddelen               | `class-variance-authority`, `clsx`, `tailwind-merge`, `next-themes`          |
| Validatie                     | zod                                                                          |
| Content (gepland)             | Sanity (headless CMS), Studio op `/studio`                                   |
| Formulieren en mail (gepland) | Server Actions, Cloudflare Turnstile, Resend, Brevo                          |
| Kwaliteit                     | ESLint, Prettier, Vitest, Husky + lint-staged, GitHub Actions                |
| Package manager               | pnpm                                                                         |

## Aan de slag

**Vereisten:** Node.js (versie in [`.nvmrc`](.nvmrc)) en pnpm 10.

```bash
git clone https://github.com/PyroDanny/vuurvanbinnen.git
cd vuurvanbinnen
pnpm install
pnpm dev
```

Open daarna [http://localhost:3000](http://localhost:3000).

### Omgevingsvariabelen

Geheime sleutels staan in `.env.local` en komen **nooit** in Git. Kopieer `.env.example` naar `.env.local` en vul de waarden in zodra er variabelen nodig zijn (vanaf de Sanity-koppeling).

## Scripts

| Commando         | Wat het doet                                    |
| ---------------- | ----------------------------------------------- |
| `pnpm dev`       | Start de ontwikkelserver                        |
| `pnpm build`     | Maakt een productie-build                       |
| `pnpm start`     | Draait de productie-build lokaal                |
| `pnpm lint`      | Controleert de code met ESLint                  |
| `pnpm typecheck` | Genereert route-types en controleert TypeScript |
| `pnpm test`      | Draait de tests met Vitest                      |
| `pnpm format`    | Formatteert alle bestanden met Prettier         |

Bij elke commit draaien ESLint en Prettier automatisch op de gewijzigde bestanden (Husky + lint-staged). Bij elke push en pull request draait CI: lint → typecheck → test → build.

## Projectstructuur

```
src/
├─ app/
│  ├─ (site)/        ← publieke pagina's (routegroep, zonder invloed op de URL)
│  ├─ layout.tsx     ← root-layout: fonts, thema, metadata
│  └─ globals.css    ← Tailwind + design tokens (kleuren, fonts, effecten)
├─ components/       ← herbruikbare componenten (UI-kit, header, footer)
└─ lib/              ← helpers en configuratie
```

## Werkwijze

- **Backlog:** user stories staan als [GitHub Issues](https://github.com/PyroDanny/vuurvanbinnen/issues) met een ID (`VVB-xxx`), labels per epic, prioriteit (MoSCoW) en grootte.
- **Branches:** `feat/VVB-xxx-korte-naam`, `fix/…`, `chore/…`
- **Commits:** [Conventional Commits](https://www.conventionalcommits.org/), bijvoorbeeld `feat(nav): dropdown pijlers (VVB-030)`
- **Pull requests:** met `Closes #<issue>`; CI moet groen zijn voor het mergen.

### Definition of Done

- [ ] Acceptatiecriteria gehaald
- [ ] Lint, typecheck, tests en build groen
- [ ] Responsive gecontroleerd op 360 px, 820 px en 1440 px
- [ ] Licht, donker en rustige modus gecontroleerd
- [ ] Toetsenbord en focus werken
- [ ] Content komt uit Sanity waar dat kan (geen hardcoded teksten)

## Planning

| Sprint | Focus                                                    |
| ------ | -------------------------------------------------------- |
| S0     | Fundament: installaties, GitHub, CI                      |
| S1     | Design system en layout                                  |
| S2     | Sanity                                                   |
| S3     | Kernpagina's: Home, Mijn verhaal, pijlers, Herstel & NAH |
| S4     | Blog, logboek, agenda, juridisch                         |
| S5     | Interactie: Adempauze, challenge, vlam-effecten          |
| S6     | Formulieren en mail                                      |
| S7     | SEO en social                                            |
| S8     | Kwaliteit, privacy en beveiliging                        |
| S9     | Lancering op vuurvanbinnen.nl                            |

## Disclaimer

De inhoud van deze site is gebaseerd op persoonlijke ervaring en is **geen medisch advies**. Overleg met je arts of behandelaar voordat je begint met kou, ademwerk of vasten, zeker bij hart- en vaatproblemen, epilepsie, zwangerschap of hersenletsel.

## Licentie

[MIT](LICENSE) © 2026 PyroDanny
