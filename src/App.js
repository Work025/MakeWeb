import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Main/Main";
import Div from "./Pages/DIV/Div";
import Lesson from "./Pages/Lesson/Lesson";
import Footer from "./Components/Footer/Footer";
import { LanguageProvider } from "./Servic/LanguageContent"; // ✅ Servic papkaga mos
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/div" element={<Div />} />
          <Route path="/lesson" element={<Lesson />} />
        </Routes>
        <Footer />
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
