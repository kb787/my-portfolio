import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import About from './components/About';
import Project from './components/Project';
import Skill from './components/Skill';
import Contact from './components/Contact';
import {BrowserRouter,Routes,Route} from 'react-router-dom' ;
function App() {
  return (
    <div className="App">
       <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Homepage/>} /> 
                <Route path = "/my-portfolio" element = {<Homepage/>} />
            </Routes>
       </BrowserRouter> 
    </div>
  );
}

export default App;

