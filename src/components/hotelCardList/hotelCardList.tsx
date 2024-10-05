import React from 'react';
import { Row, Col } from 'antd';
import HotelCard from '../hotelCard/HotelCard';
import { HotelCardListProps } from '@/interfaces';

const HotelCardList: React.FC<HotelCardListProps> = ({ hotels }) => {
  return (
    <Row gutter={[16, 16]} className='container' style={{margin: '80px auto', padding:'0'}}>
      {hotels?.length ? (
        hotels.map((hotel) => (
          <Col key={hotel.id} xs={24} sm={12} md={8} lg={6} style={{margin: '0', padding:'0'}}>
            <HotelCard
              id={hotel.id}
              hotelName={hotel.hotelName}
              address={hotel.address}
              reviews={hotel?.reviews || null}
              images={hotel.images[0]}
            />
          </Col>
        ))
      ) : (
        <Col span={24}>
          <p>Không có khách sạn nào để hiển thị.</p>
        </Col>
      )}
    </Row>
  );
};

export default HotelCardList;
