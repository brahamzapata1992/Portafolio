import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaBehance,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import "./Contact.css";

const Contact = () => {
  const { darkMode } = useTheme();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const to = "brahamzapata1992@gmail.com";
    const subject = encodeURIComponent(form.subject || "New message from portfolio");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <div className={`contact-page ${darkMode ? "dark" : "light"}`}>
      <header className="contact-hero">
        <h1 className="contact-title">
          GET IN <span>TOUCH</span>
        </h1>
        <div className="contact-watermark">CONTACT</div>
      </header>

      <section className="contact-panel">
        <h2 className="contact-subtitle">DON&apos;T BE SHY !</h2>
        <p className="contact-desc">
          Feel free to get in touch with me. I am always open to discussing new projects,
          creative ideas or opportunities to be part of your visions.
        </p>

        <div className="contact-info">
          <div className="contact-info-row">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div>
              <div className="contact-info-label">MAIL ME</div>
              <div className="contact-info-value">brahamzapata1992@gmail.com</div>
            </div>
          </div>

          <div className="contact-info-row">
            <div className="contact-icon">
              <FaPhoneAlt />
            </div>
            <div>
              <div className="contact-info-label">CALL ME</div>
              <div className="contact-info-value">+1 470-383-1727</div>
            </div>
          </div>

          <div className="contact-social">
            {/* Cambia los href cuando tengas links reales */}
            <a className="social-btn" href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a className="social-btn" href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a className="social-btn" href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a className="social-btn" href="#" aria-label="Behance">
              <FaBehance />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <input
            className="contact-input"
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="YOUR NAME"
            autoComplete="name"
            required
          />

          <input
            className="contact-input"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="YOUR EMAIL"
            type="email"
            autoComplete="email"
            required
          />

          <input
            className="contact-input"
            name="subject"
            value={form.subject}
            onChange={onChange}
            placeholder="YOUR SUBJECT"
          />

          <textarea
            className="contact-textarea"
            name="message"
            value={form.message}
            onChange={onChange}
            placeholder="YOUR MESSAGE"
            rows={6}
            required
          />

          <button className="contact-submit" type="submit">
            SEND MESSAGE
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
