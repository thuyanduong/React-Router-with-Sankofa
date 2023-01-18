import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import RobotsPage from "./RobotsPage";
import ShowPage from "./ShowPage";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/robots" element={<RobotsPage/>}/>
        <Route path="/robots/:robotId" element={<ShowPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
