import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Etica from './pages/Etica';
import SaibaMais from './pages/SaibaMais';
import ProCon from './pages/ProCon';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Home />} />
        <Route path="/etica" element={<Etica />} />
        <Route path="/saiba-mais" element={<SaibaMais />} />
        <Route path="/pro-con" element={<ProCon />} />
      </Routes>
    </HashRouter  >
    );
}

export default App;
