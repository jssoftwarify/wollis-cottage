import React from "react";
import {
  Container,
  Header,
  LogoElement,
  LogoBorder,
  LogoBottom,
  LogoTop,
} from "./styles/main";
export default function Main({ children, ...restProps }, props) {
  return (
    <Container {...restProps}>
      <Header>
        <LogoTop>Wollis Cottage</LogoTop>
        <LogoBorder />
        <LogoBottom>51.006769114061285, 15.02881897489864</LogoBottom>
      </Header>
    </Container>
  );
}
