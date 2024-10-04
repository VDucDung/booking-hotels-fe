"use client";
import dynamic from "next/dynamic";
const ProfileEdit = dynamic(() =>import("@/components/ProfileEdit/ProfileEdit"), { ssr: false });

const Profile = () => {
  return (
      <ProfileEdit/>
  );
};

export default Profile;
