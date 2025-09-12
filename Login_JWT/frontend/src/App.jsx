import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/login.jsx';
import Register from './component/register.jsx';
import Welcome from './component/welcome.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
