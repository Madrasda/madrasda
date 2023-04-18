import Image from "next/image"
import CloseConfirm from "./close-confirm-modal";

export default function Mockup(props){
    return (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full h-full cursor-pointer bg-off-white m-5 rounded drop-shadow-[4px_4px_10px_rgba(0,0,0,0.2)] hover:drop-shadow-[8px_8px_4px_rgba(0,0,0,0.3)] duration-200 ease-in-out">
                <span className="w-full ml-5 flex justify-end">
                    <CloseConfirm />
                </span>
                <a className="block relative h-fit rounded overflow-hidden">
                    <Image src={props.image} 
                    alt="ecommerce" 
                    height={1080}
                    width={1920} 
                    className="object-contain object-center w-full h-full" />
                </a>
                <div className="mt-4">
                    <h3 className="text-base title-font">{props.name}</h3>
                    <div className="flex">
                        <h2 className="title-font text-sm text-gray">Model:</h2>
                        <p className="pl-1 text-gray text-sm">{props.model}</p>
                    </div>
                    <span className="flex flex-wrap mt-1 pr-1 text-sm">Available Sizes:</span>
                    {
                        props.sizes.map((size) => {
                            return (
                                <span className="mt-1 text-gray pr-1 text-sm">
                                    {size}
                                </span>
                            );
                        })
                    }
                    <span className="flex flex-wrap mt-1 overflow-auto text-sm">Available Colours:</span>
                    <div className="flex flex-wrap space-x-1">
                        {
                        props.colors.map((color) => {
                            return (
                                <span className={`border-black my-1 border-[1px] rounded-[100%] p-2`} style={{ backgroundColor: color }}></span>
                            );
                        })
                    }
                    </div>
                </div>
            </div>
    )
}