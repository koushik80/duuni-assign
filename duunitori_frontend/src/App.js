import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import JobPage from './pages/JobPage';
import './styles/styles.scss';
import SocialFollow from './components/SocialFollow';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <div className="non-nav">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="job/:jobId" element={<JobPage />} />
          </Routes>
        </div>
      </Router>
      <div className="socialConnect"><SocialFollow /></div>
    </div>
  );
}

export default App;