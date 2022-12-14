import image from "../content/images/propic.jpg";
import { FaGraduationCap, FaLinkedinIn, FaMicroscope } from "react-icons/fa";
import { GiSuitcase } from "react-icons/gi";
import { BsGlobe, BsMedium } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";
import { Academiatag2 } from "../components/academiacomponents/UnitComponents";

export function HeroSection() {
  return (
    <div className="flex flex-col align-top justify-between lg:gap-10 gap-10 lg:mt-0 mt-10">
      <div className="w-full flex lg:flex-row justify-between">
        <div className="h-[330px] w-[330px] lg:scale-100 scale-[80%] aspect-square group absolute hidden lg:m-0 ml-[250px] mt-[420px] lg:relative lg:flex">
          <div className="absolute h-20 w-20 mt-20 group-hover:ml-[-25px] transition-all duration-300 border-4 border-sky-400 rounded-full blur-[1px] group-hover:blur-sm" />
          <div className="absolute h-32 w-20 mt-48 group-hover:h-36 transition-all duration-300 border-4 border-sky-600 rounded-full blur-[1px] group-hover:blur-sm" />
          <div className="absolute h-20 w-20 mt-[230px] ml-[230px] transition-all duration-300 border-4 border-teal-500 rounded-xl blur-[2px] group-hover:blur-sm" />
          <div className="absolute h-56 w-56 mt-2 group-hover:mt-0 ml-4 group-hover:ml-0 transition-all duration-300 border-4 border-teal-400 rounded-full blur-[3px] group-hover:blur-[5px] z-50" />
          <div className="h-full scale-95 border-white border-8 group-hover:scale-100 transition-all shadow-lg group-hover:shadow-gray-400 aspect-square rounded-full overflow-hidden">
            <img src={image} alt="me"></img>
          </div>
        </div>
        <div className="grow lg:ml-20 flex flex-col justify-between gap-5">
          <div className="w-full lg:h-3/4">
            <h1 className="section-title mb-5">Julien Guinot, MSc</h1>
            <span className="text-base text-gray-600 font-bold text-justify">
              {" "}
              Welcome to my artistic & academic portfolio!{" "}
            </span>{" "}
            <p className="text-base text-gray-600 text-justify">
              {" "}
              I'm a French-American double Masters graduate passionate about
              music and AI, and I believe research in those fields is my
              vocation. I'm aiming to undertake a Music Information Retrieval
              oriented PhD program in september 2023 to extend my understanding
              of music and research. I'm a self taught guitarist, bassist,
              vocalist, pianist, producer and DJ of 10 years.
            </p>
            <br />
            <br />
            <p className="text-base text-gray-600 text-justify">
              {" "}
              On this website you'll find my academic writing sample as well as
              music I've either made, arranged, performed, mixed and/or
              mastered. This is an academia-oriented portfolio, so for further
              info and projects you can check out{" "}
              <a
                href="https://julienguinot.com"
                className="text-blue-400 hover:text-blue-500 hover:font-bold"
              >
                my website!
              </a>
            </p>
          </div>
          <div className="lg:hidden w-full lg:scale-100 scale-[80%] aspect-square group lg:m-0 lg:relative flex">
            <div className="absolute h-20 w-20 mt-20 group-focus:ml-[-25px] transition-all duration-300 border-4 border-sky-400 rounded-full blur-[1px] group-focus:blur-sm" />
            <div className="absolute h-32 w-20 mt-48 group-focus:h-36 transition-all duration-300 border-4 border-sky-600 rounded-full blur-[1px] group-focus:blur-sm" />
            <div className="absolute h-20 w-20 mt-[230px] ml-[230px] transition-all duration-300 border-4 border-teal-500 rounded-xl blur-[2px] group-focus:blur-sm" />
            <div className="absolute h-56 w-56 mt-2 group-focus:mt-0 ml-4 group-focus:ml-0 transition-all duration-300 border-4 border-teal-400 rounded-full blur-[3px] group-focus:blur-[5px] z-50" />
            <div className="h-full scale-95 border-white border-8 group-focus:scale-100 transition-all shadow-lg group-focus:shadow-gray-400 aspect-square rounded-full overflow-hidden">
              <img src={image} alt="me"></img>
            </div>
          </div>
          <ContactLinks />
        </div>
      </div>
      <div className="grow w-full flex flex-col lg:flex-row justify-between mb-20">
        <ResearchSection />
        <div className="flex lg:flex-row flex-col lg:gap-10 gap-10 grow justify-between">
          <EducationSubSection />
          <ProfessionalSubsection />
        </div>
      </div>
      <ResearchIdeasSection />
    </div>
  );
}

