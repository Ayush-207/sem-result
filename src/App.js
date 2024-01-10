import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Result from "./pages/Result";
import Rollno from './pages/Rollno';
import Stats from './pages/Stats';
import { useState } from "react";
import CourseStatsInput from "./pages/CourseStatsInput.js";
import OverallStatsInput from "./pages/OverallStatsInput.js";
import Rank from './pages/Rank.js';

function App() {
  const [page, setPage] = useState('/getcoursestats');
  const [data, setData] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setPage={setPage} />} />
        <Route path="/getresult" element={<Rollno setData={setData} page={page} />} />
        <Route path="/getcoursestats" element={<CourseStatsInput setData={setData} page={page} setpage={setPage} />} />
        <Route path="/getoverallstats" element={<OverallStatsInput setData={setData} page={page} setpage={setPage} />} />
        <Route path="/result" element={<Result data={data} />} />
        <Route path='/stats' element={<Stats data={data} page={page} />} />
        <Route path="/getrank" element={<Rank />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
