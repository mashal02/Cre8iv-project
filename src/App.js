import './css/App.css';
import Home from './pages/home';
//import FacebookLoginComponent from './pages/login';
import Login from './pages/fblogin';
import Features from './pages/features';
//import Signup from './components/signup';
//import UploadImg from './components/uploadImg';
import UploadImg from './pages/uploadImg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FAQ } from './pages/faq';
import { PrivacyPolicy } from './pages/privacypolicy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/features" exact element={<Features />} />
        <Route path="/faq" exact element={<FAQ />} />
        <Route path="/privacypolicy" exact element={<PrivacyPolicy />} />
        <Route path="/uploadimg" exact element={<UploadImg />} />
      </Routes>
    </Router>
  );
}
export default App;
