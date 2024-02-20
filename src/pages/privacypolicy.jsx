import '../css/privacypolicy.css'
import Navbar from './navbar'
import Footer from './footer'
export const PrivacyPolicy = ()=>{

return (


<>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="" />
  <meta
    name="author"
    content="Mark Otto, Jacob Thornton, and Bootstrap contributors"
  />
  <meta name="generator" content="Hugo 0.88.1" />
  <title>Campus Cravings | Privacy Policy</title>
 
  
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n     @import url('http://fonts.cdnfonts.com/css/montserrat');\n\n     *{\n       font-family: Montserrat;\n     }\n/* Caption text */\n    .text {\n    color: #f8f8f8;\n    font-weight: bolder;\n    font-size: 40px;\n    padding: 8px 12px;\n    position: absolute;\n    bottom: 8px;\n    width: 100%;\n    text-align: center;\n    text-shadow: 20px;\n    }\n\n    .deals {\n    text-align: center;\n    }\n\n    /* Number text (1/3 etc) */\n    .numbertext {\n    color: #f8f8f8;\n    font-size: 17px;\n    padding: 8px 12px;\n    position: absolute;\n    top: 0;\n    padding-top:2%;\n    padding-left: 20%;\n    }\n\n    /* The dots/bullets/indicators */\n    .dot {\n    height: 15px;\n    width: 15px;\n    margin: 0 2px;\n    background-color: grey;\n    border-radius: 50%;\n    display: inline-block;\n    transition: background-color 0.6s ease;\n    }\n\n    .active {\n    background-color: b0171f;\n    }\n\n\n    /* Fading animation */\n    .fade {\n    animation-name: fade;\n    animation-duration: 1.5s;\n    }\n\n    @keyframes fade {\n    from {opacity: .4} \n    to {opacity: 1}\n    }\n\n    /* Memberships and Deals*/\n\n    .clickformore {\n    background-color: #b0171f; /* Red */\n    border: #b0171f;\n    color: #f8f8f8;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    border-radius: 3px;\n    }\n\n    /*Buttons with featurettes*/\n    .clickformore:hover {\n    background-color: #a2151c;\n    }\n\n    /*Footer*/\n    .b-example-divider {\n    height: 3rem;\n    background-color: rgba(0, 0, 0, .1);\n    border: solid rgba(0, 0, 0, .15);\n    border-width: 1px 0;\n    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);\n    }\n\n    /*Social media handles SVG color fill in*/\n    .social {\n    vertical-align: -.125em;\n    fill: #f8f8f8;\n    }\n\n    .social:hover {\n    fill:#dbdbdb\n    }\n\n    .bottomcontainer, .bottombar {\n    background-color: #141414;\n    color:#f8f8f8;\n    }\n\n\n    /* CUSTOMIZE THE CAROUSEL\n    -------------------------------------------------- */\n    /*Header*/\n\n    .b-example-divider {\n    height: 3rem;\n    background-color: rgba(0, 0, 0, .1);\n    border: solid rgba(0, 0, 0, .15);\n    border-width: 1px 0;\n    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);\n    }\n\n    .form-control-dark {\n    color: #fff;\n    background-color: var(--bs-dark);\n    border-color: var(--bs-gray);\n    }\n    .form-control-dark:focus {\n    color: #fff;\n    background-color: var(--bs-dark);\n    border-color: #fff;\n    box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .25);\n    }\n\n    .bi {\n    vertical-align: -.125em;\n    fill: currentColor;\n    }\n\n    .text-small {\n    font-size: 85%;\n    }\n\n    .dropdown-toggle {\n    outline: 0;\n    }\n    /* Carousel base class */\n\n    .carousel {\n    margin-bottom: 4rem;\n    }\n    /* Since positioning the image, we need to help out the caption */\n    .carousel-caption {\n    bottom: 3rem;\n    z-index: 10;\n    }\n\n    /* Declare heights because of positioning of img element */\n    .carousel-item {\n    height: 32rem;\n    }\n    .carousel-item > img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    min-width: 100%;\n    height: 32rem;\n    }\n\n    .btn-warning {\n    background-color: #b0171f;\n    border-color: #b0171f;\n    }\n\n    .btn-warning:hover {\n    background-color: #f8f8f8;\n    border-color: #f8f8f8;\n    }\n\n    /*Login button*/\n    .loginbtn a {\n    color:#f8f8f8;\n    text-decoration: none;\n    }\n\n    .loginbtn:hover a {\n    color:#141414;\n    text-decoration: none;\n    }\n\n    /*Sign up button*/\n    .subtn a {\n    color:#f8f8f8;\n    text-decoration: none;\n    }\n\n    .subtn:hover a {\n    color:#141414;\n    text-decoration: none;\n    }\n\n    /* MARKETING CONTENT\n    -------------------------------------------------- */\n\n    /* Center align the text within the three columns below the carousel */\n    .marketing .col-lg-4 {\n    margin-bottom: 1.5rem;\n    text-align: center;\n    }\n    .marketing h2 {\n    font-weight: 400;\n    }\n    /* rtl:begin:ignore */\n    .marketing .col-lg-4 p {\n    margin-right: .75rem;\n    margin-left: .75rem;\n    }\n    /* rtl:end:ignore */\n\n\n    /* Featurettes\n    ------------------------- */\n\n    .featurette-divider {\n    margin: 5rem 0; /* Space out the Bootstrap <hr> more */\n    }\n\n    /* Thin out the marketing headings */\n    .featurette-heading {\n    font-weight: 300;\n    line-height: 1;\n    /* rtl:remove */\n    letter-spacing: -.05rem;\n    color:#141414;\n    }\n\n    /* title of website font */\n\n    .tle{\n      font-family: 'Playball';\n    }\n\n    /* RESPONSIVE CSS\n    -------------------------------------------------- */\n\n    @media (min-width: 40em) {\n    /* Bump up size of carousel content */\n    .carousel-caption p {\n        margin-bottom: 1.25rem;\n        font-size: 1.25rem;\n        line-height: 1.4;\n    }\n\n    .featurette-heading {\n        font-size: 50px;\n    }\n    }\n\n    @media (min-width: 62em) {\n    .featurette-heading {\n        margin-top: 7rem;\n    }\n    }\n\n\n        .bd-placeholder-img {\n             font-weight: bolder;\n            font-size: 1.125rem;\n            text-anchor: middle;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            user-select: none;\n        }\n\n        .bar:hover {\n            fill:#b0171f;\n            opacity: 1;\n        }\n        #clr {\n            fill: white;\n        }\n        text{\n        font-weight: bold;\n        font-size: xx-large;\n        }\n        #sty-txt{\n        font-weight:lighter;\n        font-size: normal;\n        font-style: italic;\n        }\n        .btn-sty{\n            font-weight:lighter;\n            font-size: normal;\n            background-color: #b0171f;    \n            color:white; \n            border-radius:10%;\n            position:absolute;\n            bottom: 150px;\n            left: 1330px;\n            padding: 16px;\n            justify-content: center;\n            align-items: center;\n            display:inline-flex;\n            border-color: none;\n    \n    \n    }\n\n    .btn-sty:hover{\n        background-color: #c33434;\n        color:white;\n    }\n\n      @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n          font-size: 3.5rem;\n        }\n      }\n  /* dropdown of cafes     */\n  .dropdown {\n  position: relative;\n  display: inline-block;\n}\n\n    .dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n    }\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content a:hover {background-color: #b0171f;\ncolor: white;}\n\n.dropdown:hover .dropdown-content {display: block;}\n\n.dropdown:hover .nav-link{\n  background-color: #b0171f;\n}\n\n\n\n\n\n\n         /* unvisited link */\na:link {\n  color: gray;\n  text-decoration: none;\n}\n\n/* visited link */\na:visited {\n  color: gray;\n  text-decoration: none;\n}\n\n/* mouse over link */\na:hover {\n  color: white;\n  text-decoration: none;\n}\n    h1{\n        text-align: center;\n    }\n    hr{\n        size:\"10\";\n    }\n     text{\n       font-family: open-sans;\n       font-weight: bold;\n       font-size: xx-large;\n     }\n     #sty-txt{\n       font-weight:lighter;\n       font-size: normal;\n       font-style: italic;\n     }\n     #logo{\n        width: 75px;\n         height:80px;\n         display: block;\n         margin-left: auto;\n        margin-right: auto;\n      }\n\n\nbody {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  color: #5a5a5a;\n}\n\n/* Deals Slideshow */\n.mySlides {display: none;}\nimg {vertical-align: middle;}\n\n/* Slideshow container */\n.slideshow-container {\n  max-width: 1000px;\n  position: relative;\n  margin: auto;\n  padding:10px;\n}\n\n/* Caption text */\n.text {\n  color: #f8f8f8;\n  font-weight: bolder;\n  font-size: 40px;\n  padding: 8px 12px;\n  position: absolute;\n  bottom: 8px;\n  width: 100%;\n  text-align: center;\n  text-shadow: 20px;\n}\n\n.deals {\n  text-align: center;\n}\n\n/* Number text (1/3 etc) */\n.numbertext {\n  color: #f8f8f8;\n  font-size: 17px;\n  padding: 8px 12px;\n  position: absolute;\n  top: 0;\n  padding-top:2%;\n  padding-left: 20%;\n}\n\n/* The dots/bullets/indicators */\n.dot {\n  height: 15px;\n  width: 15px;\n  margin: 0 2px;\n  background-color: grey;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease;\n}\n\n.active {\n  background-color: b0171f;\n}\n\n/* Fading animation */\n.fade {\n  animation-name: fade;\n  animation-duration: 1.5s;\n}\n\n@keyframes fade {\n  from {opacity: .4} \n  to {opacity: 1}\n}\n\n/* Memberships and Deals*/\n\n.clickformore {\n  background-color: #b0171f; /* Red */\n  border: #b0171f;\n  color: #f8f8f8;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  border-radius: 3px;\n}\n\n/*Buttons with featurettes*/\n.clickformore:hover {\n  background-color: #a2151c;\n}\n\n/*Footer*/\n.b-example-divider {\n  height: 3rem;\n  background-color: rgba(0, 0, 0, .1);\n  border: solid rgba(0, 0, 0, .15);\n  border-width: 1px 0;\n  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);\n}\n\n/*Social media handles SVG color fill in*/\n.social {\n  vertical-align: -.125em;\n  fill: #f8f8f8;\n}\n\n.social:hover {\n  fill:#dbdbdb\n}\n\n.bottomcontainer, .bottombar {\n  background-color: #141414;\n  color:#f8f8f8;\n}\n\n\n/* CUSTOMIZE THE CAROUSEL\n-------------------------------------------------- */\n/*Header*/\n\n.b-example-divider {\n  height: 3rem;\n  background-color: rgba(0, 0, 0, .1);\n  border: solid rgba(0, 0, 0, .15);\n  border-width: 1px 0;\n  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);\n}\n\n.form-control-dark {\n  color: #fff;\n  background-color: var(--bs-dark);\n  border-color: var(--bs-gray);\n}\n.form-control-dark:focus {\n  color: #fff;\n  background-color: var(--bs-dark);\n  border-color: #fff;\n  box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .25);\n}\n\n.bi {\n  vertical-align: -.125em;\n  fill: currentColor;\n}\n\n.text-small {\n  font-size: 85%;\n}\n\n.dropdown-toggle {\n  outline: 0;\n}\n/* Carousel base class */\n\n.carousel {\n  margin-bottom: 4rem;\n}\n/* Since positioning the image, we need to help out the caption */\n.carousel-caption {\n  bottom: 3rem;\n  z-index: 10;\n}\n\n/* Declare heights because of positioning of img element */\n.carousel-item {\n  height: 32rem;\n}\n.carousel-item > img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  height: 32rem;\n}\n\n.btn-warning {\n  background-color: #b0171f;\n  border-color: #b0171f;\n}\n\n.btn-warning:hover {\n  background-color: #f8f8f8;\n  border-color: #f8f8f8;\n}\n\n/*Login button*/\n.loginbtn a {\n  color:#f8f8f8;\n  text-decoration: none;\n}\n\n.loginbtn:hover a {\n  color:#141414;\n  text-decoration: none;\n}\n\n/*Sign up button*/\n.subtn a {\n  color:#f8f8f8;\n  text-decoration: none;\n}\n\n.subtn:hover a {\n  color:#141414;\n  text-decoration: none;\n}\n\n/* MARKETING CONTENT\n-------------------------------------------------- */\n\n/* Center align the text within the three columns below the carousel */\n.marketing .col-lg-4 {\n  margin-bottom: 1.5rem;\n  text-align: center;\n}\n.marketing h2 {\n  font-weight: 400;\n}\n/* rtl:begin:ignore */\n.marketing .col-lg-4 p {\n  margin-right: .75rem;\n  margin-left: .75rem;\n}\n/* rtl:end:ignore */\n\n\n/* Featurettes\n------------------------- */\n\n.featurette-divider {\n  margin: 5rem 0; /* Space out the Bootstrap <hr> more */\n}\n\n/* Thin out the marketing headings */\n.featurette-heading {\n  font-weight: 300;\n  line-height: 1;\n  /* rtl:remove */\n  letter-spacing: -.05rem;\n  color:#141414;\n}\n\n\n/* RESPONSIVE CSS\n-------------------------------------------------- */\n\n@media (min-width: 40em) {\n  /* Bump up size of carousel content */\n  .carousel-caption p {\n    margin-bottom: 1.25rem;\n    font-size: 1.25rem;\n    line-height: 1.4;\n  }\n\n  .featurette-heading {\n    font-size: 50px;\n  }\n}\n\n@media (min-width: 62em) {\n  .featurette-heading {\n    margin-top: 7rem;\n  }\n}\n\n\n\n      @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n          font-size: 3.5rem;\n        }\n      }\n    "
    }}
  />
  
  <Navbar></Navbar>
  
  {/*terms and conditions*/}
  <div className="container">
    <div className="page-header">
      <h1>Privacy Policy</h1>
    </div>
    <br />
    <br /> <br />
    <p id="hd">Passive Information Collection</p>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, , but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
    <br />
    <p id="hd">Security of Personal Information</p>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, , but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
    <br />
    <p id="hd">Sharing of Personal Information</p>
    <p id="last">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, , but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
  {/* footer*/}
  
 
  
  <br />
  <br />
  {/*Footer*/}
  <Footer></Footer>
  {/* <div className="bottombar">
    <div className="container bottomcontainer">
      <footer className="py-5">
        <div className="row">
          <div className="col-md-4">
            <h5>About</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#">Home</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#">About</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#">Terms and Conditions</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Services</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#">Services</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#">Memberships and Coupons</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#">Rewards</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#">Contact Us</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#">FAQ's</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#">Pricing</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#">Feedback</a>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-between py-4 my-4 border-top">
            <p>© 2022 Campus Cravings, Inc. All rights reserved.</p>
           
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-dark" href="#" title="Visit our Twitter">
                  <svg className="social" width={24} height={24}>
                    <use xlinkHref="#twitter" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#" title="Visit our Instagram">
                  <svg className="social" width={24} height={24}>
                    <use xlinkHref="#instagram" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#" title="Visit our Facebook">
                  <svg className="social" width={24} height={24}>
                    <use xlinkHref="#facebook" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#" title="Visit our LinkedIn">
                  <svg className="social" width={24} height={24}>
                    <use xlinkHref="#linkedin" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </div> */}
</>


    );
}