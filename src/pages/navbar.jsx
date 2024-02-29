import "../css/navbar.css";
import { Link } from 'react-router-dom';

export const Navbar=()=>{
return(
<div className="index">
<div className="overlap-group">

<div className="div-container-fluid">
<img
  className="light-background"
  alt="Light background"
  src="https://cdn.animaapp.com/projects/652b73bd6c9702139298c7a5/releases/65be35262f238b9ee1d020c3/img/light-background-2-2@2x.png"
/>
  <div className="div-navbar-translate">
    <div className="link-2" />
  </div>
  <div className="div-navigation">
    <div className="list-margin">
      <div className="list">
        <div className="item">
          <div className="link-3">
            <div className="text-wrapper-4">About </div>
          </div>
        </div>
        <div className="item">
          <div className="link-3">
          <Link style={{textDecoration: 'none'}} to = "/features" > 
          <div className="text-wrapper-4">Features</div>
          </Link>
          </div>
        </div>
        <div className="link-features-wrapper">
        <Link style={{textDecoration: 'none'}} to = "/faq" > 
          <div className="text-wrapper-4">FAQ</div>
          </Link>
        </div>
            <div className="link-pricing-wrapper">
            <Link style={{textDecoration: 'none'}} to = "/privacypolicy" > 
          <div className="text-wrapper-4">Privacy Policy</div>
          </Link>
        </div>
      </div>
    </div>
    <div className="list-wrapper">
      <div className="list-2">
        <div className="item-margin">
          <div className="link-wrapper">
            <div className="login-wrapper">
              <div className="login">
                <a href="/login">Login </a>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="item-2">
          <div className="link-4">
          <Link style={{textDecoration: 'none'}} to = "/features" > 
            <div className="text-wrapper-5"> Get Started Now </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
</div>

);



}
export default Navbar;
