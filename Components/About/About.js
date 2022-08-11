import React from "react";
import { Container, DivImage, TextH2, TextP } from "./AboutStyles";
import User1 from "../../public/Assets/UA1.png";
import User2 from "../../public/Assets/UA2.png";
import User3 from "../../public/Assets/UA3.png";
import User4 from "../../public/Assets/UA4.png";
import User5 from "../../public/Assets/UA5.png";
import User6 from "../../public/Assets/UA6.png";
import User7 from "../../public/Assets/UA7.png";
import User8 from "../../public/Assets/UA8.png";
import Image from "next/image";
const About = () => {
  return (
    <Container>
      <TextH2>TimeNow is used by the most influential people.</TextH2>
      <DivImage>
        <Image width={40} height={40} src={User1} alt="user timenow" />
        <Image width={40} height={40} src={User2} alt="user timenow" />
        <Image width={40} height={40} src={User3} alt="user timenow" />
        <Image width={40} height={40} src={User4} alt="user timenow" />
        <Image width={40} height={40} src={User5} alt="user timenow" />
        <Image width={40} height={40} src={User6} alt="user timenow" />
        <Image width={40} height={40} src={User7} alt="user timenow" />
        <Image width={40} height={40} src={User8} alt="user timenow" />
      </DivImage>
      <TextP>
        The most influential people on Facebook , Twitter, and Instagram are
        using TweetNow to schedule posts when their followers are most active.
      </TextP>
      <TextP>
        They generally receive 23% more engagement than people who do not.
      </TextP>
    </Container>
  );
};

export default About;
