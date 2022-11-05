import { GrLinkNext, GrDown } from "react-icons/gr";

import { IoIosMusicalNotes, IoIosMusicalNote } from "react-icons/io";
import { MdGraphicEq } from "react-icons/md";
import { FaPenNib } from "react-icons/fa";

import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";

import SectionHeader from "../components/header";
import { svg1, svg2, svg3, commuzsvg } from "../components/svg/svg";
import disc from "../content/images/Disc.png";
import guitar from "../content/images/Guitar.png";
import pc from "../content/images/PC.png";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useSwipeable } from "react-swipeable";

export function MusicSection() {
  return (
    <div>
      <div className="flex flex-col w-full h-full mb-40 pt-16">
        <MusicHeader text="My Music" />
        <MusicIntro />
      </div>
      <div className="flex flex-col w-full  mb-20">
        <MusicHeader text={"Featured"} />
        <MusicFeatured />
      </div>
      <div className="flex flex-col w-full  mb-20">
        <MusicHeader text={"Mix & Mastering"} />
        <MusicMixMaster />
      </div>
      <div className="flex flex-col w-full  mb-20">
        <MusicHeader text={"Arrangements"} />
        <MusicArranged />
      </div>
    </div>
  );
}

const MusicHeader = ({ text }) => {
  return (
    <div className="lg:mb-16 mb-10">
      <SectionHeader text={text} />
    </div>
  );
};

