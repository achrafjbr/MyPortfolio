"use client";
import { ChangeEvent, useState } from "react";
import SendMessageButton from "./SendMessageButton";
import { SendMesssage } from "@/src/app/_types/messaging";

function SendMessage() {
  const [message, setMessage] = useState<SendMesssage>({
    from: "",
    name: "",
    subject: "",
    to: "",
  });

  const writeMessageHandler = (
    event: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    console.log("value: ", event.target.value);
    setMessage({ ...message, [event.target.name!]: event.target.value });
  };

  const sendMessgeHandler = () => {
    setMessage(message);
  };

  return (
    <section className="rounded-2xl outline-1 outline-gray-400 p-6">
      <p className="pb-1.5 font-mono">{"Envoyez-moi un message"}</p>
      <p className="pb-1.5 font-mono text-gray-500">
        {
          "Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais."
        }
      </p>

      <section className="flex flex-col gap-y-9 ">
        <label
          className="font-medium cursor-pointer flex flex-col"
          htmlFor="name"
        >
          Name
          <input
            onChange={(event) => writeMessageHandler(event)}
            className="bg-gray-100 border-0 outline-1 outline-gray-500 rounded p-1.5"
            type="text"
            name="name"
            id="name"
          />
        </label>

        <label
          className="font-medium cursor-pointer flex flex-col"
          htmlFor="email"
        >
          Email
          <input
            onChange={(event) => writeMessageHandler(event)}
            className="bg-gray-100 border-0 outline-1 outline-gray-500 rounded p-1.5"
            type="text"
            name="email"
            id="email"
          />
        </label>

        <label
          className="font-medium cursor-pointer flex flex-col"
          htmlFor="message"
        >
          Message
          <textarea
            onChange={(event) => writeMessageHandler(event)}
            className="bg-gray-100 border-0 outline-1 outline-gray-500 rounded p-2"
            name="message"
            id="message"
          ></textarea>
        </label>

        <SendMessageButton message={message} />
      </section>
    </section>
  );
}

export default SendMessage;
