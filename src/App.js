import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact'
import Projects from './Components/Projects/Projects'
function App() {
 return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/About" element={<About />}  />
        <Route path="/Contact" element={<Contact />}  />
        <Route path="/Projects" element={<Projects />}  />
        </Routes>
      </div>
    </BrowserRouter>
 );
}

export default App;