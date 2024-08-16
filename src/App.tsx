import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import { PlanoDeGoverno } from './pages/planoDeGoverno';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plano-de-governo" element={<PlanoDeGoverno />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;