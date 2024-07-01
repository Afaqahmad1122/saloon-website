import React from "react";

const Form = () => {
  return (
    <form className="flex flex-col gap-4">
      <input type="text" className="input" placeholder="Full name" />
      <input type="text" className="input" placeholder="Email address" />
      <input type="text" className="input" placeholder="Phone number" />
      <textarea placeholder="Your message" className="textarea mb-2"></textarea>
      <button type="submit" className="btn self-start">
        Send message
      </button>
    </form>
  );
};

export default Form;
