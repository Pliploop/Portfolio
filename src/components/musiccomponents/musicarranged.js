
import ReactPlayer from "react-player";

const MusicArranged = () => {
    return (
      <div className="h-auto w-full flex lg:flex-row flex-col lg:justify-between gap-10">
        <div className="lg:w-1/3 h-full rounded-2xl flex flex-col border-[1px] hover:border-pink-600 hover:scale-[102%] border-pink-400 p-5 transition-all duration-75 border-b-4">
          <h2 className="text-lg font-inter font-bold text-pink-400 mb-3">
            Santiana - solo choir arrangement
          </h2>
          <div className="h-px bg-gradient-to-r from-pink-400 to-transparent w-full mb-5"></div>
          <div className="rounded-2xl overflow-clip shadow-md w-full aspect-video">
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              url="https://www.youtube.com/watch?v=wOYzFccbHPg"
            />
          </div>
        </div>
        <div className="lg:w-1/3 h-full rounded-2xl flex flex-col border-[1px] hover:border-slate-600 hover:scale-[102%] border-slate-400 p-5 transition-all duration-75 border-b-4">
          <h2 className="text-lg font-inter font-bold text-slate-600 mb-3">
            Misty mountains - solo choir
          </h2>
          <div className="h-px bg-gradient-to-r from-slate-600 to-transparent w-full mb-5"></div>
          <div className="rounded-2xl overflow-clip shadow-md w-full aspect-video">
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              url="https://soundcloud.com/jujgui/misty-moutains?si=7f2aff6b73ba4b6a87195593ef93508e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            />
          </div>
        </div>
        <div className="lg:w-1/3 h-full rounded-2xl flex flex-col border-[1px] hover:border-red-600 hover:scale-[102%] border-red-400 p-5 transition-all duration-75 border-b-4">
          <h2 className="text-lg font-inter font-bold text-red-500 mb-3">
            Let it snow - SATB arrangement
          </h2>
          <div className="h-px bg-gradient-to-r from-red-500 to-transparent w-full mb-5"></div>
          <div className="rounded-2xl overflow-clip shadow-md w-full aspect-video shadow-gray-400">
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              url="https://www.youtube.com/watch?v=rV-yjLLGi6U"
            />
          </div>
        </div>
      </div>
    );
  };

  export {MusicArranged}