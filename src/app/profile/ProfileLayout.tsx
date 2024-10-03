"use client"; 

import { ReactNode } from 'react';
import dynamic from "next/dynamic";
const SideBar = dynamic(() =>import("@/components/sidebar/SideBar"), { ssr: false });


function ProfileLayout({ children }: { children: ReactNode }) {

  return (
    <>
      <main className="container mx-auto grid grid-cols-12 gap-4 py-14">
        <aside className="lg:col-span-3 col-span-full rounded-md shadow-md">
          <SideBar />
        </aside>
        <section className="lg:col-span-9 col-span-full">
          {children}
        </section>
      </main>
    </>
  );
}

export default ProfileLayout;
