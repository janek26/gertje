import styled from "styled-components";
import Image from "next/image";

export const Logo = styled(Image).attrs({
  alt: "Logo",
  src: "/logo.png",
  width: 200,
  height: 100,
})`
  cursor: pointer;
`;
