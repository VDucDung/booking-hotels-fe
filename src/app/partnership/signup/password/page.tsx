"use client";
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

const PasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="max-w-md mx-auto mt-[155px] p-6">
      <h1 className="text-2xl font-semibold mb-2">Tạo mật khẩu</h1>
      
      <p className="text-gray-600 mb-6">
        Dùng ít nhất 10 ký tự, trong đó có chữ hoa, chữ thường và số.
      </p>

      <form className="space-y-4">
        <div>
          <label className="block text-sm mb-2">
            Mật khẩu <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              placeholder="Nhập mật khẩu"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm mb-2">
            Xác nhận mật khẩu <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              placeholder="Nhập lại mật khẩu"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <Link href={'verify'}>
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors mt-6">
          Tạo tài khoản
        </button>
        </Link>

        <p className="text-sm text-gray-600 text-center">
          Qua việc đăng nhập hoặc tạo tài khoản, bạn đồng ý với các{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Điều khoản và Điều kiện
          </a>{' '}
          cũng như{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Chính sách An toàn và Bảo mật
          </a>{' '}
          của chúng tôi
        </p>

        <div className="text-center text-sm text-gray-500 mt-8">
          <p>Bảo lưu mọi quyền.</p>
          <p>Bản quyền (2024) - booking hotel StayBuddy</p>
        </div>
      </form>
    </div>
  );
};

export default PasswordForm;
