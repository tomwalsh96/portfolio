import React from 'react';
import './styles/depro.css';
import NavBar from '../../components/layouts/NavBar';

export default function Depro() {
  return (
    <div className="depro">
      <header className="header">
        <div className="header-content">
          <NavBar />
          <h1 className="title">Depro</h1>
        </div>
      </header>
      <div className="main">
        <div className="content">
          <p>Nothing to show here yet...</p>
        </div>
      </div>
    </div>
  )
}