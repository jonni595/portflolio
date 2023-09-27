import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { initialState } from "../utils/model";

const ContactScreen = () => {
  const form = useRef<HTMLFormElement>(null);
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
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const { firstName, email, message } = person;

    if (!firstName || !email || !message) {
      return toast.error("Please complete the fields");
    }

    if (firstName.length < 7 || message.length < 10) {
      return toast.error("You must enter 8 characters minimum");
    }

    if (!regex.test(email)) {
      return toast.error("Wrong email");
    }

    if (!form.current) {
      console.log("Form is not available");
      return;
    }

    emailjs
      .sendForm(
        "service_fl2efcs",
        "template_rbata4c",
        form.current,
        "FYuqYKcBLR0x918JE"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );

    setPerson(initialState);
  };

  return (
    <div className="contact">
      <div className="contact__container">
        <form ref={form} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChangeInput}
            value={person.firstName}
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
            placeholder="What do you like to say?"
            name="message"
            id="message"
            cols={30}
            rows={10}
          ></textarea>
          <button type="submit" disabled={!person}>
            Submit
          </button>
        </form>
        <Toaster richColors expand />
      </div>
    </div>
  );
};

export { ContactScreen };
