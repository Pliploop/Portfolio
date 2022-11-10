import image from "../content/images/propic.jpg";
import { FaGraduationCap, FaLinkedinIn, FaMicroscope } from "react-icons/fa";
import { GiSuitcase } from "react-icons/gi";
import { BsGlobe, BsMedium } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";

export function HeroSection() {
  return (
    <div className="flex flex-col align-top justify-between lg:gap-20 gap-10 mt-16">
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
            <span className="text-sm text-gray-600 font-bold text-justify">
              {" "}
              Welcome to my artistic & academic portfolio!{" "}
            </span>{" "}
            <p className="text-sm text-gray-600 text-justify">
              {" "}
              I'm a French-American double Masters graduate passionate about
              music and AI, and I believe research in those fields is my
              vocation. I'm aiming to undertake a Music Information Retrieval
              oriented PhD program in september 2023 to extend my understanding
              of music and research. I'm a self taught guitarist, bassist
              vocalist, pianist, producer and DJ of 10 years.
            </p>
            <br />
            <br />
            <p className="text-sm text-gray-600 text-justify">
              {" "}
              On this website you'll find my academic writings as well as music
              I've either made, arranged, performed or mixed and mastered. This
              is an academia-oriented portfolio, so for further info and
              projects you can check out{" "}
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
      <div className="grow w-full flex flex-col lg:flex-row justify-between">
        <div className="h-auto lg:mb-0 mb-10 grow lg:px-10">
          <div className="flex flex-row align-middle">
            <h2 className="font-inter text-lg font-semibold text-blue-400">
              {" "}
              Research interests
            </h2>
            <div className="mx-3 h-px grow bg-blue-400 self-center"></div>
            <FaMicroscope size={18} className="self-center text-blue-400" />
          </div>
        </div>
        <EducationSubSection />
        <ProfessionalSubsection />
      </div>
    </div>
  );
}

const EducationSubSection = () => {
  return (
    <div className="h-auto lg:mb-0 mb-10  lg:w-1/4 lg:px-10">
      <div className="flex flex-row align-middle">
        <h2 className="font-inter text-lg font-semibold text-blue-400">
          {" "}
          Education
        </h2>
        <div className="mx-3 h-px grow bg-blue-400 self-center"></div>
        <FaGraduationCap size={18} className="self-center text-blue-400" />
      </div>

      <ul className="relative border-l border-gray-200 dark:border-gray-700 mt-3">
        <li className="mb-3 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
            2018-2022
          </time>
          <h3 className="text-xs font-semibold text-gray-900 dark:text-white">
            MSc Engineering
          </h3>
          <h3 className="text-xs font-semibold text-gray-900 dark:text-white mb-2">
            BSc Engineering
          </h3>

          <p className="text-xs font-normal text-gray-500 dark:text-gray-400">
            Ecole Centrale de Lyon - France
          </p>
          <p className="font-mono text-blue-500 text-xs mt-2">GPA: 3.6/4.0</p>
        </li>
        <li className="mb-3 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
            2021-2022 - Abroad
          </time>
          <h3 className="text-xs font-semibold text-gray-900 dark:text-white">
            MSc Engineering - Acoustics, Data Science
          </h3>
          <p className="text-xs font-normal text-gray-500 dark:text-gray-400">
            University of Adelaide - Australia
          </p>
          <p className="font-mono text-blue-500 text-xs mt-2">GPA: 5.9/7</p>
        </li>
      </ul>
    </div>
  );
};

const ProfessionalSubsection = () => {
  return (
    <div className="h-auto lg:w-1/4 lg:px-10 lg:ml-10">
      <div className="flex flex-row align-middle">
        <h2 className="font-inter text-lg font-semibold text-blue-400">
          {" "}
          Professional
        </h2>
        <div className="mx-3 h-px grow bg-blue-400 self-center"></div>
        <GiSuitcase size={18} className="self-center text-blue-400" />
      </div>
      <ul className="relative border-l border-gray-200 dark:border-gray-700 mt-3">
        <li className="mb-3 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
            Oct 2022-Present
          </time>
          <h3 className="text-xs font-semibold text-gray-900 dark:text-white">
            Data Scientist
          </h3>
          <p className="text-xs font-normal text-gray-500 dark:text-gray-400">
            Believe
          </p>
        </li>
        <li className="mb-3 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
            Apr 2022- Oct 2022
          </time>
          <h3 className="text-xs font-semibold text-gray-900 dark:text-white">
            MIR Scientist / Data Scientist intern
          </h3>
          <p className="text-xs font-normal text-gray-500 dark:text-gray-400">
            Groover
          </p>
        </li>
        <li className="mb-3 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
            Mar 2021- Oct 2021
          </time>
          <h3 className="text-xs font-semibold text-gray-900 dark:text-white">
            Data Scientist intern
          </h3>
          <p className="text-xs font-normal text-gray-500 dark:text-gray-400">
            Artefact
          </p>
        </li>
        <li className="mb-3 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
            Mar 2020- Oct 2020
          </time>
          <h3 className="text-xs font-semibold text-gray-900 dark:text-white">
            Research Intern
          </h3>
          <p className="text-xs font-normal text-gray-500 dark:text-gray-400">
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
        <span className="lg:text-sm text-xs self-center align-middle font-mono">
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
