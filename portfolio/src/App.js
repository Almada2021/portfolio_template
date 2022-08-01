import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from './pages/Home';
import DrawerAppBar from './components/Navbar'

function App() {

  return (
    <div className="App" >
      <BrowserRouter>
        <DrawerAppBar/>
        <Routes>
          <Route  path="/" index element={<Home/>}>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
