
import '../css/footer.css'
import SVG from './svg';
export const Footer = () => {

return (
    

<main>
   <SVG/>

<div className="backgfoot">
<div >
  <footer style={{ scrollPaddingBottom: '0rem'}} className="py-5">
    <div className="row">
      <div className="col-md-4">
        <h5>Company</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a
              href="/"
              className="nav-link p-0 text-muted"
            >
              Home
            </a>
          </li>
          <li className="nav-item mb-2">
            <a
              href="{{ route('faq') }}"
              className="nav-link p-0 text-muted"
            >
              About
            </a>
          </li>
          <li className="nav-item mb-2">
            <a
              href="/privacypolicy"
              className="nav-link p-0 text-muted"
            >
              Privacy Policy
            </a>
          </li>
          <li className="nav-item mb-2">
            <a
              href="/privacypolicy"
              className="nav-link p-0 text-muted"
            >
              Terms and Conditions
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <h5>Services</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              Services
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
                Engage Customers       
                     </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              Schedule & Publish
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              Caption Generator            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <h5>Contact Us</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a
              href="{{ route('contact') }}"
              className="nav-link p-0 text-muted"
            >
              Contact Us
            </a>
          </li>
          <li className="nav-item mb-2">
            <a
              href="/faq"
              className="nav-link p-0 text-muted"
            >
              FAQ's
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              Pricing
            </a>
          </li>
          <li className="nav-item mb-2">
            <a
              href="{{ route('feedback') }}"
              className="nav-link p-0 text-muted"
            >
              Feedback
            </a>
          </li>
        </ul>
      </div>
      <div className="d-flex justify-content-between py-4 my-4 border-top">
        <p>© 2024 Cre8iv, Inc. All rights reserved.</p>
        {/*Social media handles*/}
        <ul className="list-unstyled d-flex">
          
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
      
        </ul>
      </div>
    </div>
  </footer>
</div>
</div>

</main>

    );
}

export default Footer;