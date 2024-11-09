import Link from "next/link";

const SignupForm = () => {
  return (
    <div className="max-w-md mx-auto mt-[155px] p-6">
      <h1 className="text-2xl font-semibold mb-2">Tạo tài khoản đối tác</h1>
      <p className="text-gray-600 mb-6">
        Tạo tài khoản để đăng ký và quản lý chỗ nghỉ.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-2">Địa chỉ email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="vuducdung@gmail.com"
          />
        </div>

        <Link href="contact">
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
          Tiếp tục
        </button>
        </Link>

        <div className="text-center text-sm text-gray-600">
          Quý vị có thắc mắc về chỗ nghỉ của mình hay extranet? Hãy ghé thăm{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Trung tâm Trợ giúp Đối tác
          </a>{' '}
          để tìm hiểu thêm.
        </div>

        <Link href='signin'>
        <button className="w-full border border-blue-500 text-blue-500 py-2 rounded-md hover:bg-blue-50 transition-colors">
          Đăng nhập
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
          <p>Bản quyền (2024) - booking hotels StayBuddy</p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
