const AccountVerification = () => {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="container mx-auto">
      <div className="max-w-2xl pt-[165px]">
        <h1 className="text-2xl font-semibold mb-8">Xác minh tài khoản</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <p className="text-gray-600">
            Chúng tôi đã gửi email có đường dẫn xác minh đến{' '}
            <span className="font-medium text-gray-900">vudhalinh@gmail.com</span>.
          </p>
          
          <p className="text-gray-600">
            Để xác minh tài khoản vui lòng nhấn đường dẫn trong email chúng tôi vừa gửi.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AccountVerification;
