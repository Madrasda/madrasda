// import { Paper, Button } from "@mui/material";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"

export default function CarouselComponent() {
  const desktopSlides = [
    {
      url: "/banner 1 desktop.webp",
    },
    {
      url: "/banner 2 desktop.webp",
    },
    {
      url: "/banner 3 desktop.webp",
    },
  ];

  const mobileSlides = [
    {
      url: "/banner 1 mobile.webp",
    },
    {
      url: "/banner 2 mobile.webp",
    },
    {
      url: "/banner 3 mobile.webp",
    },
  ];

  return (
    <>
      <div className='h-full hidden lg:block'>
        {/* <Carousel>
        {desktopSlides.map((slide, index) => (
          <DesktopCarousel key={index} item={slide.url} />
        ))}
      </Carousel> */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView="auto"
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: true,
          }}
          className="mt-16"
        >
          {
            desktopSlides.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                <Image
                  src={slide.url}
                  alt='carousel'
                  height={1080}
                  width={1920}
                  className='object-contain object-center w-full h-full'
                />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>

      <div className='h-full w-full lg:hidden'>
      <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView="auto"
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: true,
          }}
          className="mt-24 mb-12"
        >
          {
            mobileSlides.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                <Image
                  src={slide.url}
                  alt='carousel'
                  height={1080}
                  width={1920}
                  className='object-contain object-center w-full h-full'
                />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </>
  );
}
