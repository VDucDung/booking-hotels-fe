"use client";
import React from 'react';
import { Eye } from "lucide-react";
import { Input } from 'antd';
import AppButton from '@/components/button/AppButton';
import Link from 'next/link';

const LoginForm = () => {
  return (
    <div className="max-w-md mx-auto mt-[155px] p-6">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Nhập mật khẩu của bạn
        </h1>
        
        <div className="space-y-1">
          <p className="text-sm text-gray-700">
            Vui lòng nhập mật khẩu Booking.com của bạn cho
          </p>
          <p className="text-sm font-semibold text-gray-900">
            vuducdung24022003@gmail.com
          </p>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Mật khẩu
          </label>
          <div className="relative">
            <Input 
              type="password"
              placeholder="Nhập mật khẩu của bạn"
              className="w-full pr-10"
            />
            <button 
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              aria-label="Toggle password visibility"
            >
              <Eye className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>

        <AppButton href='signup/verify' className="w-full bg-[#00ba51] hover:bg-green-700 text-white">
          Đăng nhập
        </AppButton>

        <div className="text-center">
          <Link href="accountRecovery" className="text-[#0071c2] hover:text-blue-700 text-sm">
            Quên mật khẩu?
          </Link>
        </div>

        <div className="text-center text-sm text-gray-600 space-y-2">
          <p>
            Qua việc đăng nhập hoặc tạo tài khoản, bạn đồng ý với các
          </p>
          <p>
            <a href="#" className="text-blue-600 hover:text-blue-700">Điều khoản và Điều kiện</a>
            {' '}cũng như{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700">Chính sách An toàn và Bảo mật</a>
            {' '}của chúng tôi
          </p>
        </div>

        <div className="text-center text-sm text-gray-600">
          <p>Bảo lưu mọi quyền.</p>
          <p>Bản quyền (2024) - booking hotels StayBuddy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
