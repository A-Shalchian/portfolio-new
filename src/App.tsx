import { Navbar } from "./homeSections/Navbar";
import { Home } from "./pages/Home";
import { Projects } from "./projectSections/Projects";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
