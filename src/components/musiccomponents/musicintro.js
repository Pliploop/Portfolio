import { svg1, svg2, svg3 } from "../../components/svg/svg";
import disc from "../../content/images/Disc.png";
import guitar from "../../content/images/Guitar.png";
import pc from "../../content/images/PC.png";

const MusicIntro = () => {
    return (
      <div className=" flex lg:flex-row flex-col lg:mb-20">
        <div className=" lg:w-[27%] w-full lg:px-10 font-inter lg:text-sm text-xs lg:mb-0 mb-10">
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
        <div className=" grow flex flex-col justify-between lg:p-10">
          <div className="h-auto  flex flex-row justify-start lg:mb-0 mb-20">
            <div className="w-1/4 aspect-square group lg:flex absolute lg:relative">
              <div className="absolute mt-[-120px] lg:mt-[-70px] lg:ml-[-10px] ml-[-150px] group-hover:animate-pulse lg:scale-[120%] scale-100 lg:opacity-60 opacity-20">
                {svg1}
              </div>
              <img
                className="absolute mt-[-0px] ml-[70px] lg:scale-[70%] scale-[40%] lg:flex hidden"
                src={guitar}
                alt="comp-prod"
              />
            </div>
            <div className="flex flex-col grow justify-start lg:py-10 lg:px-6">
              <h2 className="lg:text-xl text-lg font-inter font-bold z-40 mb-3 text-purple-500">
                Performance
              </h2>
              <ul className="lg:ml-14 z-40 font-mono lg:text-sm text-xs">
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
              <h2 className="lg:text-xl text-lg text-teal-500 font-inter font-bold lg:justify-end flex z-40 mb-5">
                Composition & Production
              </h2>
              <ul className="lg:mr-14 z-40 font-mono lg:text-sm text-xs">
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
              <div className="absolute mt-[-70px] lg:ml-[-190px] ml-[-100px] group-hover:animate-pulse lg:scale-[150%] scale-[75%] lg:opacity-50 opacity-50 hidden lg:flex">
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
              <div className="absolute mt-[-70px] lg:ml-[0px] ml-[-200px] hover:animate-pulse lg:scale-[150%] opacity-50 lg:opacity-50 ">
                {svg3}
              </div>
              <img
                className="absolute mt-[-0px] ml-[-0px] lg:scale-[60%] scale-[25%] lg:ml-10 lg:mt-10 lg:flex hidden"
                src={pc}
                alt="comp-prod"
              />
            </div>
            <div className="flex flex-col  grow justify-start lg:p-10 py-10">
              <h2 className="lg:text-xl text-lg font-inter font-bold z-40 mb-5 text-sky-500">
                Mixing & Mastering
              </h2>
              <ul className="lg:ml-14 z-40 font-mono lg:text-sm text-xs">
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

  export {MusicIntro}