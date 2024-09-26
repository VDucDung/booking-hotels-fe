"use client";

import AppFooter from "./footer/Footer";
import AppHeader from "./header/Header";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppHeader />
      <main className="overflow-x-hidden h-screen">
        {children}
      </main>
      <AppFooter />
    </>
  );
};

export default AppLayout;
