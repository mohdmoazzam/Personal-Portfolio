import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <>
      <ToastContainer theme={theme} position="bottom-right" />
      <Home />
    </>
  );
}

export default App;
