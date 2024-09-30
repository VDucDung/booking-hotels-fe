"use client";

import AppFooter from "./footer/Footer";
import AppHeader from "./header/Header";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppHeader />
      <main className="min-h-screen">
        {children}
      </main>
      <AppFooter />
    </>
  );
};

export default AppLayout;
