import './css/App.css';
import Home from './pages/home';
//import FacebookLoginComponent from './pages/login';
import Login from './pages/login';

import Features from './pages/features';
//import Signup from './components/signup';
//import UploadImg from './components/uploadImg';
//import ImageUpload from './components/messagesent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login/>} />
        <Route path="/features" exact element={<Features />} />

      </Routes>
    </Router>
  );
}
export default App;
