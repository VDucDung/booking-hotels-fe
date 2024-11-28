import React, { useEffect } from 'react';
import { Card, Typography, Button } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { getRoom } from '@/api/roomService';
import { Room } from '@/interfaces/typeRoom';

const { Title, Text } = Typography;

const HotelBookingPriceBreakdown: React.FC<{ roomId: string }> = ({ roomId }) => {
  const {
    refetch: refetchRoom,
    data: room,
    isLoading,
    isError,
  } = useQuery<Room>({
    queryKey: ["rooms", roomId],
    queryFn: () => getRoom(roomId),
    enabled: false, 
  });

  useEffect(() => {
    refetchRoom(); 
  }, [refetchRoom, roomId]);

  if (isLoading) {
    return <div className="container mx-auto">Loading...</div>;
  }

  if (isError || !room) {
    return <div className="container mx-auto">No room information.</div>;
  }

  return (
    <Card
      title={<Title level={4} className="text-lg">Price details</Title>}
      className="w-full"
    >
      <Text className="text-green-500 block mb-4">
        Taxes and fees are recovery charges which Traveloka pays to the property. If you have any questions regarding tax and invoice, please refer to Traveloka Terms and Condition
      </Text>

      <div className="grid grid-cols-1 gap-2 mt-4">
        <div className='flex justify-between'>
          <Text className="font-medium text-gray-700">Room Price</Text>
          <Text className="font-medium text-lg text-gray-900">{(Number(room.price) - (Number(room.price) * 10 / 100)).toLocaleString()} VND</Text>
        </div>
        <div className='flex justify-between'>
          <Text className="font-medium text-gray-700">Taxes and fees</Text>
          <Text className="font-medium text-lg text-gray-900">{(Number(room.price) * 13 / 100).toLocaleString()} VND</Text>
        </div>
      </div>
      <div className="border-b pb-4 mb-6"></div>
      <div className='flex justify-between mt-4'>
        <Title level={4} className="text-gray-900 font-bold">Total price</Title>
        <Text className="font-bold text-2xl text-gray-900">{((Number(room.price) - (Number(room.price) * 13 / 100)) + (Number(room.price) * 10 / 100)).toLocaleString()} VND</Text>
      </div>

      <div className="mt-4">
        <Text className="text-blue-500 text-center block">{`You won't be charged yet!`}</Text>
        <Button
          type="primary"
          danger
          className="w-full mt-3 font-bold bg-orange-500 hover:bg-orange-600"
        >
          Continue to Payment
        </Button>
      </div>
    </Card>
  );
};

export default HotelBookingPriceBreakdown;
