import Image from "next/image";
import React from "react";
import {
  Button,
  Container,
  Div,
  DivEmail,
  DivLink,
  InputE,
  LinkA,
  TextH4,
} from "./FooterStyles";
import Logo from "../public/Assets/Logo.svg";
const FooterLayout = () => {
  return (
    <Container>
      <Image alt="Logo" src={Logo} width={30} height={30} />
      <Div>
        <DivLink>
          <TextH4>Product</TextH4>
          <LinkA>Homepage</LinkA>
          <LinkA>Pricing</LinkA>
          <LinkA>Features</LinkA>
        </DivLink>
        <DivLink>
          <TextH4>Help</TextH4>
          <LinkA>Live Chat</LinkA>
          <LinkA>Send Email</LinkA>
          <LinkA>FAQ</LinkA>
        </DivLink>
      </Div>
      <Div>
        <DivLink>
          <TextH4>Company</TextH4>
          <LinkA>About</LinkA>
          <LinkA>Customers</LinkA>
          <LinkA>Blog</LinkA>
        </DivLink>
      </Div>
      <Div
        style={{
          flexDirection: "column",
        }}
      >
        <TextH4
          style={{
            fontSize: "1rem",
          }}
        >
          Try TweetNow
        </TextH4>
        <DivEmail
          style={{
            width: 400,
          }}
        >
          <InputE placeholder="Email Address" />
          <Button
            style={{
              maxWidth: "50%",
            }}
            onClick={() => alert("Thanks, check your email")}
          >
            Start Scheduling
          </Button>
        </DivEmail>
      </Div>
    </Container>
  );
};

export default FooterLayout;