const ResearchIdeasSection = () => {
  return (
    <div className="h-auto lg:mb-0  lg:w-full lg:px-4">
      <div className="flex flex-row align-middle mb-5">
        <h2 className="font-inter text-lg font-semibold text-blue-400">
          {" "}
          Research projects
        </h2>
        <div className="mx-3 h-px grow bg-blue-400 self-center"></div>
        <HiMagnifyingGlassCircle
          size={24}
          className="self-center text-blue-400"
        />
      </div>
      <div className="flex flex-col gap-10">
        <p className="w-full font-inter text-gray-600 text-justify text-base">
          {" "}
          Recently, the surge in interest for AI generative creativity in the
          image and video (DALL-E, Stable Diffusion) domain has fascinated me
          and I would love to emulate the self-supervised multi-modal methods
          and meta-learning studies in these domains to the field of music. Here
          are a list of potential research projects I have - related to
          diffusion
        </p>
        <div className="lg:flex flex-row gap-10 font-inter text-blue-500 justify-center mb-5 flex-wrap hidden">
          <Academiatag2
            text={
              "(Text prompt / style) conditioned music / drum samples and grooves generation."
            }
          />
          <Academiatag2
            text={"Audio-informed time domain melody inpainting."}
          />

          <Academiatag2
            text={"context-informed time domain chord inpainting."}
          />
          <Academiatag2
            text={
              "source separation on similar monophonic sources, e.g. separating harmony lines from backing vocals."
            }
          />
          <Academiatag2 text={"Singing voice cloning"} />
          <Academiatag2 text={"Vocal register Segmentation"} />

          <Academiatag2 text={"Video classification for music tagging   "} />

          <Academiatag2
            text={"Melody-conditioned harmony line generation with diffusion"}
          />
        </div>
        <div className="w-full lg:hidden flex flex-col divide-y divide-blue-500 font-inter text-gray-600">
          <div className="py-3">
            {" "}
            (Text prompt / style) conditioned music / drum samples and grooves
            generation.
          </div>

          <div className="py-3"> Audio-informed time domain melody inpainting.</div>
          <div className="py-3"> context-informed time domain chord inpainting.</div>
          <div className="py-3">
            {" "}
            source separation on similar monophonic sources, e.g. separating
            harmony lines from backing vocals.
          </div>
          <div className="py-3"> Singing voice cloning</div>
          <div className="py-3"> Video classification for music tagging </div>
          <div className="py-3"> Melody-conditioned harmony line generation with diffusion</div>
        </div>
        {/* <ul className="flex flex-row mb-5">
          <li className="text-base text-blue-500 font-inter justify-center">
            Research ideas
            <div className="grow h-px bg-blue-500 my-3"></div>
            <ul className="font-inter font-base text-sm text-gray-600  flex flex-col gap-2">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li>Vocal Register Segmentation</li>
            </ul>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

const EducationSubSection = () => {
  return (
    <div className="h-auto lg:mb-0  lg:w-full lg:px-4">
      <div className="flex flex-row align-middle">
        <h2 className="font-inter text-lg font-semibold text-blue-400">
          {" "}
          Education
        </h2>
        <div className="mx-3 h-px grow bg-blue-400 self-center"></div>
        <FaGraduationCap size={18} className="self-center text-blue-400" />
      </div>

      <ul className="relative border-l border-gray-200  mt-3">
        <li className="mb-3 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white   kbg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400  ktext-gray-500">
            2018-2022
          </time>
          <h3 className="text-sm font-semibold text-gray-900  ktext-white">
            MSc Engineering
          </h3>
          <h3 className="text-sm font-semibold text-gray-900  mb-2">
            BSc Engineering
          </h3>

          <p className="text-sm font-normal text-gray-500  ktext-gray-400">
            Ecole Centrale de Lyon - France
          </p>
          <p className="font-mono text-blue-500 text-sm mt-2">GPA: 3.6/4.0</p>
        </li>
        <li className="mb-3 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white   kbg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400  ktext-gray-500">
            2021-2022 - Abroad
          </time>
          <h3 className="text-sm font-semibold text-gray-900  ktext-white">
            MSc Engineering - Acoustics, Data Science
          </h3>
          <p className="text-sm font-normal text-gray-500  ktext-gray-400">
            University of Adelaide - Australia
          </p>
          <p className="font-mono text-blue-500 text-sm mt-2">GPA: 5.9/7</p>
        </li>
      </ul>
    </div>
  );
};

const ProfessionalSubsection = () => {
  return (
    <div className="h-auto lg:w-full lg:px-4 lg:ml-0">
      <div className="flex flex-row align-middle">
        <h2 className="font-inter text-lg font-semibold text-blue-400">
          {" "}
          Professional
        </h2>
        <div className="mx-3 h-px grow bg-blue-400 self-center"></div>
        <GiSuitcase size={18} className="self-center text-blue-400" />
      </div>
      <ul className="relative border-l border-gray-200  mt-3">
        <li className="mb-3 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white   kbg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400  ktext-gray-500">
            Oct 2022-Present
          </time>
          <h3 className="text-sm font-semibold text-gray-900  ktext-white">
            Data Scientist
          </h3>
          <p className="text-sm font-normal text-gray-500  ktext-gray-400">
            Believe
          </p>
        </li>
        <li className="mb-3 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white   kbg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400  ktext-gray-500">
            Apr 2022- Oct 2022
          </time>
          <h3 className="text-sm font-semibold text-gray-900  ktext-white">
            MIR Scientist / Data Scientist intern
          </h3>
          <p className="text-sm font-normal text-gray-500  ktext-gray-400">
            Groover
          </p>
        </li>
        <li className="mb-3 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white   kbg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400  ktext-gray-500">
            Mar 2021- Oct 2021
          </time>
          <h3 className="text-sm font-semibold text-gray-900  ktext-white">
            Data Scientist intern
          </h3>
          <p className="text-sm font-normal text-gray-500  ktext-gray-400">
            Artefact
          </p>
        </li>
        <li className="mb-3 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400">
            Mar 2020- Oct 2020
          </time>
          <h3 className="text-sm font-semibold text-gray-900">
            Research Intern
          </h3>
          <p className="text-sm font-normal text-gray-500">
            IRCAM
          </p>
        </li>
      </ul>
    </div>
  );
};

const ContactLinks = () => {
  return (
    <div className="w-full grow flex lg:gap-5 flex-row align-middle content-center md:justify-start justify-evenly lg:px-5 py-5 px-0 ">
      <a
        className="lg:h-10 h-8 px-5 rounded-full bg-gradient-to-tr from-sky-300 to-teal-400 shadow-md border-gray-100 border-2 flex cursor-pointer hover:scale-105 transition-all hover:from-sky-400 hover:to-teal-500 text-white font-semibold active:scale-95"
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="lg:text-sm text-sm self-center align-middle font-mono">
          My Resume
        </span>
      </a>
      <a
        href="https://www.github.com/Pliploop"
        className="contact-button group"
      >
        <VscGithub className="self-center" size={20} />
        <div className="absolute group-hover:text-gray-400 text-xs font-sans text-transparent group-hover:mt-10 transition-all duration-75">
          github
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/julien-guinot"
        className="contact-button group"
      >
        <FaLinkedinIn className="self-center" size={16} />
        <div className="absolute group-hover:text-gray-400 text-xs font-sans text-transparent group-hover:mt-10 transition-all duration-75">
          Linkedin
        </div>
      </a>
      <a href="https://www.julienguinot.com" className="contact-button group">
        <BsGlobe className="self-center" size={16} />
        <div className="absolute group-hover:text-gray-400 text-xs font-sans text-transparent group-hover:mt-10 transition-all duration-75">
          Website
        </div>
      </a>
      <a
        href="https://www.medium.com/@juj_guinot"
        className="contact-button group"
      >
        <BsMedium className="self-center" size={20} />
        <div className="contact-tooltip">Medium</div>
      </a>
    </div>
  );
};

const ResearchSection = () => {
  return (
    <div className="h-auto lg:mb-0 mb-10 lg:w-2/3 grow lg:px-10">
      <div className="flex flex-row align-middle mb-6">
        <h2 className="font-inter text-lg font-semibold text-blue-400">
          {" "}
          Research interests
        </h2>
        <div className="mx-3 h-px grow bg-blue-400 self-center"></div>
        <FaMicroscope size={18} className="self-center text-blue-400" />
      </div>
      <div className="text-sm text-gray-600 font-inter text-justify">
        <p className="lg:mb-6 mb-10">
          {" "}
          My research interests lie at the intersection of music and Artificial
          Intelligence / Machine Learning. This includes Music Information
          Retrieval, Generative Modeling, Audio signal Processing. I believe
          that advances in music technology powered by artficial intelligence
          can be powerful catalysts for creative musical outlets. As a vocalist,
          multiinstrumentalist, producer, mixing and mastering aficionado, my
          interests span a large range of current domains in sound and music computing:
        </p>
        <ul className="flex lg:flex-row flex-col lg:gap-0 gap-10 justify-evenly mb-5 lg:px-0 px-10">
          <li className="text-base text-blue-500 font-inter text-center">
            {" "}
            Music Information Retrieval
            <div className="w-full h-px bg-blue-500 my-3"></div>
            <ul className="font-inter font-base text-sm text-gray-600 flex flex-col gap-2">
              <li> Music generation</li>
              <li> Automatic Music Transcription</li>
              <li> F0 estimation</li>
              <li> Source Separation</li>
              <li> Neural Audio Effects</li>
            </ul>
          </li>
          <li className="text-base text-blue-500 font-inter text-center">
            Methods
            <div className="w-full h-px bg-blue-500 my-3"></div>
            <ul className="font-inter font-base text-sm text-gray-600  flex flex-col gap-2">
              <li>Representation learning</li>
              <li>Self-supervised learning</li>
              <li>Multimodal representations</li>
              <li>Few-shot learning</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
