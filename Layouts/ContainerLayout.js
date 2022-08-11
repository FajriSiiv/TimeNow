import React from "react";
import FooterLayout from "./FooterLayout";
import HeaderLayout from "./HeaderLayout";

const ContainerLayout = ({ children }) => {
  return (
    <div style={{ position: "relative", background: "#ffffff" }}>
      <HeaderLayout />
      {children}
      <FooterLayout />
    </div>
  );
};

export default ContainerLayout;
