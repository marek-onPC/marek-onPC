import Navigation from './components/Navigation';
import GoToTop from './components/GoToTop';
import Home from './views/Home';
import Notes from './views/Notes';
import About from './views/About';
import Plugin from './views/Plugin';
import Note from './views/Note';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <GoToTop/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/plugin" element={<Plugin />} />
        <Route path="/note" element={<Note />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;