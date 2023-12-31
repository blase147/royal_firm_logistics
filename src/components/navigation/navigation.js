import React, { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import { FaPhone } from 'react-icons/fa';
import logo from '../../logo.png'; // Import the logo image as a module
import './navigation.scss';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const phoneNumber = '+2348035344730';
  const navLinks = [
    { url: '#home', name: 'Home' },
    { url: '#services', name: 'Services' },
    { url: '#about-me', name: 'About' },
    { url: 'https://medium.com/@solarmails2/', name: 'Blog' },
    { url: '#contact-me', name: 'Contact' },
    {
      url: `tel:${phoneNumber}`,
      name:
  <>
    <FaPhone />
    {phoneNumber}
  </>,
    },
  ];

  let menuIcon = null;
  if (windowWidth <= 768) {
    menuIcon = isOpen ? (
      <RiCloseLine size={35} onClick={toggleMenu} />
    ) : (
      <RiMenuLine size={35} onClick={toggleMenu} />
    );
  }

  const handleHashLinkClick = (event, url) => {
    event.preventDefault();
    if (url.startsWith('#')) {
      const targetId = url.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const { offsetTop } = targetElement;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    } else {
      window.open(url, '_blank');
    }
    // toggleMenu(); // Close the menu after clicking on a link
  };

  return (
    <div>
      <div className="navigation-bar-container">
        <div className="menu-icon">{menuIcon}</div>
        {isOpen && (
          <ul className="navigation-menu">
            {navLinks.map(({ url, name }) => (
              <li key={name}>
                <a href={url} onClick={(e) => handleHashLinkClick(e, url)}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="desktop-nav-container">
        <img src={logo} alt="logo" className="logo" />
        {windowWidth > 768 && (
          <ul className="navigation-menu">
            {navLinks.map(({ url, name }) => (
              <li key={name}>
                <a href={url} onClick={(e) => handleHashLinkClick(e, url)}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
