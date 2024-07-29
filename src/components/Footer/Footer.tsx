import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
        <div className="footer__nav">
          <ul className="nav-footer__list">
            <li>
              <a
                href="https://www.yoqi.com/contact-new"
                className="nav-footer__link"
                target="_blank"
                rel="noreferrer"
              >
                Customer Support
              </a>
              {' / '}
            </li>
            <li>
              {' '}
              <a
                href="https://www.yoqi.com/gallery-1"
                className="nav-footer__link"
                target="_blank"
                rel="noreferrer"
              >
                Gallery
              </a>
              {' / '}
            </li>
            <li>
              {' '}
              <a
                href="https://www.yoqi.com/teacher-directory-terms-of-use"
                className="nav-footer__link"
                target="_blank"
                rel="noreferrer"
              >
                Terms of use
              </a>
              {' / '}
            </li>
            <li>
              {' '}
              <a
                href="https://www.yoqi.com/qiblog"
                className="nav-footer__link"
                target="_blank"
                rel="noreferrer"
              >
                QiBlog
              </a>
              {' / '}
            </li>
            <li>
              {' '}
              <a
                href="https://www.yoqi.com/online-certification"
                className="nav-footer__link"
                target="_blank"
                rel="noreferrer"
              >
                Online certification
              </a>
              {' / '}
            </li>
            <li>
              {' '}
              <a
                href="https://www.yoqi.com/faq"
                className="nav-footer__link"
                target="_blank"
                rel="noreferrer"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__text text-footer">
          <span>All works © {currentYear} YOQI® Productions LLC., All rights reserved.</span>
        </div>
        <div className={"footer__last"}>
          <span>
            YOQI® is a registered mark with the USPTO and other jurisdictions.
          </span>
        </div>
    </div>
  );
};

export default Footer;
