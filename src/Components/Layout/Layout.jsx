import React, { useState , useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
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
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}
