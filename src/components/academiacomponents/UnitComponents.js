import { BsFileEarmarkPdf } from "react-icons/bs";

const Academiatag = ({ text }) => {
  return (
    <div className="rounded-full px-2 py-1.5  shadow-sm shadow-gray-200 border-blue-500 border-[1px] items-center justify-center">
      {text}
    </div>
  );
};

const FillerBar = ({ height }) => {
  let cn = `w-px bg-gray-200 my-3 grow h-[${height}] transition-all duration-200`;
  return <div className={cn} />;
};

const Timelinedot = ({ section }) => {
  return (
    <div className="w-3 aspect-square bg-blue-200 rounded-full flex justify-center my-10">
      {section}
    </div>
  );
};

const Tocitem = ({ num, text, href }) => {
  return (
    <div className="flex flex-col w-3/4 justify-evenly">
      <div className="flex flex-row w-full items-center">
        <div className="font-mono font-bold text-base text-blue-600 mr-3">
          {num}
        </div>
        <div className="font-mono text-xs text-gray-600">{text}</div>
        <div className="h-px bg-gray-200 grow mx-5"></div>
        <div className=" rounded-full p-2 px-5 flex flex-row gap-3 active:bg-white active:scale-95 active:text-gray-600 select-none text-red-500 hover:text-red-600 transition-all duration-[30ms] items-center shadow-sm shadow-gray-300 group hover:bg-gray-0 cursor-pointer">
          <BsFileEarmarkPdf size={14} />
        </div>
      </div>
    </div>
  );
};

export { Academiatag, FillerBar, Timelinedot, Tocitem };
