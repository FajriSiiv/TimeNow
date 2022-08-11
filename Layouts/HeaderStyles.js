import styled from "styled-components";

export const Container = styled.div({
  display: "flex",
  padding: "20px 15px",
  justifyContent: "space-between",
  position: "fixed",
  width: "100%",
  background: "white",
  top: 0,
  left: 0,
  zIndex: 99,
});

export const DivLink = styled.div({
  display: "flex",
  position: "fixed",
  height: "100vh",
  width: "100vw",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  background: "white",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 20,
  marginTop: 10,
});

export const LinkDiv = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const Linkers = styled.a({
  color: "#0000008f",
  margin: "10px 0",
  fontSize: "1.3rem",
  fontWeight: "500",
});
