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
          <div className="blog-item">
            <div className="blog-body">
              <h3 className="blog-heading">Money, Money, Money</h3>
              <p className="time">10th August 2022</p>
              <div className="section">
                <p>Last week I deployed this website! I tried my hand at a new deployment flow, using AWS CodePipline 
                to handle CI/CD, and deploying to an Elastic Beanstalk environment. After I overcame a few hurdles the process  
                was complete and my website was live!</p>
                <p>A few days later reality kicked in. I was incurring charges of $0.93 per day, for a simple website with very 
                low traffic flow. This was my first experience with paying high fees and I was shocked. For previous project deployements 
                I had used services like Firebase or Vercel hosting with free tiers, or on AWS I was still covered by my 12 months of 
                free compute credits.</p>
                <p>While roughly $30 per month won't break the bank, it was certainly an overspend, so I set about cost optimisation. I still 
                wanted to maintain my current architecture, as I have ambitions to expand upon the utility of this personal website in the 
                future.</p>
                <p>With this in mind, I began looking for solutions. The largest cost by far was the Elastic Load Balancer. After a quick 
                bit of reasearch I found that I could set up my Elastic Beanstalk environment to use a single instance environment and forgo 
                the load balancer. I do not forsee any need for dynamic resource allocation in the near future, so this solution will work. 
                However, this created a new issue. I requested an SSL certificate for my domain and AWS certificate manager was using the load 
                balancer ARN to allow secure connection to the website through the https. After playing around with the idea of manually enabling 
                https by configuring the Nginx proxy, I found an more straightforward solution. I can use AWS CloudFront with the AWS certificate 
                manager to allow secure connection, and then have CloudFront communicate with the application.</p>
                <p>My costs are now down to $0.33 per day, a far more reasonable level.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
