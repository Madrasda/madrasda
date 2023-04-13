import Link from "next/link";
import Image from "next/image";

function VendorListItem(props) {
    return (
        <div>
            <div className="block relative h-fit rounded overflow-hidden">
                <Image src={props.image} 
                alt="ecommerce" 
                height={300}
                width={300} 
                className="object-contain object-center w-full h-full" />
            </div>
            <h3 className="text-base font-bold title-font mt-4 text-center flex justify-center items-center">
                {props.vendorName}
            </h3>
        </div>
    );
}

export default VendorListItem;