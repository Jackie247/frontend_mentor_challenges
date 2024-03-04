import React from 'react';
import Navbar from '../Navbar/Navbar';
import MobileNavbar from '../MobileNavbar/MobileNavbar';

export default function Header() {
  return (
    <header className="p-6 absolute z-20 bg-white w-full">
      <MobileNavbar />
      <Navbar />
    </header>
  );
}
