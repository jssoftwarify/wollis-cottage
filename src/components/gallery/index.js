import React from "react";
import { Container, Header } from "./styles/gallery";
export default function Gallery({ children, ...restProps }, props) {
  return (
    <Container {...restProps}>
      <Header>Gallery</Header>
    </Container>
  );
}
