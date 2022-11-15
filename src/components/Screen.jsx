import React from "react";

const Screen = (props) => {
  return (
    <div className="w-[560px] h-[100px] bg-gray-500 border-[1px] border-gray-600 flex flex-col justify-center items-end pr-6">
      <div className="text-[80px] text-white">{props.handleResult}</div>
    </div>
  );
}

export default Screen;