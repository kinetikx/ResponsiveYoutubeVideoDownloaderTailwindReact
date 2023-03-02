import React from "react";

const Progressbar = (props) => {
  return (
    <>
    <div className=" text-center  bg-cyan-100   h-1.5  rounded-3xl">
        <span style={{width:props.width}} className={` ${props.loading? "animate-pulse":"animate-none"}   block h-full rounded-l-3xl  bg-cyan-500 `} ></span>
    </div>
    </>
  );
};

export default Progressbar;
