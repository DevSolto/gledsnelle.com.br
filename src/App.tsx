import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import RemigioDaGente from './pages/remigioDaGente';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/remigio-da-gente" element={<RemigioDaGente />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;