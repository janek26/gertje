import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-gap: 60px;
  margin: -160px 70px 80px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
