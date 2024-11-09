import Image from "next/image";

export default function Section2(){
  return (
    <section className="container mx-auto py-16 px-[40px] ">
    <h2 className="text-3xl font-bold text-gray-800 mb-12">Nổi bật ngay từ đầu</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <div className="flex justify-center mb-4">
          <Image src="/images/Review.png" alt="Icon" className="h-16 w-16" width={22} height={22}/>
        </div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Nhập đánh giá dành cho chỗ nghỉ</h3>
        <p className="text-sm text-gray-500">
          Chúng tôi nhập điểm đánh giá từ các nền tảng khác và hiển thị điểm trong trang chỗ nghỉ của quý vị trên Booking.com.
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <div className="flex justify-center mb-4">
          <Image src="/images/Puzzle.png" alt="Icon" className="h-16 w-16" width={22} height={22}/>
        </div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Nhập thông tin chỗ nghỉ</h3>
        <p className="text-sm text-gray-500">
          Dễ dàng nhập thông tin của chỗ nghỉ và đồng bộ lịch phòng trống với các nền tảng khác, tránh tình trạng đặt phòng trùng lặp.
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <div className="flex justify-center mb-4">
          <Image src="/images/Search.png" alt="Icon" className="h-16 w-16" width={22} height={22}/>
        </div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Nổi bật trên thị trường</h3>
        <p className="text-sm text-gray-500">
          {`Nhãn "Mới trên booking hotel StayBuddy" giúp chỗ nghỉ nổi bật trong kết quả tìm kiếm.`}
        </p>
      </div>
    </div>
  </section>
  )
}
