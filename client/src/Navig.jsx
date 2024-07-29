import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import MotusGame from "./MotusGame";

function Navig() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Motus" element={<MotusGame />} />
    </Routes>
  );
}

export default Navig;
