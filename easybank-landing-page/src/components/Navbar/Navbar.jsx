import React from 'react';

export default function Navbar() {
  return (
    <nav className="hidden sm:block">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#careers">Careers</a></li>
      </ul>
    </nav>
  );
}
