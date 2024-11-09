import Accordion from "./Accordion";

export default function Section4() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto space-y-6 px-[40px]">
        <div className="flex space-x-6">       
          <div>
          <Accordion
            title="Nếu khách làm hư hỏng chỗ nghỉ của tôi thì sao?"
            content="Chủ chỗ nghỉ có thể yêu cầu khách đặt cọc để phòng hư hại. Các khoản đặt cọc này giúp bù đắp những hư hại do khách gây ra, để Quý vị an tâm rằng chỗ nghỉ của mình sẽ được sử dụng một cách đúng mực. Nếu có vấn đề xảy ra, Quý vị có thể báo cáo hành vi sai phạm."
          /></div>
          <div>
            <Accordion
              title="Khi nào chỗ nghỉ của tôi sẽ được online?"
              content="Sau khi hoàn tất việc tạo đăng ký chỗ nghỉ, Quý vị có thể mở chỗ nghỉ để nhận đặt phòng trên trang của chúng tôi. Chúng tôi có thể yêu cầu Quý vị xác minh chỗ nghỉ trước khi có thể bắt đầu nhận đặt phòng, nhưng Quý vị có thể tận dụng thời gian này để làm quen với extranet của chúng tôi và chuẩn bị tiếp đón những vị khách đầu tiên của mình."
            />
          </div>
          </div>
        <div className="text-sm">
          Quý vị vẫn còn thắc mắc? Tìm giải đáp cho tất cả câu hỏi của Quý vị trên trang <a href="#" className="text-blue-600 underline">Những câu hỏi thường gặp</a> của chúng tôi
        </div>
      </div>

    </div>
  )
}
