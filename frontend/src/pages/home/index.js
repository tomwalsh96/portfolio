import React from 'react';
import NavBar from '../../components/layouts/NavBar';
import './styles/index.css';
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
              <p>A lifelong learner with a keen interest in all aspects of technology, I am always looking to push
              my boundaries and find my next challenge to tackle.</p>
              <p>I am a recent MSc Computer Science graduate, with many years of self taught programming under my belt. 
              Since graduation I have spent my time expanding my expertise into tools and languages not covered extensively 
              in the course.</p>
              <p>As I become increasingly comfortable with building quality production ready apps, I have begun the process of
              designing and releasing real world projects.</p>
              <p>I will use this personal website to document my professional progress, and to showcase my new projects as they 
              are released to the public.</p>
              <p>Stayed tuned!</p>
            </div>
          </div>
          <div className="content-item">
            <h2 className="content-heading">Education</h2>
            <div className="content-body">
              <h3 className="item-heading">MSc Computer Science</h3>
              <h4>University College Dublin</h4>
              <p className="time">2020 - 2022</p>
              <div className="item">
                <p>Covered a wide range of topics from software engineering to data science.</p>
                <p>Languages included Java, Python, Javascript, Bash.</p>
                <p>Frameworks included Django, React, Spring Boot, Hadoop, Spark.</p>
                <p>Hands-on with AWS products.</p>
                <p>Many group projects using agile development methodologies and git for code management.</p>
                <p>3.61 GPA (0 - 4.2 scale)</p>
              </div>
              <hr/>
              <h3 className="item-heading">Bachelor of Commerce</h3>
              <h4>University College Dublin</h4>
              <p className="time">2015 - 2019</p>
              <div className="item">
                <p>Particular interest in modules focused on financial analysis and information technology.</p>
              </div>
            </div>
          </div>
          <div className="content-item">
            <h2 className="content-heading">Experience</h2>
            <div className="content-body">
              <h3 className="item-heading">Research Practicum</h3>
              <h4>University College Dublin</h4>
              <p className="time">05/2021 - 08/2021</p>
              <div className="item">
                <p>Mobile-first web app using Django, React and MySQL. Deployed using docker-compose on AWS EC2.</p>
                <p>Full-time research and development group project, tasked with creating a replacement app for Dublin Bus with
                more accurate travel time predictions.</p>
                <p>My tasks included leading frontend development and code quality management, as well as helping with data
                analysis</p>
              </div>
              <hr/>
              <h3 className="item-heading">Marketing Internship</h3>
              <h4>Mission Ridge Ski Resort - Washington, USA</h4>
              <p className="time">01/2020 - 03/2020</p>
              <div className="item">
                <p>Created copy and design for marketing material such as newsletters and social media.</p>
                <p>Used Mailchimp to send targeted emails containing promotions, news and updates.</p>
                <p>Completed first draft marketing performance reports for my supervisor.</p>
                <p>Helped in the early design of a new company website.</p>
              </div>
            </div>
          </div>
          <div className="content-item">
            <h2 className="content-heading">Skills</h2>
            <div className="content-body">
              <h3 className="item-heading">Web Development, Full Stack</h3>
              <div className="item">
                <p>I have experience across a wide range of development stacks.</p>
                <p>React, Vue, Svelte, Node, Spring, serverless, MySQL, NoSQL</p>
                <p>CI/CD using Docker and AWS Codepipline</p>
              </div>
              <hr/>
              <h3 className="item-heading">Project Coordination</h3>
              <div className="item">
                <p>Agile methodology using Scrum, Jira, Git etc.</p>
                <p>Strict code review process.</p>
              </div>
              <hr/>
              <h3 className="item-heading">Data Analytics</h3>
              <div className="item">
                <p>From real world data to actionable models, including cleaning and training using CRISP-DM process.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
