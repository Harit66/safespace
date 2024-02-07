import React from "react";
import NavBar from "../constant/NavBar/NavBar";
import Footer from "../constant/Footer/Footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar userType="endUser" />
      {children}
      <Footer userType="endUSer" />
    </>
  );
};

export default Layout;
