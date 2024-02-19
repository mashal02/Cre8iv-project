
export const Footer = () => {
    return (
    
    
<div className="bottombar">
<div className="container bottomcontainer">
  <footer className="py-5">
    <div className="row">
      <div className="col-md-4">
        <h5>About</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a
              href="{{ route('root') }}"
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
              href="{{ route('privacy') }}"
              className="nav-link p-0 text-muted"
            >
              Privacy Policy
            </a>
          </li>
          <li className="nav-item mb-2">
            <a
              href="{{ route('terms') }}"
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
              Memberships and Coupons
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-muted">
              Rewards
            </a>
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
              href="{{ route('faq') }}"
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
        <p>© 2022 Campus Cravings, Inc. All rights reserved.</p>
        {/*Social media handles*/}
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
</div>
    );
}

export default Footer;