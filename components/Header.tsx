import { FC, useState, useEffect } from "react";
import { Logo } from "./Logo";
import styled from "styled-components";
import { Navigation, Li } from "./Navigation";
import { FacebookSquare } from "@styled-icons/fa-brands/FacebookSquare";
import { MapMarkerAlt } from "@styled-icons/fa-solid/MapMarkerAlt";
import { PhoneSquareAlt } from "@styled-icons/fa-solid/PhoneSquareAlt";
import Link from "next/link";

const HeaderWrapper = styled.header<{
  solid: boolean;
  colorful?: boolean;
  fixed?: boolean;
}>`
  z-index: 2;
  padding: 40px 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ solid, colorful }) =>
    colorful
      ? `linear-gradient(
          0deg,
          #E4803A 15px,
          #6ab04c 15px,
          #6ab04c 100%
        )`
      : solid
      ? `linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.8) 0%,
          rgba(0, 0, 0, 0.4) 55%,
          rgba(0, 0, 0, 0) 100%
        )`
      : `linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.6) 0%,
          rgba(0, 0, 0, 0.24) 46.35%,
          rgba(0, 0, 0, 0) 100%
        )`};
  color: white;
  position: ${({ fixed }) => (fixed ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  right: 0;
  transition: all 200ms ease-in-out;

  @media (max-width: 1180px) {
    flex-direction: column;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIconsWrapper = styled(Flex)`
  & > a {
    width: 28px;
    height: 28px;
    margin-left: 20px;
    & > svg {
      width: 28px;
      height: 28px;
      color: white;
    }
  }
`;

const SocialIcons: FC = () => {
  return (
    <SocialIconsWrapper>
      <a target="_blank" href="https://www.facebook.com/JuergenGertje">
        <FacebookSquare />
      </a>
      <Link href="/anfahrt">
        <a>
          <MapMarkerAlt />
        </a>
      </Link>
      <a target="_blank" href="tel:04489935661">
        <PhoneSquareAlt />
      </a>
    </SocialIconsWrapper>
  );
};

export const Header: FC<{ colorful?: boolean; fixed?: boolean }> = ({
  colorful,
  fixed = true,
}) => {
  const [isSolid, setSolid] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setSolid(window.scrollY > 200);
    };
    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  return (
    <HeaderWrapper colorful={colorful} solid={isSolid} fixed={fixed}>
      <Flex>
        <Navigation>
          <Link href="/">
            <Logo />
          </Link>
          <Link passHref href="/">
            <Li>Home</Li>
          </Link>
          <Link passHref href="/ueber">
            <Li>Über uns</Li>
          </Link>
          <Link passHref href="/whatever">
            <Li>Whatever</Li>
          </Link>
        </Navigation>
      </Flex>
      <SocialIcons />
    </HeaderWrapper>
  );
};
