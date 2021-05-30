import React, { useState } from "react";
import {
  Container,
  ListElement,
  LogoElement,
  LogoBorder,
  LogoBottom,
  LogoTop,
  HamburgerContainer,
} from "./styles/navbar";
import Hamburger from "hamburger-react";
import { Link } from "react-scroll";

export default function NavbarLayout({ children, ...restProps }) {
  const [isOpen, setOpen] = useState(false);

  function myFunction() {
    var x = document.getElementById("main");
    if (isOpen === true) {
      x.style.display = "none";
      setOpen(false);
    } else {
      x.style.display = "flex";
      setOpen(true);
    }
  }

  return (
    <>
      <Container name="main" id="main">
        <ListElement>
          <Link to="About" spy={true} smooth={true}>
            About
          </Link>
        </ListElement>

        <ListElement>
          <Link to="Gallery" spy={true} smooth={true}>
            Gallery
          </Link>
        </ListElement>
        <LogoElement>
          <LogoTop>Wollis Cottage</LogoTop>
          <br />
          <LogoBorder />
          <LogoBottom>Boleslav 35</LogoBottom>
        </LogoElement>

        <ListElement>
          <Link to="Services" spy={true} smooth={true}>
            Services
          </Link>
        </ListElement>
        <ListElement>
          <Link to="Contacts" spy={true} smooth={true}>
            Contacts
          </Link>
        </ListElement>
      </Container>
      <HamburgerContainer>
        <Hamburger color="white" toggled={isOpen} toggle={() => myFunction()} />
      </HamburgerContainer>
    </>
  );
}
