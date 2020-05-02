import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

export const Li = styled.a`
  text-decoration: none;
  list-style: none;
  margin-left: 80px;
  font-size: 20px;

  &:first-child {
    margin-left: 0;
  }
`;
