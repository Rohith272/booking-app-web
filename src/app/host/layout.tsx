import Footer from "@/components/layout/footer";
import HostNavBar from "@/components/layout/host-nav-bar/header";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen">
      <HostNavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
