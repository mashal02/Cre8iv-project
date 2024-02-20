//import "../css/bootstrap.min.css"
import Navbar from "./navbar"
import "../css/faqstyle.css"
import Footer from './footer'
export const FAQ = () => {
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
  <title>Campus Cravings | Home</title>
 
  {/* Bootstrap core CSS */}
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n\n @import url('http://fonts.cdnfonts.com/css/montserrat');\n\n     *{\n       font-family: Montserrat;\n     }\n     \n\n      .bd-placeholder-img {\n        font-size: 1.125rem;\n        text-anchor: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      .bar:hover {\n        fill: orange;\n        opacity: 1;\n      }\n      #clr {\n        fill: white;\n      }\n     text{\n       font-family: montserrat;\n       font-weight: bold;\n       font-size: xx-large;\n     }\n     #sty-txt{\n       font-weight:lighter;\n       font-size: normal;\n       font-style: italic;\n     }\n     .btn-sty{\n              font-weight:lighter;\n       font-size: normal;\nfont-family: montserrat;\nbackground-color: #b0171f;    \ncolor:white; \nborder-radius:10%;\n position:absolute;\n  bottom: 150px;\n\tleft: 1330px;\n  padding: 16px;\n  justify-content: center;\n  align-items: center;\n  display:inline-flex;\n  border-color: none;\n  \n  \n  }\n\n  .btn-sty:hover{\n    background-color: white;\n    color:black;\n  }\n\n      @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n          font-size: 3.5rem;\n        }\n      }\n    "
    }}
  />
  {/* Custom styles for this template */}
 
  <main>
    {/*header*/}
     
    <div className="container marketing">
      {/* START THE FEATURETTES */}
      {/*About Us*/}
      <Navbar></Navbar>
      
      {/*FAQ's*/}
      <h2 className="featurette-heading">
        Frequently Asked Questions (FAQ's)
      </h2>{" "}
      <br />
      <div  className="accordion" id="accordionExample">
        <div style={{
                backgroundColor: '#f0e9ff' }} className="accordion-item" >
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              style={{
                backgroundColor: '#f5f5f5' }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Does this platform contain all the cafe's information?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.{" "}
            </div>
          </div>
        </div>
        <div style={{
                backgroundColor: '#f0e9ff' }}className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
             style={{
              backgroundColor: '#f5f5f5' }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How do I order from multiple cafe's?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum{" "}
            </div>
          </div>
        </div>
        <div style={{
                backgroundColor: '#f0e9ff' }} className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
             style={{
              backgroundColor: '#f5f5f5' }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Can I have multiple accounts from one email?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur, vel illum qui dolorem eum
              fugiat quo voluptas nulla pariatur.{" "}
            </div>
          </div>
        </div>
      </div>
      <hr className="featurette-divider" />
      {/* /END THE FEATURETTES */}
    </div>
    {/* /.container */}
  </main>
  
  {/*Footer*/}
  <Footer></Footer>
</>
)
};

export default FAQ;