import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollProvider } from "./context/ScrollContext";
import Layout from "./components/Layout";
import Scene3D from "./components/Scene3D";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollProvider>
        <Scene3D />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </ScrollProvider>
    </BrowserRouter>
  );
}

export default App;
