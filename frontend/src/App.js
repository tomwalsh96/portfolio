import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Projects from './pages/projects';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Depro from './pages/projects/Depro.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/depro" element={<Depro />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
