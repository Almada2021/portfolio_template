import './App.css';
import {BrowserRouter} from "react-router-dom";
import DrawerAppBar from './components/Navbar';

function App() {

  return (
    <div className="App" >
      <BrowserRouter>
        <DrawerAppBar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
