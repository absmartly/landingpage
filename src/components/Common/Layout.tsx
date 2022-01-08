import React, { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
