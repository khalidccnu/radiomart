import { imagePaths } from '@lib/constant';
import Link from 'next/link';
import { FaEnvelope, FaFacebook, FaInstagram, FaLocationDot, FaPhone, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="top">
          <div className="logo_container">
            <img src={imagePaths.logo} alt="radiomart logo" />
          </div>
          <ul className="social_links_wrapper">
            <li className="social_link">
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li className="social_link">
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li className="social_link">
              <a href="#">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
        <div className="middle">
          <div className="item">
            <h6 className="title">About us</h6>
            <p className="description">RadioMart is the largest e-Commerce platform in Bangladesh.</p>
          </div>
          <div className="item">
            <h6 className="title">Help & Support</h6>
            <ul className="links_wrapper">
              <li className="link">
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="item">
            <h6 className="title">Get in touch</h6>
            <ul className="links_wrapper">
              <li className="link">
                <span className="icon_container">
                  <FaLocationDot size={12} />
                </span>
                <p>2/1/E, Eden Center, Arambag, Motijheel, Dhaka-1000</p>
              </li>
              <li className="link">
                <span className="icon_container">
                  <FaPhone size={12} />
                </span>
                <a href="tel:+8801712345678">+880 1712 345 678</a>
              </li>
              <li className="link">
                <span className="icon_container">
                  <FaEnvelope size={12} />
                </span>
                <a href="mailto:contact@radiomart.com">contact@radiomart.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <p className="copyright">Copyright © 2024 RadioMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
