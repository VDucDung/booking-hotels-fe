"use client";
import React, { useState } from 'react';
import { Card, Rate, Typography, Button, Image } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { HotelCardProps } from '@/interfaces';

const { Title, Text } = Typography;

const HotelCard: React.FC<HotelCardProps> = ({ hotelName, address, reviews, images }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLike = () => {
    setIsLiked((prevLiked) => !prevLiked);
  };
  return (
  <Card
    hoverable
    cover={
      <div style={{ position: 'relative' }}>
        <Image
          alt={hotelName}
          src={images}
          width={300}
          height={200}
          style={{ borderRadius: '8px' }}
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
      <Rate disabled defaultValue={reviews?.rating || 5} />
      <Text> Tuyệt vời · {reviews?.length || 0} đánh giá</Text>
    </div>
  </Card>
);
}
export default HotelCard;
