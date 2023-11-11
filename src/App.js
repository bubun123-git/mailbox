import './App.css';
import Login from './Components/Login/Login';
import Welcome from './Components/Welcome/Welcome';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmailDetail from './Components/EmailList/EmailDetail';
import SentMail from './Components/SentMail/SentEmailList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/mailid" element={<EmailDetail />} />
        <Route path="/sent" element={<SentMail></SentMail>} />
      </Routes>
    </Router>
  );
}

export default App;
