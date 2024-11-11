"use client"
import { useClientTranslation } from "@/i18n/client";

const AccountVerification = () => {
  const { t } = useClientTranslation("Common");
  const email = JSON.stringify(sessionStorage.getItem("userEmail"));


  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="container mx-auto">
      <div className="max-w-2xl pt-[165px]">
        <h1 className="text-2xl font-semibold mb-8">{t("partnership.verify.title01")}</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <p className="text-gray-600">
          {t("partnership.verify.title02")}{' '}
            <span className="font-medium text-gray-900">{email}</span>.
          </p>
          <p className="text-gray-600">
          {t("partnership.verify.title03")}
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AccountVerification;
