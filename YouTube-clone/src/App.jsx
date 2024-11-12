import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Pages/Home/home.jsx";
import Video from "./Pages/Video/Video.jsx";
import { useState } from "react";

function App() {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
