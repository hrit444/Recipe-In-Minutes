import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {

  return (
    <div className="bg-[#fbf6ec«] w-screen h-screen pt-[16vw] lg:pt-[5vw] ">
      <Navbar/>
      <div className=" ">
        <MainRoutes />
      </div>
    </div>
  )
}

export default App
