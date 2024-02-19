import "../css/navbar.css";

export const Navbar=()=>{
return(
<div className="index">
<div className="overlap-group">
<div className="div-container-fluid">
  <div className="div-navbar-translate">
    <div className="link-2" />
  </div>
  <div className="div-navigation">
    <div className="list-margin">
      <div className="list">
        <div className="item">
          <div className="link-3">
            <div className="text-wrapper-4">Use Cases</div>
          </div>
        </div>
        <div className="item">
          <div className="link-3">
            <div className="text-wrapper-4">Solutions</div>
          </div>
        </div>
        <div className="link-features-wrapper">
          <div className="text-wrapper-4">Features</div>
        </div>
        <div className="link-free-AI-tools-wrapper">
          <div className="text-wrapper-4">Free Tools</div>
        </div>
        <div className="link-pricing-wrapper">
          <div className="text-wrapper-4">Pricing</div>
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
            <div className="text-wrapper-5">Get Started Now</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<img
  className="light-background"
  alt="Light background"
  src="https://cdn.animaapp.com/projects/652b73bd6c9702139298c7a5/releases/65be35262f238b9ee1d020c3/img/light-background-2-2@2x.png"
/>
</div>
</div>

);



}
export default Navbar;
