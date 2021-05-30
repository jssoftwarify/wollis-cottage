import React from "react";
import {
  Container,
  LogoElement,
  LogoBorder,
  LogoBottom,
  LogoTop,
} from "./styles/footer.js";

export default function Footer({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <LogoElement>
        <LogoTop>Wollis Cottage</LogoTop>
        <br />
        <LogoBorder />
        <LogoBottom>Boleslav 35</LogoBottom>
      </LogoElement>
    </Container>
  );
}
