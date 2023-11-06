import './App.css';
import Login from './Components/Login/Login';
import Welcome from './Components/Welcome/Welcome';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmailDetail from './Components/EmailList/EmailDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/mailid" element={<EmailDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
