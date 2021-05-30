import React from "react";
import { Container, Header } from "./styles/services";

export default function Services({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Header>
        Services <br />
        <h3>comming soon...</h3>
      </Header>
    </Container>
  );
}
