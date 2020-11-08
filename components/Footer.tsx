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
  background-color: #333333;
  border-top: 15px solid #ee7203;
  color: white;

  @media (max-width: 1180px) {
    flex-direction: column;
  }
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
