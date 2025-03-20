import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectIndex from "./pages/projects/ProjectIndex";
import Designs3d from "./pages/projects/Designs3d";
import CompletedProjects from "./pages/projects/CompletedProjects";
import OngoingProjects from "./pages/projects/OngoingProjects";
import DesignsIndex from "./pages/designs/DesignsIndex";
import SingleStoreyHouses from "./pages/designs/SingleStoreyHouses";
import Footer from "./components/Footer";
import Property from "./pages/property";
import NavbarExample from "./components/nav";
import Navbar from "./components/nav-bar";
import { useLocation } from "react-router-dom";


function App() {
  const location = useLocation();


  return (
    <>
      {/* <NavbarExample /> */}
      <Navbar />  

    
      {
        location.pathname === '/' ? null : <div className="h-20 " />
      }

      
      <Routes>
        {/* Home page is independent and not wrapped in .root */}
        <Route path="/" element={<Home />} />

        {/* All other pages are wrapped in .root */}
        <Route
          path="about"
          element={
            <div className="root">
              <About />
            </div>
          }
        />
        <Route
          path="projects"
          element={
            <div className="root">
              <ProjectIndex />
            </div>
          }
        >
          <Route path="completed-project" element={<CompletedProjects />} />
          <Route path="designs3d" element={<Designs3d />} />
          <Route path="ongoing-project" element={<OngoingProjects />} />
        </Route>
        <Route
          path="designs"
          element={
            <div className="root">
              <DesignsIndex />
            </div>
          }
        >
          <Route path="single-storey-houses" element={<SingleStoreyHouses />} />
        </Route>
        <Route
          path="property"
          element={
            <div className="root">
              <Property />
            </div>
          }
        />
        <Route
          path="*"
          element={
            <div className="root">
              <div>Not Found</div>
            </div>
          }
        />
      </Routes>

      {/* Footer is outside .root to avoid max-width constraints */}
     
        <Footer />
      
    </>
  );
}

export default App;