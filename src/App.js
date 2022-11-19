import { FaUserGraduate } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { GiGuitarBassHead } from "react-icons/gi";
import { SidebarIcon } from "./components/sidebaricon";
import { useEffect, useState } from "react";
import { HeroSection } from "./sections/Hero";
import { MusicSection } from "./sections/Music";
import { AcademiaSection } from "./sections/Academia";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [academiaY, setacademiaY] = useState(null);
  const [musicY, setmusicY] = useState(null);
  const [visible, setvisible] = useState("1");

  useEffect(() => {
    document.title = "Julien Guinot - Portfolio";
  });

  const handlescroll = () => {
    setScrollPosition(window.scrollY + window.innerHeight / 2);
  };

  useEffect(() => {
    if (visible !== "1" && scrollPosition < academiaY) {
      setvisible("1");
    }
    if (
      scrollPosition > academiaY &&
      visible !== "2" &&
      scrollPosition < musicY
    ) {
      setvisible("2");
      console.log("visible");
    }
    if (scrollPosition > musicY && visible !== "3") {
      setvisible("3");
    }
  }, [scrollPosition, academiaY, musicY, visible]);

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
    <div
      className="flex lg:flex-row flex-col lg:gap-20 md:p-10 lg:p-20 p-0"
      id="root"
    >
      <div className="grow h-auto flex flex-col gap-20 lg:mt-0 mt-20">
        <div className="min-h-[calc(100vh-10rem)] lg:px-16 px-8" id="1">
          <HeroSection />
        </div>
        <div className=" lg:px-16 px-8 pt-10" id="2">
          <AcademiaSection />
        </div>
        <div className="min-h-[calc(100vh-10rem)]  lg:px-16 px-8" id="3">
          <MusicSection />
        </div>
      </div>

      {/* <div className="h-[calc(100vh-10rem)] lg:w-[60%] sticky top-20 bottom-20 lg:flex flex-col content-between justify-between py-20 px-10 hidden">
        <SidebarIcon
          icon={<FaUserGraduate size={20}></FaUserGraduate>}
          aimid="root"
          scrollid="1"
          visible={visible}
          title={"About me"}
          description="Get to know me! Here you'll find out about who I am, my interest for music, MIR, research, and more. Reach out!"
        />
        <div className="w-12 grow flex flex-row justify-center">
          <div className="w-[1px] h-3/4 bg-gradient-to-t from-teal-200 to-blue-400 self-center" />
        </div>
        <SidebarIcon
          icon={<HiAcademicCap size={20}></HiAcademicCap>}
          aimid="2"
          scrollid="2"
          visible={visible}
          title={"Writing samples"}
          description="Over the course of my studies I've written reports and theses for subjects ranging from acoustics to MIR. Come discover my best work!"
        />
        <div className="w-12 grow flex flex-row justify-center">
          <div className="w-[1px] h-3/4 bg-gradient-to-t from-teal-200 to-blue-400 self-center" />
        </div>
        <SidebarIcon
          icon={<GiGuitarBassHead size={20}></GiGuitarBassHead>}
          aimid="3"
          scrollid="3"
          visible={visible}
          title={"My Music"}
          description="You could say I'm a music aficionado. Here you'll find my music, from composition and arrangement to mixing and mastering. Find out why I love music!"
        />
      </div> */}
      <BigNav visible={visible} />
      <SmallNav visible={visible} />
    </div>
  );
}

const BigNav = ({ visible }) => {
  return (
    <div className="h-[calc(100vh-10rem)] lg:w-[100%] top-20 bottom-20 sticky lg:flex flex-col content-between justify-between py-20 px-10 hidden">
      <SidebarIcon
        icon={<FaUserGraduate size={20}></FaUserGraduate>}
        aimid="root"
        scrollid="1"
        visible={visible}
        title={"About me"}
        description="Get to know me! Here you'll find out about who I am, my interest for music, MIR, research, and more. Reach out!"
      />
      <div className="w-12 grow flex flex-row justify-center">
        <div className="w-[1px] h-3/4 bg-gradient-to-t from-teal-200 to-blue-400 self-center" />
      </div>
      <SidebarIcon
        icon={<HiAcademicCap size={20}></HiAcademicCap>}
        aimid="2"
        scrollid="2"
        visible={visible}
        title={"Writing samples"}
        description="Over the course of my studies I've written reports and theses for subjects ranging from acoustics to MIR. Come discover my best work!"
      />
      <div className="w-12 grow flex flex-row justify-center">
        <div className="w-[1px] h-3/4 bg-gradient-to-t from-teal-200 to-blue-400 self-center" />
      </div>
      <SidebarIcon
        icon={<GiGuitarBassHead size={20}></GiGuitarBassHead>}
        aimid="3"
        scrollid="3"
        visible={visible}
        title={"My Music"}
        description="You could say I'm a music aficionado. Here you'll find my music, from composition and arrangement to mixing and mastering. Find out why I love music!"
      />
    </div>
  );
};

const SmallNav = (visible) => {
  return (
    <nav className="bg-white w-full py-2.5 fixed shadow-lg shadow-gray-200 border-b z-50 border-gray-200 lg:hidden">
      <div className="flex flex-row justify-between py-3 px-5">
        <SidebarIcon
          icon={<FaUserGraduate size={20}></FaUserGraduate>}
          aimid="root"
          scrollid="1"
          visible={visible}
          title={""}
        />
        <div className=" grow flex flex-row justify-center items-center mx-3">
          <div className="grow h-[1px] bg-gradient-to-r from-teal-200 to-blue-400" />
        </div>
        <SidebarIcon
          icon={<HiAcademicCap size={20}></HiAcademicCap>}
          aimid="2"
          scrollid="2"
          visible={visible}
          title={""}
        />
        <div className="grow flex flex-row justify-center items-center mx-3">
          <div className="grow h-[1px] bg-gradient-to-r from-teal-200 to-blue-400" />
        </div>
        <SidebarIcon
          icon={<GiGuitarBassHead size={20}></GiGuitarBassHead>}
          aimid="3"
          scrollid="3"
          visible={visible}
          title={""}
        />
      </div>
    </nav>
  );
};

export default App;
