import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import Contact from './pages/Contact';
import About from './pages/About';
import Tutorials from './pages/Tutorials';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/post/:id" element={<Post darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/contact" element={<Contact darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/projects" element={<Projects darkMode={darkMode} setDarkMode={setDarkMode} />} /> 
        <Route path="/tutorials" element={<Tutorials darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="*" element={<NotFound darkMode={darkMode} setDarkMode={setDarkMode} />} />
      </Routes>
    </div>
  );
};

export default App;