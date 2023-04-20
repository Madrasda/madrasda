import React from "react";



const ColorOption = ({ hex, id, color, setColor, currentColor, setImage }) =>{
    function onClickHandler() {
        setColor(currentColor);
    }

    return (
        <div onClick={onClickHandler}
            className={`flex flex-col justify-center items-center px-2 }]`}>
            <button style={{backgroundColor: hex}}
                className={`border-2 border-gray rounded-full w-6 h-6 focus:outline-none`}></button>
            <p className='text-sm'>{color}</p>
        </div>
    )
}
export default ColorOption;
