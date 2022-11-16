import { IoMusicalNotesSharp } from "react-icons/io5";

import ReactPlayer from "react-player";

const MusicArranged = () => {
  return (
    <div className="h-auto w-full flex lg:flex-row flex-col lg:justify-between gap-10">
      <div className="lg:w-1/3 h-full rounded-3xl flex flex-col border-[1px] hover:border-pink-600 hover:scale-[102%] border-pink-400 p-5 transition-all duration-75 border-b-4">
        <h2 className="text-lg font-inter font-bold text-pink-400 mb-3">
          Santiana - solo choir arrangement
        </h2>
        <div className="h-px bg-gradient-to-r from-pink-400 to-transparent w-full mb-5"></div>
        <div className="rounded-2xl overflow-clip shadow-md w-full aspect-video mb-10">
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            url="https://www.youtube.com/watch?v=wOYzFccbHPg"
          />
        </div>
        <p className="text-sm font-inter text-gray-500 text-justify mb-6">
          During the second lockdown, sea shanties were all the rage. I wanted
          to perform a choir cover of santiano - a french sea shanty - with
          friends, but none of us could meet up and only I had a microphone.
          Most of them gave up rather quickly, but I figured - why not perform
          all the parts myself? And so I did. I arranged the track, recorded it,
          and mixed-mastered it in FL Studio. Though my register is naturally
          bass, I decided to give myself some rather high tenor lines to push
          myself on this one.
        </p>
      </div>
      <div className="lg:w-1/3 h-full rounded-3xl flex flex-col border-[1px] hover:border-slate-600 hover:scale-[102%] border-slate-400 p-5 transition-all duration-75 border-b-4">
        <h2 className="text-lg font-inter font-bold text-slate-600 mb-3">
          Misty mountains - solo choir
        </h2>
        <div className="h-px bg-gradient-to-r from-slate-600 to-transparent w-full mb-5"></div>
        <div className="rounded-2xl overflow-clip shadow-md w-full aspect-video mb-10">
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            url="https://soundcloud.com/jujgui/misty-moutains?si=7f2aff6b73ba4b6a87195593ef93508e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          />
        </div>
        <p className="text-sm font-inter text-gray-500 text-justify mb-6">
          I love singing low - I am a bass after all - and wanted to try myself
          at subharmonics and solo choir arrangements. So, I arranged this track
          from the hobbit - Misty mountains - into a solo bass/baritone choir
          for which I performed all the parts. I mixed it using ableton and
          remastered it a few months later. I specifically loved learning
          subharmonic singing for this one!
        </p>
      </div>
      <div className="lg:w-1/3 h-full rounded-3xl flex flex-col border-[1px] hover:border-red-600 hover:scale-[102%] border-red-400 p-5 transition-all duration-75 border-b-4">
        <h2 className="text-lg font-inter font-bold text-red-500 mb-3">
          Let it snow - SATB arrangement
        </h2>
        <div className="h-px bg-gradient-to-r from-red-500 to-transparent w-full mb-5"></div>
        <div className="rounded-2xl overflow-clip shadow-md w-full aspect-video shadow-gray-400 mb-10">
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            url="https://www.youtube.com/watch?v=rV-yjLLGi6U"
          />
        </div>
        <p className="text-sm font-inter text-gray-500 text-justify mb-6">
          As choir lead in my final year at Commuz' (see previous section), my
          colead and I decided it would be nice to film a christmas video to
          wish the rest of the team a merry christmas. So, we arranged an
          original cover of let it snow for SSATBB choir. I performed one of two
          bass harmonies - as well as a solo passage. I also mixed and mastered
          the audio, and created the youtube video from scratch. This project
          was a lot of fun, and you can find the sheet music below.
        </p>
        <div className="rounded-full border-red-500 text-red-600 border-[1px] border-b-2 shadow-md bg-white p-3 justify-center flex flex-row gap-5 items-center hover:scale-[101%] hover:shadow-lg transition-all duration-[40ms] cursor-pointer active:scale-[97%] active:text-gray-700 active:border-gray-600">
          <IoMusicalNotesSharp />
          <p className="text-sm ">Sheet Music</p>
        </div>
      </div>
    </div>
  );
};

export { MusicArranged };
