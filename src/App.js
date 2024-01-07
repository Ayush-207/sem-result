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
  const [rolln, setRolln] = useState("");
  const [branchcode, setBranchcode] = useState("");
  const [coursecode, setCoursecode] = useState("");
  const [page, setPage] = useState('/getcoursestats');
  const [data, setData] = useState([]);
  function handleChangeRollno(event) {
    setRolln(event.target.value);
  }
  function handleChangeBranchcode(event) {
    setBranchcode(event.target.value);
  }
  function handleChangeCoursecode(event) {
    setCoursecode(event.target.value);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getresult" element={<Rollno rolln={rolln} handleChange={handleChangeRollno} setData={setData} />} />
        <Route path="/getcoursestats" element={<CourseStatsInput coursecode={coursecode} branchcode={branchcode} handleChange1={handleChangeCoursecode} handleChange2={handleChangeBranchcode} setData={setData} page={page} setpage={setPage} />} />
        <Route path="/getoverallstats" element={<OverallStatsInput branchcode={branchcode} handleChange2={handleChangeBranchcode} setData={setData} page={page} setpage={setPage} />} />
        <Route path="/result" element={<Result data={data} />} />
        <Route path='/stats' element={<Stats data={data} page={page} />} />
        <Route path="/get_rank" element={<Rank branchcode={branchcode} handleChange2={handleChangeBranchcode} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
