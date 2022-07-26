import React from 'react';
import './styles/NavBar.css';
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link className="link" to="/">Resume</Link></li>
        <li><Link className="link" to="/projects">Projects</Link></li>
        <li><Link className="link" to="/blog">Blog</Link></li>
        <li><Link className="link" to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
