import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    //highlight word
  const [activeLink, setActiveLink] = useState(null);

  // Function to handle link click
  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  };

  const clearHighlights = () => {
    setActiveLink(null);
  };
      //scroll
      const [isShrunk, setIsShrunk] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
          setIsShrunk(window.scrollY > 0);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <>
        <nav className={`navbar navbar-expand-lg position-fixed ${isShrunk ? 'shrink' : ''}`}>
            <div className="container text-uppercase">
                <h1><Link onClick={clearHighlights} className="navbar-brand py-4 text-light" to="/home">Start Framework</Link></h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item  py-lg-4 py-md-2">
                    
                    <Link onClick={() => handleLinkClick('about')} className={`nav-link text-light mx-2 ${activeLink === 'about' ? 'highlighted' : ''}`} to="/about">About</Link>
                    
                    </li>
                    <li className="nav-item  py-lg-4 py-md-2">
                    
                    <Link onClick={() => handleLinkClick('portfolio')} className={`nav-link text-light mx-2 ${activeLink === 'portfolio' ? 'highlighted' : ''}`} to="/portfolio">Portfolio</Link>
                    
                    </li>
                    <li className="nav-item  py-lg-4 py-md-2">
                    
                    <Link onClick={() => handleLinkClick('contact')} className={`nav-link text-light mx-2 ${activeLink === 'contact' ? 'highlighted' : ''}`} to="/contact">Contact</Link>
                    
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
