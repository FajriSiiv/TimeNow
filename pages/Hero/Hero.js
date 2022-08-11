import React from "react";
import {
  BackgroundHero,
  Button,
  Container,
  ContainerButton,
  DivLearn,
  DivMark,
  Learn,
  LeftContainer,
  RightContainer,
  Text,
  Title,
} from "./HeroStyles";

import Check from "../../public/Assets/Shield.svg";
import HeroImage from "../../public/Assets/Mockup.webp";
import Image from "next/image";

const Hero = () => {
  return (
    <Container>
      <LeftContainer>
        <Title>Post when your audience is most active.</Title>
        <Text style={{ lineHeight: "1.4rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae
          eligendi repellat iste nulla unde.
        </Text>
        <ContainerButton>
          <Button>Start Scheduling</Button>
          <Button
            style={{
              background: "white",
              color: "#415a77",
            }}
          >
            View Demo
          </Button>
        </ContainerButton>
        <DivLearn>
          <DivMark>
            <Image width={20} height={20} src={Check} alt="Shield" />
            <Text style={{ marginLeft: "5px", marginTop: 0 }}>
              TimeNow does not sell your data.
            </Text>
          </DivMark>
          <Learn>Learn More</Learn>
        </DivLearn>
      </LeftContainer>
      <RightContainer>
        <BackgroundHero></BackgroundHero>
        <Image src={HeroImage} alt="mockup" />
      </RightContainer>
    </Container>
  );
};

export default Hero;
