import './App.css';
import Home from './components/home';
//import Features from './components/features';
//import Login from './components/login';
//import Signup from './components/signup';
//import UploadImg from './components/uploadImg';
import Callback from './components/callback';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/callback" element={<Callback/>} />
      </Routes>
    </Router>
  );
}

//function App() {
//return (
//<>
//<UploadImg />
//</>
//);
//}

export default App;
