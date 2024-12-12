import "./ContactForm.css";

const ContactForm = () => {
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <input className="input input-name" type="text" placeholder="Name" />
      <input className="input input-email" type="email" placeholder="Email" />
      <textarea
        className="input input-message"
        placeholder="Message"
        rows={5}
      />
      <input className="input input-submit" type="submit" value="Submit" />
    </form>
  );
};

export default ContactForm;
