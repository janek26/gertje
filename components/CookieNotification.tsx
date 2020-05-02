import styled from "styled-components";
import { FC } from "react";

export const CookieNotificationWrapper = styled.div`
  position: fixed;
  right: 70px;
  bottom: 40px;
  max-width: 200px;
  width: 100%;
  height: 150px;
  z-index: 1000;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
`;

export const CookieNotification: FC = () => {
  return (
    <CookieNotificationWrapper>
      <h1>Cookies 🍪</h1>
      <p>
        Durch das Nutzen der Website stimme ich der Verwendung von Cookies zu.
      </p>
    </CookieNotificationWrapper>
  );
};
