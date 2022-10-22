import StickyBox from "react-sticky-box";

function App() {

  const scrollto = (id) => {
    console.log("scrolling to "+ id)
      let element = document.getElementById(id)
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
      <div className="min-h-screen flex flex-row gap-20 p-20">

        <div className="w-2/3 h-auto flex flex-col gap-40">
          <div className="show h-[calc(100vh-10rem)]" id="1"></div>
          <div className="show h-[calc(100vh-10rem)]" id="2"></div>
          <div className="show h-[calc(100vh-10rem)]" id="3"></div>

        </div>

        <div className="h-[calc(100vh-10rem)] grow show sticky top-20 bottom-20 flex flex-col content-between justify-between p-20">
            <div className="w-full h-1/5 show flex align-middle items-center justify-center hover:bg-gray-100" onClick={() => {scrollto("1")}}>1</div>
            <div className="w-full h-1/5 show flex align-middle items-center justify-center hover:bg-gray-100" onClick={() => {scrollto("2")}}>2</div>        
            <div className="w-full h-1/5 show flex align-middle items-center justify-center hover:bg-gray-100" onClick={() => {scrollto("3")}}>3</div>



        </div>
      </div>
  );
}

export default App;
