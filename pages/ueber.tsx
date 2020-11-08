import { Header } from "../components/Header";

import { Footer } from "../components/Footer";
import { NextPage } from "next";
import Image from "next/image";
import { PageLayout } from "../components/PageLayout";

import { H1, P, H3 } from "../components/Typography";

const Impressum: NextPage = () => (
  <>
    <Header colorful fixed={false} />
    <PageLayout>
      <H1>Das Team</H1>
      <Image width="1000" height="500" layout="responsive" src="/team.jpg" />
      <H3>Seit 1800</H3>
      <P>
        Exercitation2 magna cupidatat nulla ullamco veniam pariatur sunt sint
        voluptate excepteur labore pariatur aliquip velit. Culpa officia velit
        ullamco aliqua ad consectetur ipsum. Ex commodo et Lorem dolor.
        Excepteur adipisicing incididunt consectetur et est veniam sunt
        adipisicing irure eu ullamco id in. Cupidatat esse sunt nisi qui nostrud
        irure tempor elit tempor. Sunt qui est amet reprehenderit est
        adipisicing consequat irure magna irure incididunt nulla est.
      </P>

      <P>
        Nulla adipisicing ex tempor duis. Qui enim minim quis magna eu velit ex
        ad excepteur proident Lorem ut consequat. Cupidatat ex pariatur
        adipisicing deserunt cupidatat et dolore cillum quis aliquip
        exercitation nostrud.
      </P>

      <P>
        Occaecat laboris do amet sunt velit incididunt cillum laboris in
        consequat laboris irure. Magna magna tempor quis deserunt deserunt ex
        irure adipisicing ipsum laborum. Proident laborum nulla dolore
        reprehenderit. Ex consequat voluptate occaecat ullamco reprehenderit
        labore consectetur. Elit magna anim elit labore voluptate consequat ad.
        Enim fugiat adipisicing dolor ut esse officia adipisicing anim tempor
        minim nulla cillum aliqua ea. Veniam commodo ad sint consectetur Lorem
        ipsum voluptate esse.
      </P>
    </PageLayout>
    <Footer />
  </>
);

export default Impressum;
