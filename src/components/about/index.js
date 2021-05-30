import React from "react";
import { Container, Header } from "./styles/about";

export default function About({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Header>About</Header>
    </Container>
  );
}
