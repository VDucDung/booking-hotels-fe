import dynamic from "next/dynamic";
const ChangePassword = dynamic(() =>import("@/components/changePassword/ChangePassword"), { ssr: false });

const ChangePasswordPage = () => {
  return (
      <ChangePassword/>
  );
};

export default ChangePasswordPage;
