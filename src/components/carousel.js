import { Paper, Button } from "@mui/material";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

export default function CarouselComponent() {
  const slides = [
    {
      url: "https://firebasestorage.googleapis.com/v0/b/madrasda.appspot.com/o/carousel%2FMadras%20da%20banner-(2).jpg?alt=media&token=c172ee02-5dd4-4695-8a2a-47473af68b40",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/madrasda.appspot.com/o/carousel%2FMadras%20da%20banner-(1).jpg?alt=media&token=83ff6f9a-a98b-4d46-a68c-28e02f8ef363",
    },
  ];

  return (
    <div className='h-full w-full'>
      <Carousel>
        {slides.map((slide, index) => (
          <Item key={index} item={slide.url} />
        ))}
      </Carousel>
    </div>
  );
}

function Item(props) {
  return (
    <div className='bg-bg h-[30vh] lg:h-[80vh] w-full flex justify-center items-center mt-12 md:mt-[70px] lg:mt-20 lg:pb-10'>
      <Image
        src={props.item}
        alt='carousel'
        height={1080}
        width={1920}
        className='object-contain object-center w-full h-full md:w-fit'
      />
    </div>
  );
}
