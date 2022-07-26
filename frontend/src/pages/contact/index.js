import './styles/index.css';
import NavBar from '../../components/layouts/NavBar';
import { useState } from 'react';

export default function Contact() {

  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    console.log(contactInfo);
  };

  return (
    <div className="contact">
      <header className="header">
        <div className="header-content">
          <NavBar />
          <h1 className="title">Contact</h1>
        </div>
      </header>
      <div className="main">
        <div className="content">
          <form
            className="form"
            onSubmit={handleSubmit}
          >
            <div className="name">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name McNamerson"
                tabIndex="1"
                value={contactInfo.name}
                onChange={handleChange}
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                tabIndex="2"
                value={contactInfo.email}
                onChange={handleChange}
              />
            </div>
            <div className="message">
              <label htmlFor="message">Message</label>
              <textarea
                placeholder="Your message..."
                name="message"
                tabIndex="3"
                value={contactInfo.message}
                onChange={handleChange}
              />
            </div>
            <div className="form-submit">
              <button type="submit" className="send">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}