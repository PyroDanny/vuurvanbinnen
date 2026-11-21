import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

// Fonts uit het ontwerp; de CSS-variabelen worden gebruikt in globals.css
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vuur van Binnen",
  description:
    "Koud van buiten, vuur van binnen. Kracht terugvinden na tegenslag met kou, ademhaling, beweging en vasten.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl"
      data-theme="dark"
      className={`${bricolage.variable} ${instrument.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
