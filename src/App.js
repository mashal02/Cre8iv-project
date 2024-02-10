import './css/App.css';
//import Home from './components/home';
//import Features from './components/features';
//import Login from './components/login';
//import Signup from './components/signup';
//import UploadImg from './components/uploadImg';
//import ImageUpload from './components/messagesent';
//import Login from './components/login2';
//import Callback from './components/callback';
//import FBLogin from './components/facebooklogin';
import FacebookLoginComponent from './pages/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<FacebookLoginComponent />} />
      </Routes>
    </Router>
  );
}
export default App;
