import { Paper, Button } from "@mui/material";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

export default function CarouselComponent() {
  const slides = [
    {
      url: "https://cdn.discordapp.com/attachments/981618787491127306/1078748875063570532/c1.png",
    },
    {
      url: "https://cdn.discordapp.com/attachments/750752324712136828/1078909357984591872/pexels-photo-1884581.png",
    },
    {
      url: "https://cdn.discordapp.com/attachments/750752324712136828/1078910045556842496/pexels-photo-996329.png",
    },
    {
      url: "https://cdn.discordapp.com/attachments/750752324712136828/1078910290470637638/pexels-photo-3755706.png",
    },
    {
      url: "https://cdn.discordapp.com/attachments/750752324712136828/1078910557727502346/pexels-photo-3839432.png",
    },
  ];

  return (
    <div className='h-fit w-full'>
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
    <div className='w-full h-fit md:h-[80vh] mx-auto'>
      <Image
        src={props.item}
        alt='carousel'
        height={900}
        width={900}
        className='object-contain object-center w-full h-fit'
      />
    </div>
  );
}
