const scrollto = (id) => {
  console.log("scrolling to " + id);
  let element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
};

const SidebarIcon = ({ icon, aimid, scrollid, visible, title, description }) => {
  

  var diff = visible !== scrollid;
  console.log(visible)

  return (
    <div className="flex flex-row align-middle content-center lg:justify-left group">
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
    <span className={`font-mono lg:flex hidden text-sm ml-6 mb-1 ${!diff ? 'sidebar-title-active' : ''}`}>{title}</span>
    <span className={`absolute  text-xs group-hover:pt-10 ml-6 transition-all duration-300 lg:flex hidden group-active:text-gray-500 cursor-default ${!diff ? 'sidebar-description-active' : 'sidebar-description-inactive'}`}>{description}</span>
    
    </div>
    
    </div>
  );
};

const SidebarIconsm = ({ icon, aimid, scrollid, visible}) => {
  

  var diff = visible.visible !== scrollid;
  console.log(visible.visible, diff, scrollid)

  return (
    <div className="flex flex-row align-middle content-center lg:justify-left group">
      <div
        className={`${diff ? 'sidebar-icon-container-active' : 'sidebar-icon-container-inactive'} group`}
        onClick={() => {
          scrollto(aimid);
        }}
        id={`icon${aimid}-sm`}
      >
        <div
          className={`h-11 w-11 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 group-active:bg-transparent`}
        >
          <div className= {"sidebar-icon group-active:text-white group-hover:text-blue-400"}>{icon}</div>
        </div>
      </div>
    
    <div className="flex flex-col justify-start content-start h-auto grow">
    
    </div>
    
    </div>
  );
};

export { SidebarIcon, SidebarIconsm };
