import styled from "styled-components";

export const Container = styled.footer({
  padding: "0 15px",
  paddingBottom: "20px",
});

export const Div = styled.div({
  display: "flex",
  justifyContent: "space-between",
  marginTop: 20,
  width: "80%",
});

export const DivLink = styled.div({
  display: "flex",
  flexDirection: "column",
});

export const TextH4 = styled.h4({
  fontSize: "1.1rem",
  fontWeight: "900",
  marginBottom: 15,
});

export const LinkA = styled.a({
  margin: "5px 0",
  fontSize: ".9rem",
  color: "#00000061",
  fontWeight: "600",
});

export const DivEmail = styled.div({
  display: "flex",
  padding: "3px",
  border: "1px solid #A8A9A9",
  minWidth: 290,
  borderRadius: "4px",
  width: "90vw",
});

export const InputE = styled.input({
  minWidth: "120px",
  width: "60%",
  outline: "none",
  border: "none",
  fontSize: ".9rem",
  "::placeholder": {
    paddingLeft: "5px",
    fontWeight: 500,
    color: "#00000061",
  },
});

export const Button = styled.button({
  fontSize: ".8rem",
  padding: "18px 0",
  width: "80%",
  background: "#1D1B67",
  color: "#fff",
  borderRadius: "5px",
  fontWeight: "bold",
  outline: "none",
  border: "none",
  cursor: "pointer",
});
