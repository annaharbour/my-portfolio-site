import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Links from './Links';
import { Spin as Hamburger } from 'hamburger-react'


function Nav({ selected, handleSelection }) {
  const [isOpen, setOpen] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 650);
  
  const pages = ['Home', 'Skills', 'Contact', 'Demos'];

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 650);
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
        <Hamburger className="hamburger" toggled={isOpen} toggle={setOpen} direction="left" color="#b267e6"/>
      </div>

      <nav className={isOpen ? 'open' : 'close'} style={{display: !isSmallScreen || isOpen ? 'block' : 'none'}}>

        <ul>
           {pages.map((page) => (
            <li key={page} onClick={() => handleSelection(page)}>
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
