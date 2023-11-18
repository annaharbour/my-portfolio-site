import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Links from './Links';
import { Spin as Hamburger } from 'hamburger-react';

function Nav({ selected, handleSelection }) {
  const [isOpen, setOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 650);
  

  const pages = ['About', 'Skills', 'Contact', 'Demos'];

  const toggleNav = () => {
    setOpen(!isOpen);
  };

  const handlePageClick = (page) => {
    handleSelection(page);
    setOpen(false); 
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 650);
      setOpen(false); 
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Links />
      <div
        className="hamburger"
        style={{ display: isSmallScreen ? 'block' : 'none' }}
      >
        <Hamburger
          className="hamburger"
          toggled={isOpen}
          toggle={toggleNav}
          direction="left"
          color="#b267e6"
        />
      </div>

      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
          {pages.map((page) => (
            <li key={page} onClick={() => handlePageClick(page)}>
            {page === 'About' ? (
                <Link to="/" className={selected === 'About' ? 'selected' : ''}>
                  {page.toUpperCase()}
                </Link>
              ) : (
                <Link
                  to={`/${page.toLowerCase()}`}
                  className={selected === page ? 'selected' : ''}
                >
                  {page.toUpperCase()}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
