import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Grid } from "../components/Grid";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { NextPage } from "next";
import { H1, P } from "../components/Typography";

const Home: NextPage = () => (
  <>
    <Header fixed={false} />
    <Hero />
    <Grid>
      <Card img="/robi.jpg" href="/robis">
        <H1>Robis</H1>
        <P>
          Lorem nostrud irure sit laborum Lorem ex fugiat anim magna. Nisi
          aliquip exercitation qui duis ut aliqua irure do mollit nisi.
          Cupidatat ipsum eiusmod magna adipisicing veniam do ad voluptate qui.
          Magna magna ad minim fugiat labore.
        </P>
      </Card>
      <Card img={"https://source.unsplash.com/random?tree"}>
        <H1>Sägen</H1>
        <P>
          Lorem nostrud irure sit laborum Lorem ex fugiat anim magna. Nisi
          aliquip exercitation qui duis ut aliqua irure do mollit nisi.
          Cupidatat ipsum eiusmod magna adipisicing veniam do ad voluptate qui.
          Magna magna ad minim fugiat labore.
        </P>
      </Card>
      <Card img={"https://source.unsplash.com/random?flower"}>
        <H1>Ideen</H1>
        <P>
          Lorem nostrud irure sit laborum Lorem ex fugiat anim magna. Nisi
          aliquip exercitation qui duis ut aliqua irure do mollit nisi.
          Cupidatat ipsum eiusmod magna adipisicing veniam do ad voluptate qui.
          Magna magna ad minim fugiat labore.
        </P>
      </Card>
      <Card img={"https://source.unsplash.com/random?wood"}>
        <H1>Motoren</H1>
        <P>
          Lorem nostrud irure sit laborum Lorem ex fugiat anim magna. Nisi
          aliquip exercitation qui duis ut aliqua irure do mollit nisi.
          Cupidatat ipsum eiusmod magna adipisicing veniam do ad voluptate qui.
          Magna magna ad minim fugiat labore.
        </P>
      </Card>
      <Card img={"https://source.unsplash.com/random?sky"}>
        <H1>Keine Ahnung</H1>
        <P>
          Lorem nostrud irure sit laborum Lorem ex fugiat anim magna. Nisi
          aliquip exercitation qui duis ut aliqua irure do mollit nisi.
          Cupidatat ipsum eiusmod magna adipisicing veniam do ad voluptate qui.
          Magna magna ad minim fugiat labore.
        </P>
      </Card>
      <Card img="/robi.jpg">
        <H1>Robis</H1>
        <P>
          Lorem nostrud irure sit laborum Lorem ex fugiat anim magna. Nisi
          aliquip exercitation qui duis ut aliqua irure do mollit nisi.
          Cupidatat ipsum eiusmod magna adipisicing veniam do ad voluptate qui.
          Magna magna ad minim fugiat labore.
        </P>
      </Card>
      <Card img={"https://source.unsplash.com/random?tree"}>
        <H1>Sägen</H1>
        <P>
          Lorem nostrud irure sit laborum Lorem ex fugiat anim magna. Nisi
          aliquip exercitation qui duis ut aliqua irure do mollit nisi.
          Cupidatat ipsum eiusmod magna adipisicing veniam do ad voluptate qui.
          Magna magna ad minim fugiat labore.
        </P>
      </Card>
      <Card img={"https://source.unsplash.com/random?flower"}>
        <H1>Ideen</H1>
        <P>
          Lorem nostrud irure sit laborum Lorem ex fugiat anim magna. Nisi
          aliquip exercitation qui duis ut aliqua irure do mollit nisi.
          Cupidatat ipsum eiusmod magna adipisicing veniam do ad voluptate qui.
          Magna magna ad minim fugiat labore.
        </P>
      </Card>
    </Grid>
    <Footer />
  </>
);

export default Home;
