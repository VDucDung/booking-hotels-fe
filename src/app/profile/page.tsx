"use client";
import dynamic from "next/dynamic";
const ProfileEdit = dynamic(() =>import("@/components/ProfileEdit/ProfileEdit"), { ssr: false });
const ProfileLayout = dynamic(() =>import("./ProfileLayout"), { ssr: false });

const Profile = () => {
  return (
    <ProfileLayout>
      <ProfileEdit/>
    </ProfileLayout>
  );
};

export default Profile;
