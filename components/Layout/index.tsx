import React from "react";
import AppHeader from "Components/AppHeader";
import AppFooter from "Components/AppFooter";
import { ComponentHasChild } from "types";

const Layout: React.FC<ComponentHasChild> = ({ children }) => {
  return (
    <div className='my-app'>
      <AppHeader />
      <main>{children}</main>
      <AppFooter />
    </div>
  );
};

export default Layout;
