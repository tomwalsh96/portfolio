import React from 'react';
import './styles/index.css';
import NavBar from '../../components/layouts/NavBar';
import DeproLogo from '../../assets/images/depro_logo.png';
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="projects">
      <header className="header">
        <div className="header-content">
          <NavBar />
          <h1 className="title">Projects</h1>
        </div>
      </header>
      <div className="main">
        <div className="content">
          <Link className="project-link project-item" to="depro">
            <div className="project-text">
              <h2 className="project-title">Depro</h2>
              <p className="product-type">Chrome Extension</p>
              <p className="description">A productivity tool for depop sellers</p>
            </div>
            <div className="project-image-container">
              <img className="project-image" src={DeproLogo} alt="Depro Logo"></img>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
