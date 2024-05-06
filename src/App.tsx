import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import RemigioPodeMais from './pages/remigioPodeMais';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/remigio-pode-mais" element={<RemigioPodeMais />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;