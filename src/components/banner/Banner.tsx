'use client';
import { useClientTranslation } from '@/i18n/client';
import React, { useState } from 'react';
import { DatePicker, Input, Space, InputNumber, Popover, Button } from 'antd';
import { ArrowDownIcon, LocationIcon, PersonalInfoIcon, SearchIcon } from '@/assets/icons';

const Banner = () => {
  const { t } = useClientTranslation('Common');
  const { RangePicker } = DatePicker;

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const content = (
    <div className='w-[200px] space-y-4'>
      <div>
        <div>{t('header.na07')}</div>
        <InputNumber min={1} max={10} value={adults} onChange={(value) => setAdults(value ?? 0)} className='w-full'/>
      </div>
      <div>
        <div>{t('header.na08')}</div>
        <InputNumber min={1} max={10} value={children} onChange={(value) => setChildren(value ?? 0)} className='w-full'/>
      </div>
      <div>
        <div>{t('header.na09')}</div>
        <InputNumber min={1} max={10} value={rooms} onChange={(value) => setRooms(value ?? 0)} className='w-full'/>

      </div>
      <Button type="primary" onClick={() => console.log('Confirmed')} className='w-full'>Confirm</Button>
    </div>
  );

  return (
    <section className='bg-[#00ba51] pt-[8px] relative '>
      <div className='container mx-auto'>
        <div className='text-white py-10 mx-[40px]'>
          <h3 className='text-6xl font-bold'>{t('header.na04')}</h3>
          <h5 className='text-2xl font-medium'>{t('header.na05')}</h5>
        </div>
        <div className='mx-[40px] flex justify-center border-gray-300 bg-gray-300 border-[3px] rounded relative top-[25px] z-50 w-full'>
          <div className='w-[35%] '>
            <Input placeholder={t('header.na06')} className='w-[100%] h-[50px] px-2 hover:border-none' prefix={<LocationIcon className={'w-6 h-6 '}/>}/>
          </div>
          <div className='w-[30%]'><RangePicker className='w-[100%] h-[50px] hover:border-none'/></div>
          <div className='text-gray-500 hover:text-gray-500 w-[25%]'>
            <Popover
              content={content}
              trigger="click"
              placement="bottom"
            >
              <Button className='w-[100%] h-[50px] hover:text-gray-500 justify-start'>
                <Space className='hover:text-gray-300 text-gray-500 '>
                  <PersonalInfoIcon className='w-6 h-6' />
                  {`${adults} ${t('header.na07')} - ${children} ${t('header.na08')} - ${rooms} ${t('header.na09')}`}
                  <ArrowDownIcon className='w-6 h-6' />
                </Space>
              </Button>
            </Popover>
          </div>
          <div className='w-[10%]'>
          <Button className="h-[50px]  px-[22%] hover:border-none text-[16px] font-bold" type="primary" icon={<SearchIcon className={'w-6 h-6 '}/>}>
            Search
          </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