const MusicIntro = () => {
  return (
    <div className=" flex lg:flex-row flex-col gap-10">
      <div className=" lg:w-[27%] w-full lg:p-10 font-inter lg:text-sm text-sm lg:mb-0 mb-10">
        <p className="text-justify mb-10">
          Music has been the focal point of my life for the past 5 years. I
          started playing music about 8 years ago with guitar, and have never
          stopped since. I love learning new instruments, new skills, and new
          areas of music I have never explored before. The creative puzzle music
          is to me makes me motivated to become the best I can at it, and
          combining it with research and artificial intelligence could not make
          me happier.{" "}
        </p>
        <p className="text-justify">
          I am motivated by and interested in all areas of music. I have dabbled
          in and explored performance, being a multi-instrumentalist, a
          vocalist, mixing, mastering, composing, arranging, producing, and
          music theory even though I do not have a formal musical education. And
          of course, I'm always open to learning more! There are few things I am
          more curious about than music.
        </p>
      </div>
      <div className=" grow flex flex-col justify-between">
        <div className="h-auto  flex flex-row justify-start lg:mb-0 mb-20">
          <div className="w-1/4 aspect-square group lg:flex absolute lg:relative">
            <div className="absolute mt-[-120px] lg:mt-[-70px] lg:ml-[-10px] ml-[-150px] group-hover:animate-pulse lg:scale-100 scale-100 flex lg:opacity-100 opacity-50">
              {svg1}
            </div>
            <img
              className="absolute mt-[-0px] ml-[70px] lg:scale-[70%] scale-[40%] lg:flex hidden"
              src={guitar}
              alt="comp-prod"
            />
          </div>
          <div className="flex flex-col grow justify-start lg:py-10 lg:px-6">
            <h2 className="lg:text-xl text-lg font-inter font-bold z-50 mb-3 text-purple-500">
              Performance
            </h2>
            <ul className="lg:ml-14 z-50 font-mono lg:text-sm text-xs">
              <li>
                <div className="flex flex-row justify-start items-center">
                  acoustic & Electric guitar{" "}
                  <div className="h-px grow mx-3 bg-purple-400 "></div>
                  <p className="font-bold text-purple-400">7 years</p>
                </div>
              </li>
              <li>
                <div className="flex flex-row justify-start items-center">
                  Electric bass{" "}
                  <div className="h-px grow mx-3 bg-purple-400 "></div>
                  <p className="font-bold text-purple-400">3 years</p>
                </div>
              </li>
              <li>
                <div className="flex flex-row justify-start items-center">
                  Bass to low tenor vocalist{" "}
                  <div className="h-px grow mx-3 bg-purple-400 "></div>
                  <p className="font-bold text-purple-400">3 years</p>
                </div>
              </li>
              <li>
                <div className="flex flex-row justify-start items-center">
                  DJ <div className="h-px grow mx-3 bg-purple-400 "></div>
                  <p className="font-bold text-purple-400">5 years</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-auto  flex flex-row justify-end lg:mb-0 mb-10">
          <div className="flex flex-col grow justify-start lg:p-10">
            <h2 className="lg:text-xl text-lg text-teal-500 font-inter font-bold lg:justify-end flex z-50 mb-5">
              Composition & Production
            </h2>
            <ul className="lg:mr-14 z-50 font-mono lg:text-sm text-xs">
              <li>
                <div className="flex flex-row justify-start items-center">
                  House production - FL Studio & Ableton{" "}
                  <div className="h-px grow mx-3 bg-teal-400 "></div>
                </div>
              </li>
              <li>
                <div className="flex flex-row justify-start items-center">
                  Solo choir covers using Ableton{" "}
                  <div className="h-px grow mx-3 bg-teal-400 "></div>
                </div>
              </li>
              <li>
                <div className="flex flex-row justify-start items-center">
                  Composition of OST for animated series{" "}
                  <div className="h-px grow mx-3 bg-teal-400 "></div>
                </div>
              </li>
              <li>
                <div className="flex flex-row justify-start items-center">
                  Arrangements for SATB choir{" "}
                  <div className="h-px grow mx-3 bg-teal-400 "></div>
                </div>
              </li>
            </ul>
          </div>
          <div className=" w-1/4 aspect-square group lg:flex absolute lg:relative">
            <div className="absolute mt-[-70px] lg:ml-[-150px] ml-[-70px] group-hover:animate-pulse lg:scale-100 scale-100 lg:opacity-100 opacity-50 hidden">
              {svg2}
            </div>
            <img
              className="absolute mt-[-0px] ml-[-100px] lg:scale-[40%] scale-[40%] lg:flex hidden"
              src={disc}
              alt="comp-prod"
            />
          </div>
        </div>
        <div className="h-auto  flex flex-row justify-start">
          <div className="w-1/4 aspect-square lg:flex lg:relative absolute">
            <div className="absolute mt-[-70px] lg:ml-[0px] ml-[-200px] hover:animate-pulse scale-100 opacity-50 lg:opacity-100 ">
              {svg3}
            </div>
            <img
              className="absolute mt-[-0px] ml-[-0px] lg:scale-[60%] scale-[25%] lg:ml-10 lg:mt-10 lg:flex hidden"
              src={pc}
              alt="comp-prod"
            />
          </div>
          <div className="flex flex-col  grow justify-start lg:p-10 py-10">
            <h2 className="lg:text-xl text-lg font-inter font-bold z-50 mb-5 text-sky-500">
              Mixing & Mastering
            </h2>
            <ul className="lg:ml-14 z-50 font-mono lg:text-sm text-xs">
              <li>
                <div className="flex flex-row justify-start items-center">
                  Mixing of 4 24-track orchestral albums
                  <div className="h-px grow mx-3 bg-sky-400 "></div>
                </div>
              </li>
              <li>
                <div className="flex flex-row justify-start items-center">
                  Mastering of said albums
                  <div className="h-px grow mx-3 bg-sky-400 "></div>
                </div>
              </li>
              <li>
                <div className="flex flex-row justify-start items-center">
                  Mix & Mastering of my own tracks
                  <div className="h-px grow mx-3 bg-sky-400 "></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

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

const MusicFeatured = () => {
  function toggleAztecText() {
    var gradient = document.getElementById("aztecreadmoregradient");
    var text = document.getElementById("aztecreadmoretext");
    var readmore = document.getElementById("readmore");
    var icon = document.getElementById("readmoreicon");

    if (icon.classList.contains("rotate-0")) {
      // Show the dots

      readmore.innerHTML = "read less";
      icon.classList.add("rotate-180");

      icon.classList.remove("rotate-0");

      text.classList.remove("h-44");
      text.classList.add("h-[400px]");

      gradient.classList.add("hidden");
    } else {
      icon.classList.add("rotate-0");
      icon.classList.remove("rotate-180");

      readmore.innerHTML = "read more";

      text.classList.add("h-44");

      text.classList.remove("h-[400px]");

      gradient.classList.remove("hidden");
    }
  }
  return (
    <div className=" flex lg:flex-col flex-col gap-14 w-full">
      <div className="flex lg:flex-row flex-col w-full h-auto gap-10">
        <div className="flex flex-col lg:w-3/4 h-full pb-0">
          <div className="lg:h-full w-full border-[1px] border-emerald-300 border-b-[6px] cursor-pointer text-gray-600 hover:shadow-lg hover:scale-[102%] hover:border-emerald-500 transition-all duration-100 shadow-md rounded-3xl p-5">
            <h2 className="font-inter text-lg mb-3 font-bold text-emerald-500">
              Aztecs : original composition
            </h2>
            <div
              className="h-44 lg:h-auto overflow-hidden relative transition-all duration-200"
              id="aztecreadmoretext"
            >
              <div
                className="absolute h-full w-full bg-gradient-to-b from-transparent to-white lg:hidden"
                id="aztecreadmoregradient"
              ></div>
              <p className="font-inter text-sm mb-3">
                This is an OST I composed, produced and mix-mastered for the
                trailer of an animated series on ancient Aztecs. The trailer was
                to give a taste of the series and lasted about 2mins.
              </p>
              <p className="font-inter text-sm  mb-3">
                I scored this over an animated trailer. The goal was to create a
                dreamy rainforest ambient sound at the start, which I used lush
                pads and chirping flutes for. As the village gets closer and the
                ceremony depicted in the trailer can be heard more and more
                clearly, We slowly transition to men singing in traditional
                aztec dialect.
              </p>
              <p className="font-inter text-sm  mb-10">
                The final movement is agressive and percussive : I used samples
                of traditional drums from south america, samples of aztec death
                whistles and my own voice to create a chorus of warriors
                chanting.
              </p>

              <p className="font-mono text-xs text-gray-500  mb-3">
                Fun fact : I generated the cover of the album using stable
                diffusion!
              </p>
            </div>
            <div
              className="flex flex-col items-center justify-center mt-5 lg:hidden"
              onClick={() => toggleAztecText()}
            >
              <p className="text-gray-600 font-mono z-50" id="readmore">
                read more
              </p>
              <GrDown
                className="rotate-0 transition-all duration-300"
                id="readmoreicon"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col align-top items-start content-start h-full grow lg:pr-20">
          <div className="w-full rounded-xl overflow-clip mb-5 shadow-md">
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              url="https://soundcloud.com/jujgui/aztecs"
              config={{
                soundcloud: {
                  options: {
                    show_artwork: false,
                    show_user: false,
                  },
                },
              }}
            />
          </div>
          <div className="flex flex-row justify-items-start gap-3 flex-wrap">
            <div className="featured-tag">Composition</div>
            <div className="featured-tag">Arrangement</div>
            <div className="featured-tag">Mixing</div>
            <div className="featured-tag">Mastering</div>
            <div className="featured-tag">production</div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col w-full gap-10">
        <div className="flex flex-col lg:w-2/3 w-full h-full">
          <div className="lg:h-full w-full border-[1.5px] border-orange-300 border-b-[6px] cursor-pointer text-gray-600 hover:shadow-lg hover:scale-[102%] hover:border-orange-600 transition-all duration-100 shadow-md rounded-3xl p-5">
            <h2 className="font-inter text-lg mb-8 font-bold text-orange-500">
              LikeTHAT : disco house production
            </h2>
            <div
              className="h-auto lg:h-auto overflow-hidden relative transition-all duration-200"
              id="likethatreadmoretext"
            >
              <div
                className="absolute h-full w-full bg-gradient-to-b from-transparent to-white lg:hidden hidden"
                id="likethatreadmoregradient"
              ></div>

              <div className="flex lg:flex-row flex-col gap-5 w-full">
                <div className="aspect-square lg:w-56 w-full rounded-2xl overflow-clip mb-5 shadow-md">
                  <ReactPlayer
                    className="w-full h-12"
                    height={"100%"}
                    width={"100%"}
                    url="https://soundcloud.com/jujgui/likethat-remastered"
                  />
                </div>
                <div className="flex flex-col lg:w-2/3">
                  <div className="flex flex-row justify-items-start gap-3 h-8 flex-wrap mb-6">
                    <div className="featured-tag-yellow">Production</div>
                    <div className="featured-tag-yellow">Mixing</div>
                    <div className="featured-tag-yellow">Mastering</div>
                  </div>
                  <p className="font-inter text-sm  mb-3">
                    I produced this disco house track during the first lockdown
                    (2020) to integrate into my DJ sets. I used ableton and this
                    was first time producing something from scratch. I learned a
                    lot about mixing producing this! I play the guitar and bass
                    on this track.
                  </p>
                  <p className="font-inter text-sm  mb-3">
                    Note : this is a remastered version of the track, In which I
                    corrected the tonal balance as low-end was much too present
                    (specifically kick was overpowering) and glued the mix
                    together a bit more using saturation and compression.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2 h-full">
          <div className="lg:h-full w-full border-[1.5px] border-purple-300 border-b-[6px] cursor-pointer text-gray-600 hover:shadow-lg hover:scale-[102%] hover:border-purple-400 transition-all duration-100 shadow-md rounded-3xl p-5">
            <h2 className="font-inter text-lg mb-8 font-bold text-purple-500">
              Feeling good : orchestral mix
            </h2>
            <div
              className="h-auto lg:h-auto overflow-hidden relative transition-all duration-200"
              id="likethatreadmoretext"
            >
              <div
                className="absolute h-full w-full bg-gradient-to-b from-transparent to-white lg:hidden hidden"
                id="likethatreadmoregradient"
              ></div>

              <div className="flex lg:flex-row flex-col gap-5 w-full">
                <div className="aspect-square lg:w-56 rounded-2xl overflow-clip mb-10 shadow-md">
                  <ReactPlayer
                    className="w-full h-12"
                    height={"100%"}
                    width={"100%"}
                    url="https://soundcloud.com/jujgui/feeling-good?si=b5c13b28cb4e4332b8c69a01fea99cfa&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                  />
                </div>
                <div className="flex flex-col lg:w-2/3">
                  <div className="flex flex-row justify-items-start gap-3 mb-6 h-8 flex-wrap">
                    <div className="featured-tag-purple">Mixing</div>
                    <div className="featured-tag-purple">Mastering</div>
                  </div>

                  <p className="font-inter text-sm  mb-3">
                    This is what I consider to be the best mix I produced from
                    the latest album of the student musical I was part of for 4
                    years (See mix/mastering). It's my latest mix and represents
                    my mixing ability well.
                  </p>
                  <p className="font-inter text-sm  mb-5">
                    I am also specifically proud of this track because I was the
                    vocal coach for the main performer and I believe the
                    performance turned out quite well.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MusicMixMaster = () => {
  return (
    <div className=" flex lg:flex-col flex-col h-auto gap-20 w-full">
      <div className="flex lg:flex-row flex-col w-full h-auto lg:gap-20 gap-10">
        <div className="flex flex-col lg:w-2/3 h-full lg:p-10">
          <div className="flex flex-col justify-start font-inter">
            <span className="mb-10 z-50">
              {" "}
              During my 4 years of engineering school at Ecole Centrale de Lyon,
              I participated in a student-built student-led musical theatre
              project :{" "}
            </span>
            <a
              className="h-12 w-48 mb-10 rounded-full bg-pink-200 border-white border-2 shadow-md self-center flex flex-row justify-center items-center cursor-pointer hover:scale-105 hover:bg-pink-300 hover:shadow-gray-400 transition-all duration-75 font-mono center"
              href="https://www.commuz.fr"
            >
              Commuz'
            </a>

            <blockquote class="lg:ml-14 p-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800 relative">
              <div className="absolute w-[300px] aspect-square mt-[-180px] ml-[-150px] z-0 opacity-[3%]">
                {commuzsvg}
              </div>
              <p class="lg:text-sm text-xs italic font-medium leading-relaxed text-gray-900 dark:text-white z-50">
                Commuz' is a student-led society that creates a new musical
                theatre piece every year. Everything is done by the students :
                Scenario, playwriting, Arrangement, Composition, Sound
                Engineering, Recording, Mixing, Costumes, Props, Choreography...
                Every year 80 students come together to create a high quality,
                high reward Broadway-style musical play.
              </p>
            </blockquote>
            <div className="flex lg:flex-row flex-col">
              <div>
                <p class="mt-8 font-inter leading-relaxed text-gray-900 dark:text-white lg:text-base text-sm z-50 mb-10 lg:w-5/6 text-justify">
                  Every year, a new play is born and I took part in each one of
                  my 4 years at ECL. I started as a sound engineer and kept
                  mixing the album every year, which is mostly where I learned
                  to mix. Discover the specifics of each play below, and my
                  featured mixes from last year's edition here!
                </p>

                <p class="mt-8 font-inter leading-relaxed text-gray-900 dark:text-white font-bold lg:text-base text-sm z-50 lg:mb-20 mb-10 lg:w-3/4">
                  My roles each year of the play were:
                </p>
              </div>

              <div className="flex items-center justify-center grow">
                <div className="items-center justify-center h-16 w-16 border-2 border-gray-500 hidden lg:flex rounded-full">
                  <GrLinkNext size={20}></GrLinkNext>
                </div>
                <div className="items-center justify-center h-16 mb-10 w-16 border-2 border-gray-500 lg:hidden flex rounded-full">
                  <GrDown size={20}></GrDown>
                </div>
              </div>
            </div>
            <div className="w-full p-5 lg:px-10 flex flex-col lg:flex-row justify-between lg:mb-10 lg:h-auto  h-[500px]">
              <div
                className={`aspect-square h-10 w-10 rounded-full bg-pink-400 border-white border-2 shadow-gray-400 shadow-md lg:self-center items-center text-white flex justify-center relative`}
              >
                <IoIosMusicalNotes size={20} />
                <p className={`commuzpinkdate`}>2022</p>
                <ul className={`commuzpinkrole`}>
                  <li>Choir lead</li>
                  <li>Mix-Master Engineer</li>
                </ul>
              </div>
              <div className="lg:h-px w-px ml-5 grow bg-pink-400 lg:self-center lg:mx-3 lg:my-0 my-3" />
              <div
                className={`aspect-square h-10 w-10 rounded-full items-center text-white border-white border-2 shadow-gray-400 bg-pink-400 shadow-md lg:self-center flex justify-center relative`}
              >
                <IoIosMusicalNote size={20} />
                <p className={`commuzpinkdate`}>2021</p>
                <ul className={`commuzpinkrole`}>
                  <li>Bass vocalist</li>
                  <li>Mix Engineer</li>
                </ul>
              </div>
              <div className="lg:h-px w-px ml-5 grow bg-pink-400  lg:self-center lg:mx-3 lg:my-0 my-3"></div>
              <div
                className={`aspect-square w-10 h-10 rounded-full bg-pink-400 border-white border-2 shadow-gray-400 items-center text-white shadow-md lg:self-center flex justify-center relative`}
              >
                <FaPenNib size={18} />
                <p className={`commuzpinkdate`}>2020</p>
                <ul className={`commuzpinkrole`}>
                  <li>Graphic Designer</li>
                  <li>Community manager</li>
                </ul>
              </div>
              <div className="lg:h-px w-px lg:ml-0 ml-5 grow bg-pink-400 lg:self-center lg:mx-3 lg:my-0 my-3" />

              <div
                className={`aspect-square w-10 h-10 rounded-full bg-pink-400 border-white border-2 shadow-gray-400 items-center text-white shadow-md lg:self-center flex justify-center relative`}
              >
                <MdGraphicEq size={20} />
                <p className={`commuzpinkdate`}>2019</p>
                <ul className={`commuzpinkrole`}>
                  <li>Sound engineer</li>
                </ul>
              </div>
            </div>

            <p class="mt-8 font-inter text-gray-900 dark:text-white text-sm z-50 lg:hidden flex">
              And my featured mixes from last year are :
            </p>

            <p class="mt-0 font-inter font-bold text-gray-900 dark:text-white text-sm z-50 lg:hidden flex">
              Feeling Good, Joga, Still Loving You, Le Rituel
            </p>
          </div>
        </div>
        <div className=" grow lg:w-1/3 h-full flex flex-col justify-between gap-5 py-10 select-none">
          <div className="h-1/4 w-full flex overflow-hidden rounded-2xl shadow-md">
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              url="https://soundcloud.com/jujgui/feeling-good?si=c425658d675349398a9ad64439e49e63&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            />
          </div>

          <div className="h-1/4 w-full flex overflow-hidden rounded-2xl shadow-md">
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              url="https://soundcloud.com/jujgui/joga?si=c425658d675349398a9ad64439e49e63&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            />
          </div>
          <div className="h-1/4 w-full flex overflow-hidden rounded-2xl shadow-md">
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              url="https://soundcloud.com/jujgui/still-loving-you?si=c425658d675349398a9ad64439e49e63&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            />
          </div>
          <div className="h-1/4 w-full flex overflow-hidden rounded-2xl shadow-md">
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              url="https://soundcloud.com/jujgui/le-rituel?si=c425658d675349398a9ad64439e49e63&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            />
          </div>
        </div>
      </div>
      <MixMasterAlbums />
    </div>
  );
};

const MixMasterAlbums = () => {
  const [album, setalbum] = useState(1);

  const changealbum = (right) => {
    var incr = right ? 1 : -1;
    var tempalbum = album + incr;

    if (tempalbum > 4) {
      tempalbum = 4;
    }
    if (tempalbum < 1) {
      tempalbum = 1;
    }
    setalbum(tempalbum);

    console.log(album);
  };

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => changealbum(true),
    onSwipedRight: (eventData) => changealbum(false),
  });

  return (
    <div className="flex lg:flex-row flex-col w-full h-auto lg:h-[700px] gap-20">
      <div
        className="flex lg:w-1/2 lg:h-5/6 flex-row justify-center self-center w-full"
        {...handlers}
      >
        <div
          className="hidden lg:flex h-14 border-2 border-white  aspect-square z-50 rounded-full mr-5 self-center cursor-pointer hover:shadow-md shadow-gray-800 active:scale-95 active:bg-gray-200 hover:border-sky-500 group hover:scale-105 ease-linear transition-all duration-[25ms] "
          onClick={() => changealbum(false)}
        >
          <BiSkipPrevious
            size={36}
            className="m-auto text-white group-hover:text-sky-500 group-hover:scale-105"
          />
        </div>
        <div className="lg:h-full h-[300px] lg:w-1/2 w-3/4 relative">
          <AlbumEmbed
            link={
              "https://open.spotify.com/embed/album/4boTthC3VNuTVeBVcmJAED?utm_source=generator"
            }
            currentalbum={album}
            albumid={1}
          />
          <AlbumEmbed
            link={
              "https://open.spotify.com/embed/album/75UGY5R9yFlqCxhYB91CLB?utm_source=generator"
            }
            currentalbum={album}
            albumid={2}
          />
          <AlbumEmbed
            link={
              "https://open.spotify.com/embed/album/4vHXsNBT0GHheB2SSNk7u1?utm_source=generator"
            }
            currentalbum={album}
            albumid={3}
          />
          <AlbumEmbed
            link={
              "https://open.spotify.com/embed/album/6ymtsIOKfk6TsKiHoGssp5?utm_source=generator"
            }
            currentalbum={album}
            albumid={4}
          />
        </div>

        <div
          className="hidden lg:flex h-14 border-2 border-white ml-5 aspect-square rounded-full z-50 self-center cursor-pointer hover:shadow-md shadow-gray-600 active:scale-95 active:bg-gray-200 hover:border-sky-500 group hover:scale-105 ease-linear transition-all duration-[25ms] "
          onClick={() => changealbum(true)}
        >
          <BiSkipNext
            size={36}
            className="m-auto text-white group-hover:text-sky-500 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="flex flex-col lg:w-1/2 h-full gap-10">
        <div className="w-full p-5 px-10 flex flex-row justify-between ">
          <AlbumDate
            date={"2022"}
            color={"bg-purple-600"}
            albumid={1}
            currentalbum={album}
          />
          <div className="h-px grow bg-gradient-to-r from-purple-600 to-red-500 self-center mx-3" />
          <AlbumDate
            date={"2021"}
            color={"bg-red-500"}
            albumid={2}
            currentalbum={album}
          />
          <div className="h-px grow bg-gradient-to-r from-red-500 to-blue-700 self-center mx-3" />
          <AlbumDate
            date={"2020"}
            color={"bg-blue-600"}
            albumid={3}
            currentalbum={album}
          />
          <div className="h-px grow bg-gradient-to-r from-blue-700 to-orange-400 self-center mx-3" />
          <AlbumDate
            date={"2019"}
            color={"bg-orange-600"}
            albumid={4}
            currentalbum={album}
          />
        </div>
        <AlbumDescriptionEnMem albumid={1} currentalbum={album} />
        <AlbumDescriptionNocesDo albumid={2} currentalbum={album} />
        <AlbumDescriptionContre albumid={3} currentalbum={album} />
        <AlbumDescriptionDesorien albumid={4} currentalbum={album} />
      </div>
    </div>
  );
};

const AlbumDate = ({ date, color, albumid, currentalbum }) => {
  return (
    <div
      className={`aspect-square ${
        albumid === currentalbum ? color : "bg-gray-300"
      } ${
        albumid === currentalbum ? " h-3" : "h-2"
      } rounded-full self-center flex justify-center relative`}
    >
      <p
        className={`absolute text-gray-400 font-mono mt-5 text-sm transition-all ${
          albumid === currentalbum ? "opacity-100" : "opacity-0"
        }`}
      >
        {date}
      </p>
    </div>
  );
};

const AlbumEmbed = ({ link, currentalbum, albumid }) => {
  var classname = "hidden";
  if (albumid === currentalbum) {
    classname =
      "w-full h-full absolute z-10 transition-all ease-linear duration-150";
  }
  if (albumid === currentalbum - 1) {
    classname =
      " absolute h-3/4 w-3/4 ml-[-40%] lg:mt-[25%] mt-[10%] z-0 blur-sm  transition-all ease-linear duration-150 pointer-events-none";
  }
  if (albumid === currentalbum + 1) {
    classname =
      "absolute h-3/4 w-3/4 z-0 blur-sm lg:mt-[25%] mt-[10%] ml-[65%] transition-all ease-linear duration-150 pointer-events-none";
  }

  return (
    <div className={classname}>
      <iframe
        src={link}
        className="rounded-xl  h-full w-full shadow-md shadow-gray-500 select-none"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        loading="lazy"
        title="album"
      ></iframe>
    </div>
  );
};

const AlbumDescriptionDesorien = ({ color, albumid, currentalbum }) => {
  return (
    <div
      className={`w-full grow flex flex-col p-3 ${
        currentalbum === albumid ? "flex" : "hidden"
      } ${
        currentalbum === albumid ? "opacity-100" : "opacity-0"
      } transition-all duration-150`}
    >
      <div className="w-full flex flex-row">
        <div className={`text-xl font-inter font-bold  text-orange-500`}>
          Désorientés
        </div>
      </div>
      <div className="text-sm">
        <p className="mt-6 font-inter mb-3">
          This was my first year in the play, and I joined as a sound engineer
          in charge of setting up recording equipment and live equipment for the
          musical and for rehearsals, as well as mixing the CD.
        </p>
        <p className="mt-5 font-inter mb-0">
          I absolutely loved the experience, and I knew I had to keep doing
          sound and mix engineering one way or the other in the following years,
          which prompted me to continue with the play and audition again the
          next year.
        </p>
      </div>
      <span className="mt-10 font-inter text-sm mb-10">
        My mixes were very rudimentary: I barely discovered the concept of gain
        staging, EQ and stereo placement before getting the album out. I mixed
        my tracks on reaper with stock plugins. Nonetheless, I fell in love with
        mixing and audio post-production. My tracks are sloppy but I am proud as
        they were the start of my journey in mixing.
      </span>
      <ul className="flex  lg:flex-wrap lg:flex-row flex-col justify-evenly list-disc items-center text-orange-500 text-sm dark:text-white ">
        <li className="font-inter font-bold">Ali Babouche</li>
        <li className="font-inter font-bold">Le bazar</li>
        <li className="font-inter font-bold">
          La fête au palais (cover of Aladin)
        </li>
      </ul>
    </div>
  );
};

const AlbumDescriptionEnMem = ({ color, albumid, currentalbum }) => {
  return (
    <div
      className={`w-full grow flex flex-col p-3 ${
        currentalbum === albumid ? "flex" : "hidden"
      } ${
        currentalbum === albumid ? "opacity-100" : "opacity-0"
      } transition-all duration-150`}
    >
      <div className="w-full flex flex-row">
        <div className={`text-xl font-inter font-bold  text-purple-500`}>
          En memoria
        </div>
      </div>
      <div className="text-sm">
        <p className="mt-6 font-inter mb-3">
          For this final year as a member of the musical, I was choir lead with
          the soprano from the previous year. My responisibilities included:
        </p>

        <ul className="list-disc ml-6">
          <li className="font-inter font-bold">
            Overseeing the performance of the SATB choir I was in the previous
            year
          </li>
          <li className="font-inter font-bold">
            Vocal coaching for the actors who sang on stage, including vocal
            warmups and technical sessions.
          </li>
          <li className="font-inter font-bold">
            Arrangement of vocal harmonies for the original compositions and
            orchestral covers. I really leaned into deepening my knowledge of
            music theory and solfege.
          </li>
        </ul>
        <p className="mt-10 font-inter mb-8">
          As with previous years, I helped in setting up the live performance
          sound-material wise, and with mixing the final cd for the screenplay
          and the spotify album. This was the year I truly came into my own when
          mixing the songs for this album on ableton, as I knew the DAW and I
          had gained confidence about mixing techniques and my own capabilities.
          I had learned so much the previous years and am proud of my mixes,
          which are:
        </p>
        <ul className="flex lg:flex-wrap lg:flex-row flex-col justify-evenly list-disc items-center text-purple-500 dark:text-white ">
          <li className="font-inter font-bold">Treasure</li>
          <li className="font-inter font-bold">Joga</li>
          <li className="font-inter font-bold">Le rituel</li>
          <li className="font-inter font-bold">Feeling Good</li>
          <li className="font-inter font-bold">September</li>
          <li className="font-inter font-bold">La légende</li>
        </ul>
      </div>
      <span className="mt-10 font-inter">
        As per usual, I was also in charge of distributing the album on spotify
        and for the first time in charge of mastering the whole album.
      </span>
    </div>
  );
};

const AlbumDescriptionNocesDo = ({ color, albumid, currentalbum }) => {
  return (
    <div
      className={`w-full grow flex flex-col p-3 ${
        currentalbum === albumid ? "flex" : "hidden"
      } ${
        currentalbum === albumid ? "opacity-100" : "opacity-0"
      } transition-all duration-150`}
    >
      <div className="w-full flex flex-row">
        <div className={`text-xl font-inter font-bold  text-red-500`}>
          Noces D'opium
        </div>
      </div>
      <div className="text-sm">
        <p className="mt-6 font-inter mb-3">
          The third year of the musical was set in 1800s china during the opium
          wars. I joined the play as only bass vocalist of the choir: I
          performed for all musical pieces. If you hear a low voice in the
          album, it's probably me. This is the year I learned music theory and
          solfege.
        </p>
        <p className="mt-5 font-inter mb-0">
          As with previous years, I helped in setting up the live performance
          sound-material wise, and with mixing the final cd for the screenplay
          and the spotify album. :
        </p>

        <p className="mt-3 font-inter mb-8">
          This year, we decided to use ableton to mix the final album, as that
          was what the sound team head was most comfortable with, and it quickly
          became my favourite DAW. I learned to transpose what I knew on FL
          studio to it and explored new venues for mixing :
        </p>
        <ul className="list-disc text-gray-900 dark:text-white ">
          <li className="font-inter font-bold">
            Multi-band compression and side-chaining
          </li>
          <li className="font-inter font-bold">
            Stereo widening and narrowing for spatial sound
          </li>
          <li className="font-inter font-bold">
            Use of saturation and parallel saturation to thicken and liven mixes
          </li>
          <li className="font-inter font-bold">
            Master bus effect staging for coherent mixes
          </li>
        </ul>
      </div>
      <span className="mt-6 font-inter text-sm mb-6">
        As per usual, I was also in charge of distributing the album on spotify.
        My contributions as mix engineer to the album were:
      </span>
      <ul className="flex lg:flex-wrap lg:flex-row flex-col justify-evenly list-disc items-center text-red-500 text-sm dark:text-white ">
        <li className="font-inter font-bold">Good Morning</li>
        <li className="font-inter font-bold">Eternal Youth</li>
        <li className="font-inter font-bold">I love you</li>
        <li className="font-inter font-bold">Tango Amoroso</li>
      </ul>
    </div>
  );
};

const AlbumDescriptionContre = ({ color, albumid, currentalbum }) => {
  return (
    <div
      className={`w-full grow flex flex-col p-3 ${
        currentalbum === albumid ? "flex" : "hidden"
      } ${
        currentalbum === albumid ? "opacity-100" : "opacity-0"
      } transition-all duration-150`}
    >
      <div className="w-full flex flex-row">
        <div className={`text-xl font-inter font-bold  text-blue-500`}>
          Contretemps
        </div>
      </div>
      <div className="text-sm">
        <p className="mt-6 font-inter mb-3">
          The second year of the musical was set in Versailles at the court of
          Louis XIV. I was recruited as community manager and graphic designer
          for the team. My responsibilities included:
        </p>
        <ul className="list-disc text-gray-900 dark:text-white ">
          <li className="font-inter font-bold">
            Creating social media content for the teams : the official poster,
            trailer videos, audition advertising media were all my creation
          </li>
          <li className="font-inter font-bold">
            Defining and orienting the artistic identity of the play
          </li>
        </ul>
        <p className="mt-5 font-inter mb-0">
          Since I had experience with the play already, I helped arrange some
          original compositions, notably for hip-hop vocals : La cour dérape. I
          also help set up recording equipment during rehearsals and on the day
          of the play, and helped with mixing the final album.
        </p>

        <p className="mt-5 font-inter mb-0">
          This year my mixes were still not great... but I was starting to
          understand key concepts about mixing and mastering : frequency
          allocation, dynamic EQing and compression for coherence. Reverb and
          delay for space. I started using bus track in my mixes and had a
          rudimentary effect chain on the master bus for the first time. I mixed
          my tracks on Fruity Loops Studio this year and kept using that for a
          few months before moving on to Ableton.
        </p>

        <p className="mt-3 font-inter mb-8">
          I was also in charge of distributing the album on spotify for the
          first time. My contributions as mix engineer to the album were:{" "}
        </p>

        <ul className="flex lg:flex-wrap lg:flex-row flex-col justify-evenly list-disc items-center text-blue-500 text-sm dark:text-white ">
          <li className="font-inter font-bold">Te Deum</li>
          <li className="font-inter font-bold">A contretemps</li>
          <li className="font-inter font-bold">La cour dérape</li>
        </ul>
      </div>
    </div>
  );
};
