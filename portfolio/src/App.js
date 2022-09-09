import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from './pages/Home';
import DrawerAppBar from './components/Navbar'
import Proyects from './pages/Proyects';
import Footer from './components/Footer';
import "./App.css";
function App() {

  return (
    <div className="App" >
      <BrowserRouter>
        <DrawerAppBar/>
        <Routes>
          <Route  path="/" index element={<Home/>}/>
          <Route  path="/proyects"  element={<Proyects/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
