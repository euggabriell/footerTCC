import Home from './home';
import Footer from './footer';
import QuemSomos from './QS';
import Contato from './contato';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">

          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/quemsomos" element={<QuemSomos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
          <Footer />
        </header>
      </div>
    </Router>
  );
}

export default App;

