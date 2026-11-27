import { Card, CardBody } from "@/components/ui/Card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dev UI Page",
  robots: { index: false, follow: false },
};

export default function UiPage() {
  return (
    <main>
      <section className="section">
        <div className="container-page stack">
          <h1 className="h2">Dev UI Page</h1>
          <div className="grid-auto">
            <Card interactive className="bg-transparent">
              <span className="eyebrow eyebrow-flame">Route 1</span>
              <h3 className="h3">Ik zit in revalidatie of leef met NAH</h3>
              <p>
                Rustig beginnen, energie verdelen en wat je met je behandelaar
                bespreekt.
              </p>
            </Card>
            <Card media interactive>
              <span className="photo aspect-[4/3]" />
              <CardBody>
                <h3 className="h3">Kou</h3>
                <p>Bescherm jezelf tegen kou en zorg voor voldoende warmte.</p>
                <span className="text-frost mt-auto">Begin hier →</span>
              </CardBody>
            </Card>
            <Card media interactive>
              <span className="photo aspect-[4/3]" />
              <CardBody>
                <h3 className="h3">Vasten</h3>
                <p>
                  Houd rekening met je energie en voeding tijdens het vasten.
                </p>
                <span className="text-frost mt-auto">Begin hier →</span>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
