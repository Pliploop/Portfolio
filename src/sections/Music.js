import { GrDown } from "react-icons/gr";
import SectionHeader from "../components/header";
import ReactPlayer from "react-player";
import { MusicIntro } from "../components/musiccomponents/musicintro";
import { MusicArranged } from "../components/musiccomponents/musicarranged";
import { MusicMixMaster } from "../components/musiccomponents/musicmixmaster";

const scrollto = (id) => {
  console.log("scrolling to " + id);
  let element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
};

const MusicNav = () => {
  return (
    <nav class="bg-white backdrop-filter backdrop-blur-md bg-opacity-70 px-10 py-5 sticky grow z-50 pt-5 top-0 left-0 border-b border-gray-200 mb-20 hidden lg:flex">
      <div class="container flex flex-wrap items-center justify-between mx-auto font-inter">
        <div
          onClick={() => {
            scrollto("3");
          }}
          class="flex items-center cursor-pointer"
        >
          <span class="self-center text-xl font-semibold whitespace-nowrap hover:text-blue-500 active:scale-95 transition-all  duration-[20ms] active:text-blue-700">
            My Music
          </span>
        </div>

        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
            <li>
              <div
                class="subnav-tag"
                onClick={() => {
                  scrollto("featured");
                }}
              >
                Featured
              </div>
            </li>
            <li>
              <div
                class="subnav-tag"
                onClick={() => {
                  scrollto("mixmaster");
                }}
              >
                Mix-mastering
              </div>
            </li>
            <li>
              <div
                class="subnav-tag"
                onClick={() => {
                  scrollto("arrangements");
                }}
              >
                Arrangements
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export function MusicSection() {
  return (
    <div className="w-full h-full pt-16">
      {/* <div className="flex flex-col mb-40 pt-16"> */}
      <MusicHeader text="My Music" />
      <MusicNav />
      <MusicIntro />
      {/* </div> */}
      <div className="flex flex-col w-full  mb-20">
      <div
          className="absolute show -mt-40 h-10 w-10 invisible"
          id="featured"
        />
        <MusicHeader text={"Featured"} />
        <MusicFeatured />
      </div>
      <div className="flex flex-col w-full  mb-20">
      <div
          className="absolute show -mt-40 h-10 w-10 invisible"
          id="mixmaster"
        />
        <MusicHeader text={"Mix & Mastering"} />
        <MusicMixMaster />
      </div>
      <div className="flex flex-col w-full  mb-20">
        <div
          className="absolute show -mt-40 h-10 w-10 invisible"
          id="arrangements"
        />
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
    <div className=" flex lg:flex-col flex-col gap-14 w-full lg:px-10">
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
              <p className="text-gray-600 font-mono z-40" id="readmore">
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
                    
                    height={"100%"}
                    width={"100%"}
                    url="https://soundcloud.com/jujgui/likethat-remastered"
                  />
                </div>
                <div className="flex flex-col lg:w-2/3">
                  <div className="flex flex-row justify-items-start gap-3 flex-wrap mb-6">
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
                  <div className="flex flex-row justify-items-start gap-3 mb-6 flex-wrap">
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
