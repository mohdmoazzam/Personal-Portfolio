import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Experience from "./pages/Experience/Experience";
import Project from "./pages/Project/Project";
import Techstack from "./pages/Techstack/Techstack";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./components/MobileNav/MobileNav";
import { Slide } from "react-awesome-reveal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Project />
          <Experience />
          <Contact />
        </div>
        <div className="footer pb-6 ms-3">
          <Slide direction="up">
            <h6 className="text-center"> Made With ❤️ Moazzam &copy; 2024</h6>
          </Slide>
        </div>
      </div>
      <ScrollToTop smooth color="#f29f67" style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }} />
    </>
  );
}

export default App;
