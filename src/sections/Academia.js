import { useState } from "react";
import SectionHeader from "../components/header";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";

const AcademiaSection = () => {
  return (
    <div className="lg:px-10 w-full">
      <AcademiaHeader text={"Writing samples"} />
      <div className="w-full text-sm font-inter mb-3 text-justify">
        Here you'll find some of the papers I wrote in an academic context.
        Though I do not have any published articles at the moment, I used my
        writing skills many times over the course of my studies. My most recent
        of course being my masters' thesis, or final dissertation.
      </div>

      <div className="w-full text-sm font-inter mb-20 text-justify">
        Some of the other papers included in this section comprise{" "}
        <b>
          Research internships and project reports, assignments and practicals
          for classes in both France and Australia.
        </b>
        Unfortunately, some of the papers, specifically both of my research
        internship reports on{" "}
        <b>
          "Active control of the first vibrational modes of a cello" and
          "Impedance-based acoustic diode effect"{" "}
        </b>
        are in French. I've included translated abstracts for your convenience
        but have yet to translate the 120 pages. I hope to get to that soon.
        I've elected to include them in chronological order as it is also order
        of relevance to my research interests.
      </div>
      <div className="flex justify-center items-center align-middle content-center">
        <div className=" flex flex-col content-center items-center justify-between w-6 h-[2500px]">
          <div className="w-3 aspect-square bg-blue-200 rounded-full flex justify-center">
            <ThesisSection />
          </div>
          <div className="w-px bg-gray-200 my-3 grow"></div>
          <div className="w-3 aspect-square bg-blue-200 rounded-full"></div>
          <div className="w-px bg-gray-200 my-3 grow"></div>
          <div className="w-3 aspect-square bg-blue-200 rounded-full"></div>
          <div className="w-px bg-gray-200 my-3 grow"></div>
          <div className="w-3 aspect-square bg-blue-200 rounded-full"></div>
          <div className="w-px bg-gray-200 my-3 grow"></div>
          <div className="w-3 aspect-square bg-blue-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

const AcademiaHeader = ({ text }) => {
  return (
    <div className="lg:mb-16 mb-10">
      <SectionHeader text={text} />
    </div>
  );
};

function ThesisSection() {
  // const [lang, setlang] = useState("english");

  return (
    <div className="absolute lg:w-2/3 md:w-[calc(100%-10rem)] w-[calc(100%-3rem)] h-56 flex flex-row justify-evenly lg:gap-16 gap-8 -mt-2">
      <div className="lg:w-1/2 w-full h-full flex flex-col justify-start content-end items-end">
        <div className="flex flex-col content-start gap-3 w-full h-full">
          
          <div className="text-lg font-inter font-bold text-gray-800 text-right mb-3">
            {" "}
            Masters' thesis : Automatic Music Tagging at Scale towards better
            Musical recommendations
          </div>
          <div className="flex flex-row gap-3 text-[10px] font-inter text-blue-700 justify-end mb-5">
            <Academiatag text={"Music Information Retrieval"} />
            <Academiatag text={"Music Tagging"} />
            <Academiatag text={"Machine Learning"} />
            <Academiatag text={"Music technology"} />
          </div>
          <div className="flex flex-row gap-5 items-center justify-end">
            <div className=" text-base font-inter text-right text-gray-500 mb-">
              full text
            </div>
            <div className=" h-px w-12 bg-gray-400" />

            <div className=" rounded-2xl px-3 py-2 bg-gray-100 flex flex-row gap-3 active:bg-white active:scale-95 active:text-gray-600 select-none text-red-500 hover:text-red-600 transition-all duration-[30ms] items-center shadow-sm shadow-gray-300 group hover:bg-gray-0 cursor-pointer">
              <BsFillFileEarmarkPdfFill size={18} />
              <div className="font-inter text-gray-500 text-xs group-hover:text-gray-600 group-active:text-red-500">
                Download
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-6 items-end gap-3">
            <div className="text-base font-inter text-blue-500 font-bold text-right mb-3">
              Table of contents
            </div>
            <Tocitem num={"1."} text={"State of the art - audio preprocessing"}/>
            <Tocitem num={"2."} text={"State of the art - Music Tagging Models"}/>
            <Tocitem num={"3."} text={"Implementation"}/>
            <Tocitem num={"4."} text={"Pipeline design & Model selection"}/>
            <Tocitem num={"5."} text={"Results"}/>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full h-full flex flex-col justify-start content-end items-start">
        <div className="flex flex-row justify-between items-center gap-3 w-full mb-5">
          <div className="h-px grow bg-gray-500"></div>
          <div className="font-inter font-bold text-lg text-gray-600">
            Abstract
          </div>
          <div className="h-px grow bg-gray-500"></div>
        </div>
        <div className="font-inter text-[10.5px] text-justify flex flex-col gap-3 text-gray-600">
          <p>
            Recommendation systems have a notable and growing importance in the
            music industry. Be it music streaming platforms, music creation
            tools or music-related social network recommendations, recommender
            systems are part of our everyday music life. Groover specifically is
            a tech company aiming to create opportunities for independent music
            artists by allowing them to send tracks to industry professionnals
            to expand their network, receive feedback, or be promoted by said
            curator. This puts Groover in a specific spot in the recommender
            system space : recommending professionals, who are both users and
            products, to users.
          </p>
          <p>
            As a motivation to improve their current recommendation system, the
            R&D team at Groover wants to include audio features within the
            pipeline to 1. Denoise artist-chosen characteristics by basing
            artist tags on deterministic representation extraction models and 2.
            Providing a new feature of recommending relevant tags to artists
            based on their sample tracks. It is in this context that this
            master’s internship takes place. The goal is to research state of
            the art of music audio preprocessing techniques and automatic music
            tagging models for later implementation at scale into the
            recommendation system. Music tagging is the task of teaching
            learnable models to label music tracks with relevant labels, such as
            acoustic characteristics, genres, subgenres, instruments, etc.
          </p>
          <p>
            A comprehensive study of the state of the art is conducted,
            researching common audio preprocessing techniques in the context of
            machine learning applied to audio, audio tagging models and their
            performance on canonical datasets, and the available datasets to
            construct our own tagging task based in the state of the art.
          </p>
          <p>
            three datasets are exhibited that can be of use to this specific
            tagging task. After model selection based on multiple considerations
            3-4 models are selected to be benchmarked on a custom dataset. Four
            tagging types are isolated to be benchmarked upon : Genres,
            Subgenres, Mood/theme/instruments and All tags combined. A custom
            dataset and split is built for all four of these tagging types. .
            Trained models show competitive results with state of the art on
            appropriate metrics with room for improvement based on the novel
            task of music tagging proposed in this thesis. The interest of
            models as frozen representation learners and standalone learnable
            preprocessing blocks is argued. . Finally, the issue of multi
            instance classification is tackled and it is shown using song-level
            aggregation on the selected datasets that mean pooling results in
            better performance overall on song-level evaluation.
          </p>
        </div>
      </div>
    </div>
  );
}

const Academiatag = ({ text }) => {
  return (
    <div className="rounded-full px-2 py-1.5 bg-gray-100 shadow-sm shadow-gray-300 items-center justify-center">
      {text}
    </div>
  );
};

const Tocitem = ({num,text,href}) => {
  return (
    <div className="flex flex-col w-3/4 justify-evenly">
      <div className="flex flex-row w-full items-center">
        <div className="font-mono font-bold text-base text-blue-600 mr-3">
          {num}
        </div>
        <div className="font-mono text-xs text-gray-600">
          {text}
        </div>
        <div className="h-px bg-gray-200 grow mx-5"></div>
        <div className=" rounded-full p-2 flex flex-row gap-3 active:bg-white active:scale-95 active:text-gray-600 select-none text-red-500 hover:text-red-600 transition-all duration-[30ms] items-center shadow-sm shadow-gray-300 group hover:bg-gray-0 cursor-pointer">
          <BsFillFileEarmarkPdfFill size={14} />
        </div>
      </div>
    </div>
  );
};

export { AcademiaSection };
