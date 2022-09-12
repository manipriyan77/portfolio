// import "./App.css";
import Header from "./Pages/Header/Header";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Project";
import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./Contexts/theme";
import { ThemeProvider } from "./Contexts/theme";
import Skills from "./Pages/Skills/Skills";
import Contact from "./Pages/Contact/Contact";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Footer from "./Pages/Footer/Footer";

function App() {
  const [{ themeName }] = useContext(ThemeContext);
  return (
    <div id="top" className={`${themeName} app`}>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
