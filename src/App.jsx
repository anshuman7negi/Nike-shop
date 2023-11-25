import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/main/Navbar';
import MainHomepage from './pages/homepage/MainHompage';
import MainShopping from './pages/shoppingpage/MainShopping';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainHomepage />} />
        <Route path="/shopping" element={<MainShopping />} />
      </Routes>
    </>
  );
}

export default App;
