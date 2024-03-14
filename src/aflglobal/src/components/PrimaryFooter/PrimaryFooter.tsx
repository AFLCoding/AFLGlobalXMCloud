import React from 'react';
import Link from 'next/link';
// import './PrimaryFooter.module.scss';

const PrimaryFooter = () => {
  return (
    <div className="full__bleed container-fluid">
      <footer className="footer row w-95 mx-auto">
        <div className="col footer__tile footer-list">
          <h3 className="footer__heading">
            <Link className="text-uppercase fw-bold" href="/">
              SOLUTIONS
            </Link>
          </h3>
          <Link className="footer__content" href="/Hyperscale ">
            Hyperscale
          </Link>
        </div>
        <div className="col footer__tile footer-list">
          <h3 className="footer__heading fw-bold fs-6">
            <Link className=" text-uppercase" href="/">
              Products
            </Link>
          </h3>
          <Link href="/" className="footer__content">
            Fiber Optic
          </Link>
          <Link href="/" className="footer__content">
            Connectivity
          </Link>
          <Link href="/" className="footer__content">
            Test and Inspection
          </Link>
        </div>
        <div className="col footer__tile footer-list">
          <h3 className="footer__heading">
            <Link className="text-uppercase fw-bold " href="/">
              RESOURCES
            </Link>
          </h3>
          <Link className="footer__content" href="/Hyperscale">
            AFL Portals
          </Link>
          <Link className="footer__content" href="/Hyperscale">
            Product Related Materials
          </Link>
          <Link className="footer__content" href="/Hyperscale">
            Miscellaneous
          </Link>
        </div>
        <div className="col footer__tile footer-list">
          <h3 className="footer__heading fw-bold fs-6 ">
            <Link className="text-uppercase" href="/">
              COMPANY
            </Link>
          </h3>
          <Link className="footer__content" href="/Hyperscale">
            Company Profile
          </Link>
          <Link className="footer__content" href="/Hyperscale">
            Community
          </Link>
          <Link className="footer__content" href="/Hyperscale">
            Careers
          </Link>
          <Link className="footer__content" href="/Hyperscale">
            Environment, Health & Safety
          </Link>
        </div>
        <div className="col footer__tile footer-list">
          <h3 className="footer__heading fw-bold fs-6 ">
            <Link className="text-uppercase" href="/">
              CONTACT
            </Link>
          </h3>
          <Link className="footer__content" href="/Hyperscale">
            Equipment Rental
          </Link>
          <Link className="footer__content" href="/Hyperscale">
            Locations
          </Link>
          <Link className="footer__content " href="/Hyperscale">
            Contact And Feedback
          </Link>
          <Link className="footer__content " href="/Hyperscale">
            Forms
          </Link>
        </div>
        <div className="col footer__tile"> </div>
        <div className="col">
          <Link href="/">Logo</Link>
        </div>
      </footer>
    </div>
  );
};
export default PrimaryFooter;
