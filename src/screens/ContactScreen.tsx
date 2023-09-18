const ContactScreen = () => {
  return (
    <div className="contact">
      <div className="contact__container">
        <form>
          <label htmlFor="name">Name</label>
          <input
          required
            placeholder="Jane Doe"
            type="text"
            name="firstName"
            id="name"
            autoComplete="off"
          />
          <label htmlFor="email">Email</label>
          <input
          required
            placeholder="email@website.com"
            type="email"
            name="email"
            id="email"
            autoComplete="off"
          />
          <label htmlFor="message">Message</label>
          <textarea
          required placeholder="What do you like to say?" name="message" id="message" cols={30} rows={10}></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export { ContactScreen };
