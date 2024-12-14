import { Toaster, toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { contactSchema } from "../../Utils/schema";
import "./ContactForm.css";
import { useRef } from "react";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  type FormData = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });

  const sendEmail = async (form: HTMLFormElement, apiKey: string) => {
    try {
      const result: EmailJSResponseStatus = await emailjs.sendForm(
        "service_fl2efcs",
        "template_rbata4c",
        form,
        apiKey
      );
      console.log(result.text);
      toast.success("Message sent successfully");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        console.log(error);
      }
    }
  };

  const onSubmit = (data: FormData) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    if (form.current) {
      sendEmail(form.current, apiKey);
    }
    reset();
    console.log(data);
  };

  return (
    <>
      <form className="form" ref={form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input input-name"
          type="text"
          placeholder="Name"
          id="name"
          {...register("name")}
          autoComplete="off"
        />
        <input
          className="input input-email"
          type="email"
          placeholder="Email"
          id="email"
          {...register("email")}
          autoComplete="off"
        />
        <textarea
          className="input input-message"
          placeholder="Message"
          rows={5}
          id="message"
          {...register("message")}
          autoComplete="off"
        />
        {errors.name && toast.error(errors.name.message)}
        {errors.email && toast.error(errors.email.message)}
        {errors.message && toast.error(errors.message.message)}
        <button className="input input-submit" type="submit">
          Submit
        </button>
      </form>
      <Toaster richColors expand />
    </>
  );
};

export default ContactForm;
