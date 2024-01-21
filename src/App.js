// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home  from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import OP from './pages/OP/OP';
import EatingCat from './pages/EatingCat/EatingCat';
import Content from './pages/Content/Content';
import Opcat from './pages/OPCAT/OPCAT';
import Article from './pages/Article/Article';
function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
      <Route path="/OP" element={<OP />} />
      <Route path="/CONTENT" element={<Content />} />
      <Route path="/OPCAT" element={<Opcat />} />
      <Route path="/FEED_CAT" element={<EatingCat />} />
      <Route path="/ARTICLE" element={<Article />} />
      <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
