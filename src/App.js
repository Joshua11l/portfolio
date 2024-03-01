import Navbar from "./components/NavBar/navbar.js"; 
import Intro from './components/Intro/intro';
import About from './components/About/about.js';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <About/>
    </div>
  );
}

export default App;
