import React from 'react';
import NavBar from '../../components/layouts/NavBar';
import './styles/index.css';
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Home() {
  return (
    <div className="home">
      <header className="header">
        <div className="header-content">
          <NavBar />
          <div className="greeting">
            <h1 className="greeting1">Tom Walsh</h1>
            <p className="greeting2">Software Engineer</p>
            <p className="greeting3">Dublin, Ireland</p>
          </div>
          <div className="header-buttons">
            <div className="social-button-background">
              <SocialIcon
                className="social-button"
                url="https://github.com/tomwalsh96"
                target="_blank"
              />
            </div>
            <div className="social-button-background">
              <SocialIcon
                className="social-button"
                url="https://linkedin.com/in/tomwalsh96"
                target="_blank"
                />
            </div>
          </div>
        </div>
      </header>
      <div className="main">
        <div className="content">
          <div className="content-item">
            <h2 className="content-heading">About Me</h2>
            <div className="content-body">
              <p>A junior Software Engineer with an entrepreneurial streak.</p>
              <p>I am a lifelong learner with an interest in all aspects of technology.</p>
              <p>Through my personal and professional life I continuously look for ways to automate processes
              through technology.</p>
            </div>
          </div>
          <div className="content-item">
          <h2 className="content-heading">Education</h2>
            <div className="content-body">
              <h3>MSc Computer Science</h3>
              <h4>University College Dublin</h4>
              <p>2020 - 2022</p>
              <p>Covered a wide range of topics from software engineering to data science, some modules I chose in the final
              semester include data mining, big data programming, machine learning, and distributed systems.</p>
              <p>Focus on Python, with exposure to other languages such as Javascript, Java and Bash.</p>
              <p>Many group projects completed, use of agile development methodologies and git for code management.</p>
              <p>3.61 GPA (0 - 4.2 scale)</p>
              <br/>
              <hr/>
              <br/>
              <h3>Bachelor of Commerce</h3>
              <h4>University College Dublin</h4>
              <p>2015 - 2019</p>
              <p>Particular interest in modules focused on financial markets and information technology.</p>
            </div>
          </div>
          <div className="content-item">
          <h2 className="content-heading">Experience</h2>
            <div className="content-body">
              <h3>Research Practicum</h3>
              <h4>University College Dublin</h4>
              <p>05/2021 - 08/2021</p>
              <p>Full-time research and development group project, tasked with creating a replacement app for Dublin Bus with
              more accurate travel time predictions.</p>
              <p>I took charge of frontend development, code quality management and data analysis.</p>
              <br/>
              <hr/>
              <br/>
              <h3>Marketing Internship</h3>
              <h4>Mission Ridge Ski Resort - Washington, USA</h4>
              <p>01/2020 - 03/2020</p>
              <p>Created copy and design for marketing material such as newsletters and social media.</p>
              <p>Used Mailchimp to send targeted emails containing promotions, news and updates.</p>
              <p>Completed first draft marketing performance reports for my supervisor.</p>
              <p>Helped in the early design of a new company website.</p>
            </div>
          </div>
          {/* <div className="content-item">
          <h2 className="content-heading">Accomplishements</h2>
            <div className="content-body">
              <h3>2nd place - Bank of Ireland FX Trade-Off</h3>
              <p>2017</p>
              <p>A forex trading competition was held by Bank of Ireland in partnership with Share Navigator.</p>
              <p>My result was a time-weighted return of 40.9% over a five-week trading period.</p>
              <p>My success can be attributed to a strong interest in geopolitics and an ability for adaptive 
              learning to discern patterns/trends.</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
