import { Timelinedot2, FillerBar, Academiatag, ShowMore } from "./UnitComponents";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { SiMicrosoftpowerpoint } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { useState } from "react";

function SpectrogramSection() {
  // const [lang, setlang] = useState("english");

  return (
    <div className="lg:w-full md:w-[calc(100%-10rem)] w-[calc(100%-3rem)] h-auto flex flex-row justify-evenly lg:gap-16 gap-8 -mt-2">
      <div className="lg:w-1/2 w-full h-full flex flex-col justify-start content-end items-end">
        <div className="flex flex-col content-start items-end gap-3 w-full h-full">
          <div className="text-lg font-inter font-bold text-gray-800 text-right mb-3">
            {" "}
            Artist classification through spectrogram learning
          </div>
          <div className="flex flex-row gap-3 text-[10px] font-inter text-blue-700 justify-end mb-5">
            <Academiatag text={"Music Information Retrieval"} />
            <Academiatag text={"Music Tagging"} />
            <Academiatag text={"Machine Learning"} />
            <Academiatag text={"Singing voice"} />
          </div>
          <div className="flex flex-row justify-between items-center gap-3 w-3/4 mb-3">
            <div className="h-px grow bg-gray-500"></div>
            <div className="font-inter text-base text-gray-600">Context</div>
            <div className="h-px grow bg-gray-500"></div>
          </div>

          <div className="font-inter text-[10.5px] text-justify flex flex-col gap-3 text-gray-800 w-3/4 mb-5">
            <p>
              At the university of adelaide, I took a project-based course
              titled <b className="text-blue-600">Applied machine learning</b>{" "}
              from july 2021 to february 2022. The goal was to identify a
              problem that could be solved with ML, research state of the art
              and devise and implement a solution, including data sourcing and
              processing. This was my first time combining machine learning and
              music into what I didn't know at the time is essentially MIR.
            </p>
            <p>
              In hindsight, the paper isn't innovative, and the method can
              clearly be improved. High overfitting, too large of a test set,
              questonably sourced data... My PC also broke down during training
              so I couldn't iterate on models. But this is the project that
              really made me want to pursue MIR.{" "}
              <b className="font-bold text-blue-600">
                This report and project earned me a 99/100
              </b>
            </p>
          </div>

          <div className="flex flex-row gap-5 items-center justify-end">
            <a
              href="/RecoNet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded-full px-3 py-2 bg-white flex flex-row gap-3 active:bg-red-500 active:scale-95 active:text-white select-none border-[1px] border-red-500 hover:border-red-400 text-red-500 hover:text-red-600 transition-all duration-[20ms] items-center shadow-sm shadow-gray-400 group hover:bg-gray-100 cursor-pointer"
            >
              <BsFileEarmarkPdf size={18} />
              <div className="font-inter text-red-500 text-xs group-hover:text-red-600 group-active:text-white">
                View pdf
              </div>
            </a>
            <a
              href="/Deck.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded-full px-3 py-2 bg-white flex flex-row gap-3 active:bg-orange-500 active:scale-95 active:text-white select-none border-[1px] border-orange-500 hover:border-orange-400 text-orange-500 hover:text-orange-600 transition-all duration-[20ms] items-center shadow-sm shadow-gray-400 group hover:bg-gray-100 cursor-pointer"
            >
              <SiMicrosoftpowerpoint size={18} />
              <div className="font-inter text-orange-500 text-xs group-hover:text-orange-600 group-active:text-white">
                View Slide Deck
              </div>
            </a>
            <a
              href="https://github.com/Pliploop/Spectrogram_Artist_Recognition"
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded-full px-3 py-2 bg-white flex flex-row gap-3 active:bg-purple-500 active:scale-95 active:text-white select-none border-[1px] border-purple-500 hover:border-purple-400 text-purple-500 hover:text-purple-600 transition-all duration-[20ms] items-center shadow-sm shadow-gray-400 group hover:bg-gray-100 cursor-pointer"
            >
              <VscGithub size={18} />
              <div className="font-inter text-purple-500 text-xs group-hover:text-purple-600 group-active:text-white">
                Github
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-0">
        <Timelinedot2 />
        <FillerBar />
      </div>
      <div className="lg:w-1/2 w-full h-full flex flex-col justify-start content-end items-start">
        <div className="flex flex-row justify-between items-center gap-3 w-full mb-5">
          <div className="h-px grow bg-gray-500"></div>
          <div className="font-inter font-bold text-lg text-gray-600">
            Abstract
          </div>
          <div className="h-px grow bg-gray-500"></div>
        </div>
        <div className="font-inter text-[10.5px] text-justify flex flex-col gap-3 text-gray-500">
          <p>
            Shazam is a music-identifying app which functions through
            deterministic fingerprinting of their immense database and
            cross-correlating real-time audio buffers to identify an ambient
            song. Despite the power of the algorithm, and the wide use, the
            Shazam algorithm lacks robustness to real-life situa- tions such as
            live performances or remixes. This prompts this project. This paper
            focuses on the proceedings and results obtained over the course of
            the project to replicate Shazam’s functionality through deep
            learning and mel-spectrograms.
          </p>
          <p>
            Through Literature overview, we isolate relevant Music Information
            Retrieval methods and models, as well as pre-processing and
            augmentation steps for audio data to be used in the project.
            Accuracy comparison for these models allows us to zero in on a given
            architecture, which presents both techni- cal novelty, and a basis
            for relevant performance. Further- more, this allows us to establish
            a baseline prediction for accuracy: 70%
          </p>
          <p>
            Data sourcing and pre-processing is conducted to obtain
            discographies for various artists, segmented audio clips of isolated
            vocals are then fed to the aforementioned model. Through training,
            the model obtains 68% accuracy on never-before seen test data,
            despite technical difficulties The proposed model learns coherent
            features, but not in- depth enough, which prompts thinking about
            next steps for the project, which could have performed much better
            with the necessary hindsight.
          </p>
        </div>
      </div>
    </div>
  );
}

