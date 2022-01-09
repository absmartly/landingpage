import React, { FC, ReactNode, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  const [path, setPath] = useState<boolean>();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPath(window.location.pathname === "/" ? true : false);
    }
  }, [path]);
  return (
    <div className="relative min-h-screen">
      <Navbar home={path} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
