import { FaUserGraduate } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { GiGuitarBassHead } from "react-icons/gi";
import { SidebarIcon } from "./components/sidebaricon";
import { useEffect, useRef, useState, useMemo } from "react";
import {HeroSection} from './sections/Hero'
import{MusicSection} from './sections/Music'

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [academiaY, setacademiaY] = useState(null);
  const [musicY, setmusicY] = useState(null);
  const [visible, setvisible] = useState("1");

  const handlescroll = () => {
    setScrollPosition(window.scrollY + window.innerHeight / 2);
  };

  useEffect(() => {
    if (visible != "1" && scrollPosition < academiaY) {
      setvisible("1");
    }
    if (
      scrollPosition > academiaY &&
      visible != "2" &&
      scrollPosition < musicY
    ) {
      setvisible("2");
      console.log("visible");
    }
    if (scrollPosition > musicY && visible != "3") {
      setvisible("3");
    }
  }, [scrollPosition]);

  useEffect(() => {
    document.addEventListener("scroll", () => handlescroll());

    const root = document.getElementById("root");
    const academia = document.getElementById("2");
    const music = document.getElementById("3");

    setacademiaY(
      academia.getBoundingClientRect().top - root.getBoundingClientRect().top
    );
    setmusicY(
      music.getBoundingClientRect().top - root.getBoundingClientRect().top
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-row lg:gap-20 lg:p-20 p-0" id="root">
      <div className="w-grow h-auto flex flex-col gap-40 ">
        <div className="min-h-[calc(100vh-10rem)] lg:px-16 px-8" id="1">
          <HeroSection/>
        </div>
        <div className="show min-h-[calc(100vh-10rem)]  lg:px-16 px-8" id="2"></div>
        <div className="min-h-[calc(100vh-10rem)]  lg:px-16 px-8" id="3">
          <MusicSection/>
        </div>
      </div>

      <div className="h-[calc(100vh-10rem)] w-[30%] sticky top-20 bottom-20 lg:flex flex-col content-between justify-between py-20 px-10 hidden">
        <SidebarIcon
          icon={<FaUserGraduate size={20}></FaUserGraduate>}
          aimid="root"
          scrollid = '1'
          visible={visible}
          title = {"About me"}
          description = "Get to know me! Here you'll find out about who I am, my interest for music, MIR, research, and more. Reach out!"
        />
        <div className="w-12 grow flex flex-row justify-center">
          <div className="w-[1px] h-3/4 bg-gradient-to-t from-teal-200 to-blue-400 self-center" />
        </div>
        <SidebarIcon
          icon={<HiAcademicCap size={20}></HiAcademicCap>}
          aimid="2"
          scrollid = "2"
          visible={visible}
          title = {"Writing samples"}
          description = "Over the course of my studies I've written reports and theses for subjects ranging from acoustics to MIR. Come discover my best work!"
        />
        <div className="w-12 grow flex flex-row justify-center">
          <div className="w-[1px] h-3/4 bg-gradient-to-t from-teal-200 to-blue-400 self-center" />
        </div>
        <SidebarIcon
          icon={<GiGuitarBassHead size={20}></GiGuitarBassHead>}
          aimid="3"
          scrollid="3"
          visible={visible}
          title = {"My Music"}
          description = "You could say I'm a music aficionado. Here you'll find my music, from composition and arrangement to mixing and mastering. Find out why I love music!"
        />
      </div>
    </div>
  );
}

export default App;
