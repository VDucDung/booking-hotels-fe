import React, { useEffect, useRef } from 'react'
import Slider, { Settings } from 'react-slick'
import clsx from 'clsx'
import Image from 'next/image'
import { CategoryProps, Category as CategoryType } from '@/interfaces/category'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { getCategories } from '@/api/categoryService'
import Loading from '../loading'
import Link from 'next/link'

const Category: React.FC<CategoryProps> = ({ className }) => {
  const dispatch = useAppDispatch()
  const { categories, loading, error } = useAppSelector((state) => state.categories)
  const slider = useRef<Slider | null>(null)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  const settings: Settings = {
    infinite: true,
    dots: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  if (loading) {
    return <Loading className="mt-5 mx-auto" />
  }

  if (error) {
    return (
      <div className="text-red-500 text-center mt-5">
        {error}
      </div>
    );
  }
  return (
    <section className={clsx('container sm:mt-10 mt-5', className)}>
      <div className="relative">
        <Slider ref={slider} {...settings}>
          {categories.map((item: CategoryType) => (
            <Link href={`/search`} key={item.id}>
              <div className="w-full cursor-pointer">
                <Image
                  className="border rounded-lg w-[200px] h-[130px]"
                  src={item?.image}
                  width={200}
                  height={130}
                  alt={item.name}
                  objectFit="cover"
                />
                <h1 className="font-bold mt-3">{item.name}</h1>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Category