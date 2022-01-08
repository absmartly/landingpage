import React, { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
