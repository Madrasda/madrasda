import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const ProductTile = ({ id, name, category, total, discount, imageUrl }) => {
  const [imageLoading, setLoading] = useState(true);
  const router = useRouter();
  function viewProduct(id) {
    router.push("/productDetails/" + id);
  }

  return (
    <div
      onClick={() => viewProduct(id)}
      className='col-span-1 p-3 w-[170px] md:w-[300px] md:h-[450px] cursor-pointer bg-off-white mx-2 md:mx-5 my-3 rounded-md
       hover:shadow-shadowGrey hover:shadow-lg transition-shadow'>
      <a className='block relative h-[200px] md:h-fit rounded overflow-hidden'>
        <Image
          src={imageUrl}
          alt='ecommerce'
          height={600}
          width={900}
          className={`object-contain object-center w-fit h-[200px] md:h-[300px] mx-auto ${
            imageLoading ? "hidden" : "block"
          }`}
          priority={true}
          onLoadCapture={() => setLoading(false)}
        />
        {imageLoading && (
          <Image
            src='/product-loading.gif'
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            width={50}
            height={50}
          />
        )}
      </a>
      <div className='mt-4'>
        <div className='flex flex-row items-center w-full'>
          <div className='flex justify-start'>
            <h3 className='text-xs tracking-widest title-font mb-1 text-shadowGrey'>
              {category}
            </h3>
          </div>
        </div>
        <h2 className='title-font text-lg md:text-xl font-medium'>{name}</h2>
        <span className='mt-1 text-black pr-1'>
          ₹{Math.ceil((total * (100 - discount)) / 100)} {/* math.round to math.ceil */}
        </span>
        <span className='mt-1 line-through text-shadowGrey pr-1'>
          ₹{Math.round(total)}
        </span>
        <span className='title-font text-xs font-medium text-[#088240]'>
          {discount}% OFF
        </span>
      </div>
    </div>
  );
};
export default ProductTile;
