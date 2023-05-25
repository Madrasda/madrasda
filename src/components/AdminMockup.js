import Image from "next/image";
import {uuidv4} from "@firebase/util";
import { Button, CircularProgress } from "@mui/material";
import { Download } from "@mui/icons-material";
import { saveAs } from "file-saver";
import Backdrop from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AdminMockup(props) {
  const [spinner, setSpinnerState] = useState(false);
  const [display, setDisplay] = useState(null);
  const [cur, setCur] = useState(0);

  const downloadImage = () => {
    setSpinnerState(true);
    fetch(props.image)
      .then((result) => result.blob())
      .then((blob) => {
        window.saveAs(blob, `my-template-${props.id}.png`);
        setSpinnerState(false);
      });
  };

  useEffect(() => {
    setCur(props.image[0].colorId);
    setDisplay(props.image[0].image);
  }, []);

  useEffect(() => {
    const dispImage = props.image.find((item) => item.colorId === cur);
      setDisplay(dispImage? dispImage.image: '/logo.png');
    }, [cur, props.image]);

  return (
    <>
      <div className='relative h-full'>
        <Link
          href={`/admin/editmockup/${props.id}`}
          className='block relative w-full rounded overflow-hidden'>
          <Image
            src={display || "/logo.png"}
            alt='ecommerce'
            height={1080}
            width={1920}
            priority={true}
            loading={"eager"}
            className='object-cover object-center w-96 h-full'
          />
        </Link>
        <div className='mt-4'>
          <h3 className='text-base title-font'>{props.name}</h3>
          <div className='flex'>
            <h2 className='title-font text-sm text-bg'>Model:</h2>
            <p className='pl-1 text-bg text-sm'>{props.model}</p>
          </div>

          <h3 className='text-sm title-font'>Base Price: {props.basePrice}</h3>
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
                  style={{ backgroundColor: color.hexValue }}
                  onClick={() => setCur(color.id)}></span>
              );
            })}
          </div>
        </div>

        {!spinner && props.download && (
          <Button
            variant='outlined'
            className={
              "text-primary w-full bottom-0 p-2 absolute border-primary hover:border-logo hover:text-logo text-xs mx-auto"
            }
            onClick={downloadImage}>
            <Download /> Image
          </Button>
        )}
        {spinner && props.download && (
          <CircularProgress size='30px' color='warning' />
        )}
      </div>
    </>
  );
}
