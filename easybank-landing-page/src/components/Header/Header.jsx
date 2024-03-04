import React from 'react';
import Navbar from '../Navbar/Navbar';
import MobileNavbar from '../MobileNavbar/MobileNavbar';

export default function Header() {
  return (
    <header>
      <MobileNavbar />
      <Navbar />
    </header>
  );
}
