"use client";
import { SendMesssage } from "@/src/app/_types/messaging";
import { sendMessageService } from "@/src/services/MessageService";
import { Send } from "lucide-react";

function SendMessageButton({ message }: { message: SendMesssage }) {
  return (
    <div>
      <div
        onClick={() => sendMessageService({ message })}
        className=" p-2 text-[0.8rem] cursor-pointer
         flex justify-center gap-x-2
        items-center  rounded
        text-white bg-[#030213]"
      >
        Envoyez le message
        <Send />
      </div>
    </div>
  );
}

export default SendMessageButton;
