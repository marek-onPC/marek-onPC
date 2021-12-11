import Navigation from './components/Navigation';
import Home from './views/Home';
import Notes from './views/Notes';
import About from './views/About';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;