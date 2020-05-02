import { FC } from "react";
import { Logo } from "./Logo";
import styled from "styled-components";
import { Navigation, Li } from "./Navigation";
import { Copyright } from "@styled-icons/fa-regular/Copyright";
import Link from "next/link";

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 70px;
  background-color: #6ab04c;
  border-top: 15px solid #e4803a;
  color: white;
`;

const StyledCopyright = styled(Copyright)`
  width: 18px;
  height: 18px;
`;

export const Footer: FC = () => {
  return (
    <FooterWrapper>
      <Li>
        <StyledCopyright /> 2020
      </Li>
      <Navigation>
        <Link passHref href="/impressum">
          <Li>Impressum</Li>
        </Link>
        <Link passHref href="/anfahrt">
          <Li>Anfahrt</Li>
        </Link>
        <Link passHref href="/kontakt">
          <Li>Kontakt</Li>
        </Link>
      </Navigation>
      <Logo />
    </FooterWrapper>
  );
};
