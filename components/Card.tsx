import styled from "styled-components";
import { FC } from "react";
import { P } from "./Typography";

const CardWrapper = styled.div<{ img: string }>`
  position: relative;
  width: 100%;
  padding-top: 90%;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: white;
  background-image: url('${({ img }) => img}');
  background-size: cover;
  background-position: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 67% 40px 20px;
  color: white;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), transparent 35%);
  transition: all 300ms ease-in-out;
  & > ${P} {
    opacity: 0;
    transition: all 300ms ease-in-out;
  }

  &:hover {
    padding-top: 20px;
    backdrop-filter: blur(4px) brightness(80%);

    & > ${P} {
      transition-delay: 200ms;
      opacity: 1;
    }
  }
`;

export const Card: FC<{ img: string }> = ({ children, img = "" }) => {
  return (
    <CardWrapper img={img}>
      <CardContent>{children}</CardContent>
    </CardWrapper>
  );
};
