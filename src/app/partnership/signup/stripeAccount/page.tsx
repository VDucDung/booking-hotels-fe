"use client";

import React, { useState } from 'react';
import { callApi } from '@/api/apiUtils';
import Cookies from "js-cookie";

const CreateStripeAccountPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleCreateStripeAccount = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      const customHeaders = {
        "accept-language": `${Cookies.get("lang") || "vi"}`,
      };

      const res = await callApi('POST', `/stripe/create-stripe-account`, null, customHeaders);

      const { onboardingUrl } = res?.data?.data;

      window.location.href = onboardingUrl;
    } catch (error) {
      console.error('Lỗi khi tạo tài khoản Stripe:', error);
      setError('Không thể tạo tài khoản Stripe. Vui lòng thử lại sau!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          Kết nối tài khoản Stripe
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Để nhận thanh toán từ hệ thống, bạn cần kết nối tài khoản Stripe. Sau khi kết nối, bạn có thể nhận tiền trực tiếp qua tài khoản Stripe của mình.
        </p>
        <button
          onClick={handleCreateStripeAccount}
          disabled={loading}
          className={`w-full py-2 px-4 text-white font-medium rounded-lg 
            ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}
          `}
        >
          {loading ? 'Đang xử lý...' : 'Kết nối Stripe'}
        </button>
        {error && (
          <p className="text-red-500 text-center mt-4">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default CreateStripeAccountPage;
