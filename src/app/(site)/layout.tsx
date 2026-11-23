import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#inhoud" className="sr-only focus:not-sr-only">
        Naar inhoud
      </a>
      <SiteHeader />
      <main id="inhoud" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
