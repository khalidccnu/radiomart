import { paths } from '@lib/constant';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const Header = () => {
  return (
    <header>
      <div className="container">
        <ul className="header_wrapper">
          <li className="header_item social_links">
            <ul className="social_links_wrapper">
              <li className="social_link">
                <a href={paths.socialLink.facebook} target="_blank">
                  <FaFacebook size={12} />
                </a>
              </li>
              <li className="social_link">
                <a href={paths.socialLink.instagram} target="_blank">
                  <FaInstagram size={12} />
                </a>
              </li>
              <li className="social_link">
                <a href={paths.socialLink.twitter} target="_blank">
                  <FaTwitter size={12} />
                </a>
              </li>
            </ul>
          </li>
          <li className="header_item currency">USD</li>
          <li className="header_item track_order">Track My Order</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
