"use client";

import dynamic from "next/dynamic";
const ChangePassword = dynamic(() =>import("@/components/ChangePassword/ChangePassword"), { ssr: false });
const ProfileLayout = dynamic(() =>import("../ProfileLayout"), { ssr: false });

const ChangePasswordPage = () => {
  return (
    <ProfileLayout>
      <ChangePassword/>
    </ProfileLayout>
  );
};

export default ChangePasswordPage;
