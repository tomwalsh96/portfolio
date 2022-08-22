import React from 'react';
import './styles/depro.css';
import NavBar from '../../components/layouts/NavBar';
import DeproLogo from '../../assets/images/depro_logo.svg';
import { FiExternalLink } from 'react-icons/fi';

export default function Depro() {
  return (
    <div className="depro">
      <header className="header">
        <div className="header-content">
          <NavBar />
          <div className="header-title">
            <img className="project-image" src={DeproLogo} alt="Depro Logo"></img>
            <div className="header-title-text">
              <h1 className="title">Depro</h1>
              <p>Under active development</p>
              <a
                className="demo-link"
                href="https://depro-e9104.web.app"
                target="_blank"
                rel="noreferrer"
              >
                See current test build <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="main">
        <div className="content">
          <div className="content-item">
            <h2 className="content-heading">Motivation</h2>
            <div className="content-body">
              <p>
                Depro is a productivity tool for Depop sellers. It automates the process of "refreshing" 
                items on a users account, a necessary task due to Depop biasing for newly published
                items on users feeds.
              </p>
              <p>
                My reason for developing this product is to solve a personal issue.
                I own and operate a Depop account which trades in vintage clothing. The account 
                has hundreds of items listed and so I have personally spent many hours manually 
                refreshing old items, thinking there must be a better way. I soon found a number 
                of services which offer an automated refreshing service, but all were clunky 
                and in my opinion overpriced.
              </p>
              <p>
                Hence, Depro was born! A sleek and affordable alternative to improve the productivity 
                of Depop sellers.
              </p>
            </div>
          </div>
          <div className="content-item">
            <h2 className="content-heading">Process</h2>
            <div className="content-body">
              <p>
                This is my first experience building a product for the chrome web store. I soon 
                found that Google security policies insist upon having no core functionality handled 
                by external code. This required me to rethink my usual application architecture.
              </p>
              <p>
                Unsure if my code would pass the Web Store review, I decided first to build a minimum 
                viable product which refreshed all items, but had no authentication or payments handling system. 
                This would allow me to use the app myself, while testing the water on Web Store policies.
                Luckily, the app passed review.
              </p>
              <p>
                Since then I have been developing the web-app to act as a landing page for users and to handle 
                onboarding and payments. I have decided to use stripe to handle payments, another new tool for me.
              </p>
            </div>
          </div>
          <div className="content-item">
            <h2 className="content-heading">Outcome</h2>
            <div className="content-body">
              <p>
                This is still an ongoing project, I have completed the minimum viable product and 
                I am now developing a website and payments infrastructure to charge for the service. 
                I hope to have a V1 product live soon and will then test the market for traction. 
                Should there be some uptake I hope to look for user feedback before introducing 
                new features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}