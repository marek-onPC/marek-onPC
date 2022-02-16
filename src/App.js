import Navigation from './components/Navigation';
import GoToTop from './components/GoToTop';
import Home from './views/Home';
import Notes from './views/Notes';
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
      <header>
        <Navigation/>
      </header>
      <GoToTop/>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/plugin" element={<Plugin />} />
          <Route path="/note" element={<Note />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;