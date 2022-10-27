import { useState } from "react";

const SidebarIcon = ({ icon, aimid, scrollid, visible, title, description }) => {
  const scrollto = (id) => {
    console.log("scrolling to " + id);
    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  var diff = visible !== scrollid;


  return (
    <div className="flex flex-row align-middle content-center justify-left group">
      <div
        className={`${diff ? 'sidebar-icon-container-active' : 'sidebar-icon-container-inactive'} group`}
        onClick={() => {
          scrollto(aimid);
        }}
        id={`icon${aimid}`}
      >
        <div
          className={`h-11 w-11 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 group-active:bg-transparent`}
        >
          <div className= {"sidebar-icon group-active:text-white group-hover:text-blue-400"}>{icon}</div>
        </div>
      </div>
    
    <div className="flex flex-col justify-start content-start h-auto grow">
    <span className={`font-mono text-sm ml-6 mb-1 ${!diff ? 'sidebar-title-active' : ''}`}>{title}</span>
    <span className={`absolute text-xs group-hover:pt-10 ml-6 transition-all duration-300  group-active:text-gray-500 cursor-default ${!diff ? 'sidebar-description-active' : 'sidebar-description-inactive'}`}>{description}</span>
    {/* <div className="h-[2px] w-full bg-blue-400"></div> */}
    </div>
    
    </div>
  );
};

export { SidebarIcon };