function SpectrogramSectionSmall() {
  const [abstractdeployed, setabstractdeployed] = useState(false);

  return (
    <div className="w-full h-auto flex flex-row justify-start gap-8 -mt-2">
      <div className="flex flex-col items-center gap-0">
        <Timelinedot2 />
        <FillerBar />
      </div>
      <div className="flex flex-col h-auto grow">
        <div className="lg:w-1/2 w-full h-full flex flex-col">
          <div className="flex flex-col gap-3 w-full h-full">
            <div className="text-lg font-inter font-bold text-gray-800 text-left mb-3">
              {" "}
              Artist classification through spectrogram learning
            </div>
            <div className="flex flex-row gap-3 text-[10px] font-inter text-blue-700 justify-start mb-5 flex-wrap">
              <Academiatag text={"Music Information Retrieval"} />
              <Academiatag text={"Music Tagging"} />
              <Academiatag text={"Machine Learning"} />
              <Academiatag text={"Singing voice"} />
            </div>
            <div className="flex flex-row justify-between items-center gap-3 w-full mb-3">
              <div className="h-px grow bg-gray-500"></div>
              <div className="font-inter text-base text-gray-600">Context</div>
              <div className="h-px grow bg-gray-500"></div>
            </div>

            <div className="font-inter text-[10.5px] text-justify flex flex-col gap-3 text-gray-800 mb-5">
              <p>
                At the university of adelaide, I took a project-based course
                titled <b className="text-blue-600">Applied machine learning</b>{" "}
                from july 2021 to february 2022. The goal was to identify a
                problem that could be solved with ML, research state of the art
                and devise and implement a solution, including data sourcing and
                processing. This was my first time combining machine learning
                and music into what I didn't know at the time is essentially
                MIR.
              </p>
              <p>
                In hindsight, the paper isn't innovative, and the method can
                clearly be improved. High overfitting, too large of a test set,
                questonably sourced data... My PC also broke down during
                training so I couldn't iterate on models. But this is the
                project that really made me want to pursue MIR.{" "}
                <b className="font-bold text-blue-600">
                  This report and project earned me a 99/100
                </b>
              </p>
            </div>

            <div className="flex flex-row gap-5 items-center justify-start flex-wrap mb-5">
              <a
                href="/RecoNet.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className=" rounded-full px-3 py-2 bg-white flex flex-row gap-3 active:bg-red-500 active:scale-95 active:text-white select-none border-[1px] border-red-500 hover:border-red-400 text-red-500 hover:text-red-600 transition-all duration-[20ms] items-center shadow-sm shadow-gray-400 group hover:bg-gray-100 cursor-pointer"
              >
                <BsFileEarmarkPdf size={18} />
                <div className="font-inter text-red-500 text-xs group-hover:text-red-600 group-active:text-white">
                  View pdf
                </div>
              </a>
              <a
                href="/Deck.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className=" rounded-full px-3 py-2 bg-white flex flex-row gap-3 active:bg-orange-500 active:scale-95 active:text-white select-none border-[1px] border-orange-500 hover:border-orange-400 text-orange-500 hover:text-orange-600 transition-all duration-[20ms] items-center shadow-sm shadow-gray-400 group hover:bg-gray-100 cursor-pointer"
              >
                <SiMicrosoftpowerpoint size={18} />
                <div className="font-inter text-orange-500 text-xs group-hover:text-orange-600 group-active:text-white">
                  View Slide Deck
                </div>
              </a>
              <a
                href="https://github.com/Pliploop/Spectrogram_Artist_Recognition"
                target="_blank"
                rel="noopener noreferrer"
                className=" rounded-full px-3 py-2 bg-white flex flex-row gap-3 active:bg-purple-500 active:scale-95 active:text-white select-none border-[1px] border-purple-500 hover:border-purple-400 text-purple-500 hover:text-purple-600 transition-all duration-[20ms] items-center shadow-sm shadow-gray-400 group hover:bg-gray-100 cursor-pointer"
              >
                <VscGithub size={18} />
                <div className="font-inter text-purple-500 text-xs group-hover:text-purple-600 group-active:text-white">
                  Github
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex flex-col justify-start content-center items-center">
          <div className="flex flex-row justify-between items-center gap-3 w-full mb-5">
            <div className="h-px grow bg-gray-500"></div>
            <div className="font-inter font-bold text-lg text-gray-600">
              Abstract
            </div>
            <div className="h-px grow bg-gray-500"></div>
          </div>
          <div
            className={`relative font-inter text-[10.5px] text-justify flex flex-col gap-3 text-gray-600 overflow-hidden transition-transform duration-200 ease-linear ${
              abstractdeployed ? "h-56" : "h-auto"
            }`}
          >
            <div
              className={`absolute bg-gradient-to-b from-transparent to-white z-50 h-full w-full transition-all duration-200 ease-linear ${
                !abstractdeployed ? " opacity-0" : " opacity-100"
              }`}
            />
            <p>
              Shazam is a music-identifying app which functions through
              deterministic fingerprinting of their immense database and
              cross-correlating real-time audio buffers to identify an ambient
              song. Despite the power of the algorithm, and the wide use, the
              Shazam algorithm lacks robustness to real-life situations such as
              live performances or remixes. This prompts this project. This
              paper focuses on the proceedings and results obtained over the
              course of the project to replicate Shazam’s functionality through
              deep learning and mel-spectrograms.
            </p>
            <p>
              Through Literature overview, we isolate relevant Music Information
              Retrieval methods and models, as well as pre-processing and
              augmentation steps for audio data to be used in the project.
              Accuracy comparison for these models allows us to zero in on a
              given architecture, which presents both techni- cal novelty, and a
              basis for relevant performance. Furthermore, this allows us to
              establish a baseline goal for accuracy: 70%
            </p>
            <p>
              Data sourcing and pre-processing is conducted to obtain
              discographies for various artists, segmented audio clips of
              isolated vocals are then fed to the aforementioned model. Through
              training, the model obtains 68% accuracy on never-before seen test
              data, despite technical difficulties The proposed model learns
              coherent features, but not in- depth enough, which prompts
              thinking about next steps for the project, which could have
              performed much better with the necessary hindsight.
            </p>
          </div>
          <ShowMore isdeployed={abstractdeployed} setdeployed={setabstractdeployed}/>
        </div>
      </div>
    </div>
  );
}

export { SpectrogramSection, SpectrogramSectionSmall };
