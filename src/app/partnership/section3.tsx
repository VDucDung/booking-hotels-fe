import Image from "next/image";

export default function Section3(){
  return (
    <section className="container mx-auto py-16 px-[40px]">
    <h2 className="text-3xl font-bold text-gray-800 mb-12">Chia sẻ từ các host khác</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div className="bg-white border-2 border-yellow-400 rounded-lg p-6">
        <p className="text-gray-600 italic mb-4">{`"Tôi có thể đăng trong vòng 15 phút và không quá hai giờ sau, tôi đã có đơn đặt phòng đầu tiên!"`}</p>
        <div className="flex items-center space-x-4">
          <Image src="/images/booking-icon.jpg" alt="Avatar" className="h-12 w-12 rounded-full" width={22} height={22}/>
          <div>
            <h4 className="text-sm font-bold text-gray-700">Parley Rose</h4>
            <p className="text-sm text-gray-500">Host ở Vương quốc Anh</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white border-2 border-yellow-400 rounded-lg p-6">
        <p className="text-gray-600 italic mb-4">{`"booking hotel StayBuddy là nền tảng dễ hiểu, dễ làm việc nhất. Điều này tạo điều kiện để chúng tôi tập trung vào những khía cạnh mà mình có thể thực sự mang đến thêm giá trị."`}</p>
        <div className="flex items-center space-x-4">
          <Image src="/images/booking-icon.jpg" alt="Avatar" className="h-12 w-12 rounded-full" width={22} height={22}/>
          <div>
            <h4 className="text-sm font-bold text-gray-700">Martin Fieldman</h4>
            <p className="text-sm text-gray-500">Giám đốc điều hành, Abodebed</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white border-2 border-yellow-400 rounded-lg p-6">
        <p className="text-gray-600 italic mb-4">{`"booking hotel StayBuddy chiếm lượng tỉ lệ lớn nhất trong tổng lượng khách của chỗ nghỉ và đã giúp chúng tôi gặt hái được thành quả như hôm nay."`}</p>
        <div className="flex items-center space-x-4">
          <Image src="/images/booking-icon.jpg" alt="Avatar" className="h-12 w-12 rounded-full"width={22} height={22}/>
          <div>
            <h4 className="text-sm font-bold text-gray-700">Michel và Asja</h4>
            <p className="text-sm text-gray-500">Chủ sở hữu La Maison de Souhey</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white border-2 border-yellow-400 rounded-lg p-6">
        <p className="text-gray-600 italic mb-4">{`"Du khách đến Charming Lofts từ khắp nơi trên thế giới và booking hotel StayBuddy đã góp phần rất nhiều trong việc này."`}</p>
        <div className="flex items-center space-x-4">
          <Image src="/images/booking-icon.jpg" alt="Avatar" className="h-12 w-12 rounded-full" width={22} height={22}/>
          <div>
            <h4 className="text-sm font-bold text-gray-700">Louis Gonzalez</h4>
            <p className="text-sm text-gray-500">Charming Lofts, Los Angeles</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white border-2 border-yellow-400 rounded-lg p-6">
        <p className="text-gray-600 italic mb-4">{`"Sau khi hoàn tất cài đặt chỗ nghỉ trên Booking.com, tỉ lệ lấp phòng tăng vọt và khách đặt trước từ 5-6 tháng."`}</p>
        <div className="flex items-center space-x-4">
          <Image src="/images/booking-icon.jpg" alt="Avatar" className="h-12 w-12 rounded-full" width={22} height={22}/>
          <div>
            <h4 className="text-sm font-bold text-gray-700">Zoey Berghoff</h4>
            <p className="text-sm text-gray-500">Host ở Hoa Kỳ</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white border-2 border-yellow-400 rounded-lg p-6">
        <p className="text-gray-600 italic mb-4">{`"Quá trình bắt đầu sử dụng booking hotel StayBuddy vô cùng đơn giản và không hề tốn thời gian."`}</p>
        <div className="flex items-center space-x-4">
          <Image src="/images/booking-icon.jpg" alt="Avatar" className="h-12 w-12 rounded-full" width={22} height={22}/>
          <div>
            <h4 className="text-sm font-bold text-gray-700">Shawn Ritzenthaler</h4>
            <p className="text-sm text-gray-500">Chủ sở hữu Hollywood Hills Mansion</p>
          </div>
        </div>
      </div>

    </div>
  </section>
  )
}
