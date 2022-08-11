import React from "react";
import {
  AView,
  Button,
  Container,
  ContainerDemo,
  TextH3,
  TextP,
  TextSpan,
} from "./DemoStyles";

const ViewDemo = () => {
  return (
    <Container id="features">
      <ContainerDemo>
        <TextP>Unified Dashboard</TextP>
        <TextH3>Customizable dashboard for all platforms.</TextH3>
        <TextSpan>
          Use Twitter and Instagram but not LinkedIn? You can customize your
          dashboard to your liking. You can even schedule the saame post to
          individual platforms instead of all platforms.
        </TextSpan>
        <Button>Start Scheduling</Button>
      </ContainerDemo>
      <ContainerDemo style={{ marginTop: "40px" }}>
        <TextP>Enchanced Analytics</TextP>
        <TextH3>Real-time data that tells you everything.</TextH3>
        <TextSpan>
          Get detailed reports of what&apos;s working and what isn&apos;t.
          Engagement rates, impressions, views, and much more data is available
          to you through out in-depth dashboard tool.
        </TextSpan>
        <AView>View Live Demo -&gt; </AView>
      </ContainerDemo>
    </Container>
  );
};

export default ViewDemo;
