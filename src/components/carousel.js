import { Paper, Button } from "@mui/material";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

export default function CarouselComponent() {
  const slides = [
    {
      url: "https://cdn.discordapp.com/attachments/1096314743742009376/1106152542242603058/cqq.png",
    },
    {
      url: "https://cdn.discordapp.com/attachments/1096314743742009376/1106164997278679100/d26b4fd9-d4b2-41b7-b07c-bdf2efa7b71a.png",
    },
    {
      url: "https://cdn.discordapp.com/attachments/1096314743742009376/1106164997278679100/d26b4fd9-d4b2-41b7-b07c-bdf2efa7b71a.png",
    },
    {
      url: "https://cdn.discordapp.com/attachments/1096314743742009376/1106164997278679100/d26b4fd9-d4b2-41b7-b07c-bdf2efa7b71a.png",
    },
    {
      url: "https://cdn.discordapp.com/attachments/1096314743742009376/1106164997278679100/d26b4fd9-d4b2-41b7-b07c-bdf2efa7b71a.png",
    },
  ];

  return (
    <div className='h-full w-full object-contain'>
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
    <div className='w-full h-full xl:h-[80vh] mx-auto mt-16'>
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
