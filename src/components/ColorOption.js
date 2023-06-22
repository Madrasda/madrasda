import React from "react";

const ColorOption = ({
  hex,
  id,
  color,
  setColor,
  currentColor,
  setImage,
  selected,
}) => {
  function onClickHandler() {
    setColor(currentColor);
  }

  return (
    <div
      onClick={onClickHandler}
      className={`flex flex-col justify-center items-center px-2 max-w-[80px]`}>
      <button
        style={{ backgroundColor: hex }}
        className={`border-[2px] ${
          selected ? `border-primary` : `border-gray`
        } rounded-full w-8 h-8 focus:outline-none`}></button>
      <p className='text-xs text-center'>{color}</p>
    </div>
  );
};
export default ColorOption;
