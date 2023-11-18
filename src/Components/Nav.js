import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Links from './Links';
import { Spin as Hamburger } from 'hamburger-react';

function Nav({ selected, handleSelection }) {
  const [isOpen, setOpen] = useState(false);
  const isSmallScreen = window.innerWidth <= 650;
  const pages = ['Home', 'Skills', 'Contact', 'Demos'];

  const toggleNav = () => {
    setOpen(!isOpen);
  };

  const handlePageClick = (page) => {
    handleSelection(page);
    setOpen(false); // Close the navigation when a new page is clicked
  };


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
            {page === 'Home' ? (
                <Link to="/" className={selected === 'Home' ? 'selected' : ''}>
                  {page}
                </Link>
              ) : (
                <Link
                  to={`/${page.toLowerCase()}`}
                  className={selected === page ? 'selected' : ''}
                >
                  {page}
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
