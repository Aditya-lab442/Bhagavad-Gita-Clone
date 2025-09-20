import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-links">
          <Link to="/about">About us</Link>
          <Link to="/">App</Link>
          <a href="#">Bhagavad Gita AI</a>
          <a href="#">Acknowledgements</a>
          <Link to="/privacy">Privacy</Link>
          <Link to="/privacy">Terms</Link>
          <a href="#">Blog</a>
          <a href="#">Donate</a>
          <a href="#">API</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="footer-icons">
          <a target='_blank' href="https://www.facebook.com/iiRadhaKrishnaii/"><i className="fab fa-facebook-f"></i></a>
          <a target='_blank' href="https://x.com/ShriKrishna?s=20&t=92c4he0cK-nq_Bo6WOx0ZQ"><span>X</span></a> 
          <a target='_blank' href="https://github.com/gita"><i className="fab fa-github"></i></a>
        </div>
      </footer>
      <div className="footer-2">
        &copy;2025 Copyright: <a href="https://vedvyas.org/">Ved Vyas Foundation</a> All rights reserved.
      </div>
    </>
  );
};

export default Footer;