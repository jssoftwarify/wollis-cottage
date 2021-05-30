import React from "react";
import {
  NavbarLayout,
  About,
  Contacts,
  Gallery,
  Services,
  Main,
  Footer,
} from "./components";
export default function App() {
  return (
    <>
      <NavbarLayout />
      <Main />
      <About id="About" />
      <Gallery id="Gallery" />
      <Services id="Services" />
      <Contacts id="Contacts" />
      <Footer />
    </>
  );
}
//<NavbarLayout />
