import React from "react";
import AppHeader from "Components/AppHeader";
import AppFooter from "Components/AppFooter";
import { ComponentHasChild } from "types";

interface LayoutProp {
  headerGapColor?: string;
}

const Layout: React.FC<ComponentHasChild & LayoutProp> = ({
  children,
  headerGapColor,
}) => {
  return (
    <div className='my-app'>
      <AppHeader />
      <div className={`h-28 sm:h-32 ${headerGapColor || "bg-secondary"}`}></div>
      <main>{children}</main>
      <AppFooter />
    </div>
  );
};

export default Layout;
