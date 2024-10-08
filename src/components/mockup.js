import Image from "next/image";
import {uuidv4} from "@firebase/util";
import InfoIcon from '@mui/icons-material/Info';
import { Button, CircularProgress } from "@mui/material";
import { Download } from "@mui/icons-material";
import { saveAs } from "file-saver";
import Backdrop from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function Mockup(props) {
  const [spinner, setSpinnerState] = useState(false);

  const downloadImage = () => {
    setSpinnerState(true);
    fetch(props.image)
      .then((result) => result.blob())
      .then((blob) => {
        window.saveAs(blob, `my-template-${props.id}.png`);
        setSpinnerState(false);
      });
  };
  return (
    <>
      <div className='relative h-full'>
      <div className="flex flex-row items-center">
      <InfoIcon/>
      <h1 className="text-sm font-medium"> Click on the Template to add product info and upload it for sale. </h1>
      </div>
        <Link href={`/vendor/uploadproduct/${props.id}`}>
          <a className='block relative h-fit rounded overflow-hidden'>
            <Image
              src={props.image}
              alt='ecommerce'
              height={1080}
              width={1920}
              className='object-contain object-center w-full h-full'
            />
          </a>
          <div className='mt-4'>
            <h3 className='text-base title-font'>{props.name}</h3>
            <div className='flex'>
              <h2 className='title-font text-sm text-bg'>Model:</h2>
              <p className='pl-1 text-bg text-sm'>{props.model}</p>
            </div>

            <h3 className='text-sm title-font'>
              Base Price: {props.basePrice}
            </h3>
            <span className='flex flex-wrap mt-1 pr-1 text-sm'>
              Available Sizes:
            </span>
            {props.sizes.map((size) => {
              return (
                <span key={uuidv4()} className='mt-1 text-bg pr-1 text-sm'>
                  {size}
                </span>
              );
            })}
            <span className='flex flex-wrap mt-1 overflow-auto text-sm'>
              Available Colours:
            </span>
            <div className='flex flex-wrap space-x-1'>
              {props.colors.map((color) => {
                return (
                  <span
                    key={uuidv4()}
                    className={`border-black my-1 border-[1px] rounded-[100%] p-2`}
                    style={{ backgroundColor: color }}></span>
                );
              })}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
