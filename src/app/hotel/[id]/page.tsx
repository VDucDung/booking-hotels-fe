import Image from "next/image";
import images from "@/assets/images";
function HotelDetails() {
  const isEmpty = true;
  return (
    <div className="xl:p-4">
      <h2 className="text-2xl font-semibold text-dark shadow-md p-4">
      HotelDetails
      </h2>
      {isEmpty ? (
        <div className="mt-3">
          <div className="flex justify-center">
            <Image src={images.empty} alt="empty" width={300} height={300} />
          </div>
          <div className="text-center mt-3">Bạn hiện không có đơn hàng nào</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

        </div>
      )
    }
    </div>
  );
}

export default HotelDetails;
