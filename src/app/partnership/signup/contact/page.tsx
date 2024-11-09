import Image from "next/image";
import Link from "next/link";

const ContactForm = () => {
  return (
    <div className="max-w-md mx-auto mt-[155px] p-6">
      <h1 className="text-2xl font-semibold mb-4">Thông tin liên lạc</h1>
      
      <p className="text-gray-600 mb-6">
        Để tài khoản Booking.com của bạn được bảo mật, 
        chúng tôi cần biết họ tên đầy đủ và số điện thoại của bạn.
      </p>

      <form className="space-y-4">
        <div>
          <label className="block text-sm mb-2">Tên</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder=""
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Họ</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder=""
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Số điện thoại</label>
          <div className="flex">
            <div className="relative">
              <button className="h-full px-3 border border-gray-300 rounded-l-md flex items-center space-x-2 hover:bg-gray-50">
                <Image 
                  src="/images/vi.png"
                  alt="Vietnam flag"
                  className="w-6 h-4 object-cover"
                  width={24}
                  height={24}
                />
                <span className="text-gray-600">+84</span>
              </button>
            </div>
            <input
              type="tel"
              className="flex-1 px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=""
            />
          </div>
        </div>

        <p className="text-sm text-gray-600">
          Chúng tôi sẽ gửi mã xác thực 2 yếu tố đến số này khi Quý vị đăng nhập.
        </p>

        <Link href='password'>
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
          Tiếp theo
        </button>
        </Link>

        <div className="text-sm text-gray-600 text-center">
          Qua việc đăng nhập hoặc tạo tài khoản, bạn đồng ý với các{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Điều khoản và Điều kiện
          </a>{' '}
          cũng như{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Chính sách An toàn và Bảo mật
          </a>{' '}
          của chúng tôi
        </div>

        <div className="text-center text-sm text-gray-500 mt-8">
          <p>Bảo lưu mọi quyền.</p>
          <p>Bản quyền (2024) - booking hotel StayBuddy</p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
