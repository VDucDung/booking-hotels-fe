// import React, { useState } from 'react';
// import { AlertCircle, CreditCard } from 'lucide-react';

// const PaymentPage = () => {
//   const [balance, setBalance] = useState(1000000); // Số dư ban đầu
//   const [amount, setAmount] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess(false);

//     // Kiểm tra số tiền hợp lệ
//     const paymentAmount = parseFloat(amount);
//     if (isNaN(paymentAmount) || paymentAmount <= 0) {
//       setError('Vui lòng nhập số tiền hợp lệ');
//       return;
//     }

//     // Cập nhật số dư
//     setBalance(prevBalance => prevBalance + paymentAmount);
//     setSuccess(true);
//     setAmount('');
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <div className="max-w-md mx-auto space-y-4">
//         {/* Hiển thị số dư */}
//         <Card className="bg-white">
//           <CardHeader>
//             <CardTitle className="text-lg font-medium">Số dư hiện tại</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-3xl font-bold text-green-600">
//               {balance.toLocaleString('vi-VN')} VNĐ
//             </p>
//           </CardContent>
//         </Card>

//         {/* Form nạp tiền */}
//         <Card className="bg-white">
//           <CardHeader>
//             <CardTitle className="text-lg font-medium flex items-center gap-2">
//               <CreditCard className="w-5 h-5" />
//               Nạp tiền vào tài khoản
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Số tiền cần nạp
//                 </label>
//                 <input
//                   type="number"
//                   value={amount}
//                   onChange={(e) => setAmount(e.target.value)}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
//                   placeholder="Nhập số tiền..."
//                   min="0"
//                 />
//               </div>

//               {error && (
//                 <div className="flex items-center gap-2 text-red-600">
//                   <AlertCircle className="w-5 h-5" />
//                   <p className="text-sm">{error}</p>
//                 </div>
//               )}

//               {success && (
//                 <div className="bg-green-100 text-green-700 p-3 rounded-md">
//                   Nạp tiền thành công!
//                 </div>
//               )}

//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
//               >
//                 Xác nhận nạp tiền
//               </button>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;
