"use client";
import React, { useState } from 'react';
import { Card, Rate, Typography, Button } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { HotelCardProps } from '@/interfaces';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const { Title, Text } = Typography;

const HotelCard: React.FC<HotelCardProps> = ({id, hotelName, address, reviews, avgRating, images, className }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const router = useRouter();

  const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); 
    setIsLiked((prevLiked) => !prevLiked);
  };

  const handleDirection = () => {
    router.push(`/hotel/${id}`); 
  };

  return (
    <Card
      className={className}
      onClick={handleDirection}
      hoverable
      cover={
        <div style={{ position: 'relative' }}>
          <Image
            alt={hotelName}
            src={images as string}
            width={300}
            height={200}
            className='rounded-lg hover:rounded-lg'
          />
          <Button
            type="text"
            onClick={handleLike}
            icon={isLiked ? <HeartFilled style={{ color: 'red' }} /> : <HeartOutlined />}
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              backgroundColor: 'white',
              borderRadius: '50%',
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </div>
      }
      style={{ width: 300}}
    >
      <Title level={5}>{hotelName}</Title>
      <Text>{address }</Text>
      <div style={{ marginTop: 8 }}>
        <Rate disabled defaultValue={avgRating} />
        <Text> Tuyệt vời · {reviews?.length || 0} đánh giá</Text>
      </div>
    </Card>
  );
}

export default HotelCard;
