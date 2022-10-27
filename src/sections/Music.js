import image from "../content/images/propic.jpg";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";

import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";

import SectionHeader from "../components/header";
import { svg1, svg2, svg3 } from "../components/svg/svg";
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
      </div>
    </div>
  );
}

const MusicHeader = ({ text }) => {
  return (
    <div className="mb-16">
      <SectionHeader text={text} />
    </div>
  );
};

const MusicIntro = () => {
  return (
    <div className=" flex lg:flex-row flex-col gap-10">
      <div className=" w-[27%] p-10">lorem ipsum</div>
      <div className=" grow flex flex-col justify-between">
        <div className="h-auto  flex flex-row justify-start">
          <div className=" w-1/4 aspect-square group">
            <div className="absolute mt-[-70px] ml-[-10px] group-hover:animate-pulse lg:scale-100 scale-50">
              {svg1}
            </div>
            <img
              className="absolute mt-[-120px] ml-[-20px] lg:scale-[40%] scale-[25%]"
              src={guitar}
              alt="comp-prod"
            />
          </div>
          <div className="flex flex-col  grow justify-start p-10">
            <h2 className="lg:text-xl text-lg font-inter font-bold z-50 mb-3">
              Performance
            </h2>
            <p className="ml-14 font-mono">Hello</p>
          </div>
        </div>
        <div className="h-auto  flex flex-row justify-end">
          <div className="flex flex-col grow justify-start p-10">
            <h2 className="text-xl font-inter font-bold justify-end flex z-50 mb-5">
              Composition & Production
            </h2>
            <p className="flex justify-end mr-20 z-50 font-mono">Hello</p>
          </div>
          <div className=" w-1/4 aspect-square group">
            <div className="absolute mt-[-70px] ml-[-150px] group-hover:animate-pulse lg:scale-100 scale-50">
              {svg2}
            </div>
            <img
              className="absolute mt-[-0px] ml-[-100px] lg:scale-[40%] scale-[25%]"
              src={disc}
              alt="comp-prod"
            />
          </div>
        </div>
        <div className="h-auto  flex flex-row justify-start">
          <div className=" w-1/4 aspect-square">
            <div className="absolute mt-[-70px] ml-[0px] hover:animate-pulse lg:scale-100 scale-50">
              {svg3}
            </div>
            <img
              className="absolute mt-[-0px] ml-[-0px] lg:scale-[40%] scale-[25%]"
              src={pc}
              alt="comp-prod"
            />
          </div>
          <div className="flex flex-col  grow justify-start p-10">
            <h2 className="lg:text-xl text-lg font-inter font-bold z-50 mb-5">
              Mixing & Mastering
            </h2>
            <p className="ml-20 z-50 font-mono">Hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const MusicFeatured = () => {
  return (
    <div className=" flex lg:flex-col flex-col gap-10 w-full">
      <div className="flex flex-row w-full h-[300px] gap-5">
        <div className="flex flex-col w-1/2 show h-full"></div>
        <div className="show w-1/2 h-full"></div>
      </div>
      <div className="flex flex-row w-full h-56 gap-5">
        <div className="flex flex-col w-1/2 show h-full"></div>
        <div className="flex flex-col w-1/2 show h-full"></div>
      </div>
    </div>
  );
};

const MusicMixMaster = () => {
  return (
    <div className=" flex lg:flex-col flex-col gap-10 w-full">
      <div className="flex lg:flex-row flex-col w-full h-auto gap-20">
        <div className="flex flex-col lg:w-2/3 show h-full"></div>
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
    onSwipedRight: (eventData) => changealbum(true),
  });

  return (
    <div className="flex lg:flex-row flex-col w-full h-[750px] lg:h-[450px] gap-20">
      <div
        className="flex lg:w-1/2 h-full flex-row justify-center"
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
        <div className="h-full lg:w-1/2 w-2/3 relative">
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
          className="hidden lg:flex h-14 border-2 border-white ml-5 aspect-square rounded-full z-50 self-center cursor-pointer hover:shadow-md shadow-gray-800 active:scale-95 active:bg-gray-200 hover:border-sky-500 group hover:scale-105 ease-linear transition-all duration-[25ms] "
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
          <AlbumDate date={"2022"} color = {"bg-purple-600"} albumid = {1} currentalbum = {album} />
          <div className="h-px grow bg-gradient-to-r from-purple-600 to-red-500 self-center mx-3" />
          <AlbumDate date={"2021"} color = {"bg-red-500"} albumid = {2} currentalbum = {album} />
          <div className="h-px grow bg-gradient-to-r from-red-500 to-blue-700 self-center mx-3" />
          <AlbumDate date={"2020"} color = {"bg-blue-600"} albumid = {3} currentalbum = {album} />
          <div className="h-px grow bg-gradient-to-r from-blue-700 to-orange-400 self-center mx-3" />
          <AlbumDate date={"2019"} color = {"bg-orange-600"} albumid = {4} currentalbum = {album} />
        </div>
        <div className="w-full grow show" />
      </div>
    </div>
  );
};

const AlbumDate = ({date, color, albumid, currentalbum}) => {
  return (
    <div className={`aspect-square ${albumid === currentalbum ? color : 'bg-gray-300'} ${albumid === currentalbum ? ' h-3' : 'h-2'} rounded-full self-center flex justify-center relative`}>
      <p className={`absolute text-gray-400 font-mono mt-5 text-sm transition-all ${albumid === currentalbum ? 'opacity-100' : 'opacity-0'}`}>{date}</p>
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
      " absolute h-3/4 w-3/4 ml-[-40%] lg:mt-[25%] mt-[10%] z-0 blur-sm  transition-all ease-linear duration-150";
  }
  if (albumid === currentalbum + 1) {
    classname =
      "absolute h-3/4 w-3/4 z-0 blur-sm lg:mt-[25%] mt-[10%] ml-[65%] transition-all ease-linear duration-150";
  }

  return (
    <div className={classname}>
      <iframe
        src={link}
        className="rounded-xl  h-full w-full shadow-md shadow-gray-800 select-none"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        loading="lazy"
        title="album"
      ></iframe>
    </div>
  );
};
