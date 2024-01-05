import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import { useState } from "react";

function App() {
  const [rolln, setRolln] = useState("");
  const [data, setData] = useState([]);
  function handleChange(event) {
    setRolln(event.target.value);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home rolln={rolln} handleChange={handleChange} setData={setData} />} />
        <Route path="/result" element={<Result data={data} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
