import styled from "styled-components";

export const Li = styled.a`
  text-decoration: none;
  list-style: none;
  margin-left: 80px;
  font-size: 20px;

  &:first-child {
    margin-left: 0;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  @media (max-width: 1180px) {
    flex-direction: column;
    & > ${Li} {
      margin: 10px 0;
      &:last-child {
        margin-bottom: 20px;
      }
      &:first-child {
        margin-top: 20px;
      }
    }
  }
`;
