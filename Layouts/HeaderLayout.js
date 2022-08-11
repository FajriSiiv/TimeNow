import React, { useState } from "react";
import Image from "next/image";
import Logo from "../public/Assets/Logo.svg";
import HamMenu from "../public/Assets/HamMenu.svg";
import { Container, DivLink, LinkDiv, Linkers } from "./HeaderStyles";
import { Button } from "../pages/Hero/HeroStyles";
import Link from "next/link";

const HeaderLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const btnResponsive = () => {
    if (collapsed === false) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  };

  return (
    <Container>
      <Link href="/">
        <Image alt="Logo" src={Logo} width={30} height={30} />
      </Link>
      <Image alt="Menu" onClick={btnResponsive} src={HamMenu} />
      <DivLink
        style={{
          transform: collapsed ? "none" : "translateX(100%)",
        }}
      >
        <LinkDiv
          style={{
            flexDirection: "row",
            height: 60,
            justifyContent: "space-between",
            width: "100%",
            padding: "0 15px",
          }}
        >
          <Image src={Logo} width={30} height={30} alt="Logo" />
          <Image src={HamMenu} onClick={btnResponsive} alt="Menubar" />
        </LinkDiv>
        <LinkDiv
          style={{
            height: "90vh",
          }}
        >
          <Link href="/">
            <Linkers>Pricing</Linkers>
          </Link>
          <Link href="#features">
            <Linkers style={{ marginBottom: 20 }}>Features</Linkers>
          </Link>
          <LinkDiv>
            <Button style={{ width: 150 }}>Start Scheduling</Button>
          </LinkDiv>
        </LinkDiv>
      </DivLink>
    </Container>
  );
};

export default HeaderLayout;
