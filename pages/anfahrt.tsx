import { Header } from "../components/Header";

import { Footer } from "../components/Footer";
import { NextPage } from "next";
import { PageLayout } from "../components/PageLayout";

import { H1 } from "../components/Typography";
import styled from "styled-components";

const IFrame = styled.iframe`
  border: none;
  margin: 0;
  padding: 0;
  border-radius: 3px;
  background-color: #e5e3e0;
`;

const Impressum: NextPage = () => (
  <>
    <Header colorful fixed={false} />
    <PageLayout>
      <H1>Anfahrt</H1>
      <IFrame
        width="100%"
        height="600px"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=gertje%20apen&t=&z=15&ie=UTF8&iwloc=&output=embed"
        scrolling="no"
      ></IFrame>
    </PageLayout>
    <Footer />
  </>
);

export default Impressum;
