import { ArrowRightIcon, CheckIcon } from "@/assets/icons";
import Link from "next/link";

export function Banner() {
  return (
    <div className="bg-[#00ba51] text-white mt-[115px]">
      <div className="container mx-auto p-10 flex">
        <div className="mt-8 px-4">
          <h2 className="text-4xl font-bold mb-4">Đăng nhà nghỉ dưỡng của Quý vị trên Booking hotel StayBuddy</h2>
          <p className="text-lg mb-4">Dù host là nghệ tay trái hay công việc toàn thời gian, hãy đăng nhà của bạn ngay hôm nay và nhanh chóng có thêm nguồn thu nhập.</p>
        </div>

        <div className="mt-8 bg-gray-100 p-6 rounded-md text-black mx-3">
          <h3 className="text-2xl font-bold mb-4">Đăng ký miễn phí</h3>
          <ul className="space-y-4">
            <li className="flex">
              <CheckIcon className='text-green-700 mr-3 w-6 h-6' width={22} height={22} />
              <span>45% host nhận được đơn đặt dịch vụ trong vòng 1 tuần</span>
            </li>
            <li className="flex">
              <CheckIcon className='text-green-700  mr-3 w-6 h-6' width={22} height={22} />
              <span>Chọn một trong hai cách nhận đơn đặt: xác nhận tự động hay xem trước để duyệt</span>
            </li>
            <li className="flex">
              <CheckIcon className='text-green-700 mr-3 w-6 h-6' width={22} height={22} />
              <span>Chúng tôi sẽ lý thanh toán hay Quý vị</span>
            </li>
          </ul>
          <Link href={'partnership/signup'}>
            <button className="w-full bg-[#00ba51] hover:bg-green-700 text-white px-6 py-3 rounded-md mt-4 flex items-center text-center justify-center">
              Bắt đầu ngay
              <ArrowRightIcon className='w-6 h-6 text-white' />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
