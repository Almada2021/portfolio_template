import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import DrawerAppBar from "./components/Navbar";
import Proyects from "./pages/Proyects";
import "./App.css";
import Contact from "./pages/Contact";
import { ModalProvider } from "./contexts/modalcontext";
import ModalWrapper from "./components/ModalWrapper/ModalWrapper";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <ModalProvider>
            <ModalWrapper />
            <Routes>
              <Route path="/" element={<DrawerAppBar />}>
                <Route index element={<Home />} />
                <Route path="/proyects" element={<Proyects />} />
                <Route path="/contact" element={<Contact />} />
              </Route>
            </Routes>
          </ModalProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
