import React from "react";

const Button = (props) => {
  const handleButtonClick = () => {
    props.handleClick(props.name);
  }

  let className =
    "text-[40px] h-[100px] border-[1px] border-gray-600 font" +
    (props.orange ? " bg-amber-500 text-white" : " bg-gray-200") +
    (props.long ? " w-[280px]" : " w-[140px]");

  return (
    <div className={"button-div"}>
      <button type="button" className={className} onClick={handleButtonClick}>{props.name}</button>
    </div>
  );
}

export default Button;