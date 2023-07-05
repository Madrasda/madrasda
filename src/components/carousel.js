// import { Paper, Button } from "@mui/material";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

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
    <div className='h-full w-full hidden lg:block'>
      <Carousel>
        {desktopSlides.map((slide, index) => (
          <DesktopCarousel key={index} item={slide.url} />
        ))}
      </Carousel>
    </div>

    <div className='h-full w-full lg:hidden'>
     <Carousel>
       {mobileSlides.map((slide, index) => (
         <MobileCarousel key={index} item={slide.url} />
       ))}
     </Carousel>
   </div>
   </>
  );
}

function DesktopCarousel(props) {
  return (
    <div className='bg-bg h-[80vh] w-full flex justify-center items-center mt-20 pb-10'>
      <Image
        src={props.item}
        alt='carousel'
        height={1080}
        width={1920}
        className='object-contain object-center w-full h-full'
      />
    </div>
  );
}

function MobileCarousel(props) {
  return (
    <div className='bg-bg h-[37vh] md:h-[64vh] w-full flex justify-center items-center mt-12'>
      <Image
        src={props.item}
        alt='carousel'
        height={1080}
        width={1920}
        className='object-contain object-center w-full h-full'
      />
    </div>
  );
}
