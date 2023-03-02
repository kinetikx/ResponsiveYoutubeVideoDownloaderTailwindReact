import React from "react";
import Example from "../../Assets/example.webp";
import Progressbar from "./Progressbar";
const Video = () => {
  return (
    <div className="p-1  ">
      <div className="flex">
        <div className="basis-1/3 ">
          <img src={Example} />
        </div>
        <div className="basis-2/3   text-left pb-1 px-1 pl-2 pt-0 flex-col">
          <p className="text-[10px] font-medium">
            Eşkıya Dünyaya Hükümdar Olmaz 98. Bölüm
          </p>
          <div className="my-3 ml-2 mr-5">
            <Progressbar width = "24%" />
          </div>
          <div className="flex mt-2 font-medium">
            <p className="text-[9px] text-gray-900 ml-2"> 212.30MB </p>{" "}
            <p className="text-[9px] text-gray-900 ml-2"> MP4</p>
            <p className="text-[9px] text-gray-900 ml-2"> 1080p</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Video;
