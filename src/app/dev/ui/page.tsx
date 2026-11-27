import { Badge } from "@/components/ui/Badge";
import { Card, CardBody } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import type { Metadata } from "next";

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
              <Tag tone="warm">Route 1</Tag>
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
                <span className="text-flame-text font-semibold">
                  Begin hier →
                </span>
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
      <section className="section">
        <div className="container-page stack">
          <h2 className="h2">Tags</h2>
          <div className="row">
            <Tag tone="warm">Tag warm</Tag>
            <Tag>Tag ice cold</Tag>
            <Badge tone="warm"></Badge>
          </div>
        </div>
      </section>
    </main>
  );
}
