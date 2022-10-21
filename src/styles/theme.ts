import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    green: "#adea97",
    blue: "#7c9bfb",
    skyBlue: "#d2ddff",
    yellow: "#ffefb0",
    pink: "#f3b2b2",
    brown: "#c1b097",
    white: "#ffffff",
  },
};

const customMediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  mobile: customMediaQuery(767),
};
