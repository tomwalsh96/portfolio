import React from 'react';
import './styles/index.css';
import NavBar from '../../components/layouts/NavBar';

export default function Blog() {
  return (
    <div className="blog">
      <header className="header">
        <div className="header-content">
          <NavBar />
          <h1 className="title">Blog</h1>
        </div>
      </header>
      <div className="main">
        <div className="content">
          {/* <div className="blog-item">
            <h2 className="blog-title">I just had an idea</h2>
            <p className="blog-date">July 23rd, 2022</p>
            <div className="blog-content">
              <p>Some thoughts, as they happen.</p>
            </div>
          </div> */}
          <p>Nothing to show here yet...</p>
        </div>
      </div>
    </div>
  )
}
