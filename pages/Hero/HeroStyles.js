import styled from "styled-components";

export const Container = styled.div({
  background: "#fff",
  marginTop: "90px",
});

export const LeftContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  padding: "0 15px",
});

export const RightContainer = styled.div({
  marginTop: "30px",
  padding: "30px 15px",
  position: "relative",
});

export const Title = styled.h1({
  fontSize: "2rem",
  maxWidth: 290,
  color: "#1D1B67",
});

export const Text = styled.p({
  fontSize: ".9rem",
  marginTop: "8px",
  maxWidth: 290,
  color: "#0000008f",
  textAlign: "justify",
});

export const ContainerButton = styled.div({
  display: "flex",
  marginTop: "8px",
  justifyContent: "space-between",
  maxWidth: 350,
});

export const Button = styled.button({
  fontSize: ".8rem",
  padding: "18px 0",
  width: "49%",
  background: "#1D1B67",
  color: "#fff",
  borderRadius: "5px",
  fontWeight: "bold",
  outline: "none",
  border: "none",
  cursor: "pointer",
});

export const DivMark = styled.div({
  display: "flex",
  alignContent: "center",
});

export const Learn = styled.a({
  textDecoration: "underline",
  marginLeft: "30px",
  color: "#415a77",
  fontWeight: "bold",
  textUnderlinePosition: "under",
  fontSize: ".9rem",
});

export const DivLearn = styled.div({
  marginTop: "15px",
});

export const BackgroundHero = styled.div({
  position: "absolute",
  background: "#46CCDE",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});
