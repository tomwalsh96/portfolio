import './styles/index.css';
import NavBar from '../../components/layouts/NavBar';
import { useState } from 'react';
import { API_BASE_URL } from '../../constants';

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
    event.preventDefault();
    const requestOptions = {
      method: 'PUT'
    };
    fetch(API_BASE_URL + `/api/v1/contact?name=${contactInfo.name}&fromEmail=${contactInfo.email}&body=${contactInfo.message}`, requestOptions)
        .then(response => {
          if (response.status === 200) {
            let error = document.getElementsByClassName("error-message")[0];
            error.style.display = "none";
            setContactInfo({ name: "", email: "", message: "" });
          } else {
            let error = document.getElementsByClassName("error-message")[0];
            error.style.display = "block";
          }
        })
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
                onInput={handleChange}
                required
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
                onInput={handleChange}
                required
              />
            </div>
            <div className="message">
              <label htmlFor="message">Message</label>
              <textarea
                placeholder="Your message..."
                name="message"
                tabIndex="3"
                value={contactInfo.message || ""}
                onInput={handleChange}
                required
              />
            </div>
            <div className="form-submit">
              <button type="submit" className="send">Send</button>
            </div>
            <div className="error-message">
              <p>Error sending message.</p>
              <p>If error continues please contact me at tomwalsh96@gmail.com.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}