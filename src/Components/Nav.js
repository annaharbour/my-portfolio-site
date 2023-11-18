import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Links from './Links';
import useToggleState from '../hooks/useToggleState'

function Nav({ selected, handleSelection }) {
  const [isOpen, setIsOpen] = useState(false);
  const pages = ['Home', 'Skills', 'Contact', 'Demos'];
  // const [isOpen, setIsOpen] = useToggleState()

  return (
    <div>
      <Links />
      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        style={{ display: window.innerWidth <= 650 ? 'block' : 'none' }}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <nav style={{ display: window.innerWidth > 650 || isOpen ? 'block' : 'none' }}>
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
