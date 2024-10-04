import dynamic from "next/dynamic";
const ChangePassword = dynamic(() =>import("@/components/ChangePassword/ChangePassword"), { ssr: false });

const ChangePasswordPage = () => {
  return (
      <ChangePassword/>
  );
};

export default ChangePasswordPage;
