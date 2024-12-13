import ContactForm from "../ContactForm";
import Skills from "../Skills";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-wrapper">
        <ContactForm />
        <Skills />
      </div>
    </div>
  );
};

export default Contact;
