import React from 'react';
import logo from '../components/images/logo1.png';
// footer section
const Footer =() => {
  return (
    <footer className="Footer">
      <p>
        Created {' '}
        <img id="footerLogo" src={logo} alt="React Logo"></img> by: Aman Parashar
        <br />© All rights reserved
      </p>
    </footer>
  );
}
export default Footer;