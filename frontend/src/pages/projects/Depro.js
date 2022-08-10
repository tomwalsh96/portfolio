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
          <div className="content-item">
            <h2 className="content-heading">Motivation</h2>
            <div className="content-body">
              <p>
                Depro is a productivity tool for Depop sellers. It automates the process of "refreshing" 
                items on a users account, a task which is necessary due to Depop biasing newly published
                items on users feeds.
              </p>
              <p>
                I own and operate a Depop account which trades in vintage clothing. The account 
                has hundreds of items listed and so I have personally spent many hours manually 
                refreshing old items, thinking there must be a better way. I soon found a number 
                of services which offer an automated refreshing service, but all were clunky 
                and in my opinion overpriced.
              </p>
              <p>
                Hence, Depro was born! A sleek and affordable alternative to improve teh productivity 
                of Depop sellers.
              </p>
            </div>
          </div>
          <div className="content-item">
            <h2 className="content-heading">Process</h2>
            <div className="content-body">
              <p>
                This is my first experience with building a product for the chrome web store. I soon 
                found that Google security policies insist upon having no core functionality handled 
                by external code. This required me to rethink my usual application architecture.
              </p>
              <p>
                Unsure if my code would pass the Web Store review, I decided to first build a minimum 
                viable product which refreshed all items, but had no payments handling system. This 
                would allow me to use the app myself, while testing the water on Web Store policies.
                Luckily, the app passed review.
              </p>
            </div>
          </div>
          <div className="content-item">
            <h2 className="content-heading">Outcome</h2>
            <div className="content-body">
              <p>
                This is still an ongoing project, I have completed the minimum viable product and 
                am now developing a website and payments infrastructure to charge for the service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}