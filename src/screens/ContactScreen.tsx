import { useState } from "react";
import { initialState, USER_EMAIL } from "../model";

const ContactScreen = () => {
  const [person, setPerson] = useState(initialState);

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    /* if (
      person.firstName === "" ||
      person.email === "" ||
      person.message === ""
    ) {
      alert("Please complete all fields");
    } else {
      window.location.href = `mailto:${USER_EMAIL}`;
      setPerson(initialState);
    } */
    setPerson(initialState);
  };

  return (
    <div className="contact">
      <div className="contact__container">
        <form action={`mailto:${USER_EMAIL}`} method="post" encType="text/plain" >
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChangeInput}
            value={person.firstName}
            required
            placeholder="Jane Doe"
            type="text"
            name="firstName"
            id="name"
            autoComplete="off"
          />
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChangeInput}
            value={person.email}
            required
            placeholder="email@website.com"
            type="email"
            name="email"
            id="email"
            autoComplete="off"
          />
          <label htmlFor="message">Message</label>
          <textarea
            onChange={handleChangeInput}
            value={person.message}
            required
            placeholder="What do you like to say?"
            name="message"
            id="message"
            cols={30}
            rows={10}
          ></textarea>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export { ContactScreen };
