"use client";
import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <div className="container m-auto ">
        <div className="grid place-items-center">
          <h1>Contact</h1>
          <p>We are here to help, get in touch with us.</p>
          <form
            className="flex flex-col gap-5 py-5"
            onSubmit={(e) => {
              e.preventDefault();
              if (submitted) {
                return;
              }
              setName("");
              setEmail("");
              setMessage("");

              setSubmitted(true);
              console.log(name, email, message);
              fetch("/api/contact", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name,
                  email,
                  message,
                }),
              });
            }}
          >
            <div className="input_field flex flex-col gap-4 ">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="border-[2px] border-gray-500 p-2 rounded-md "
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                name="name"
                required
              />
            </div>
            <div className="input_field flex flex-col gap-4">
              <label htmlFor="email">email</label>
              <input
                type="email"
                className="border-[2px] border-gray-500 p-2 rounded-md "
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                required
              />
            </div>
            <div className="input_field flex flex-col gap-4">
              <label htmlFor="message">message</label>
              <textarea
                className="border-[2px] border-gray-500 p-2 rounded-md "
                id="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                name="message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 p-2 rounded-md text-xl"
            >
              {submitted ? "successfully" : "send"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
