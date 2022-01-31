import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ReactInfo from './ReactInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react" element={<ReactInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
