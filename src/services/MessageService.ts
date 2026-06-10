import { Resend } from "resend";
import { EmailTemplate } from "../UI/contact/EmailTemplate";
import { SendMesssage } from "../app/_types/messaging";

const resend = new Resend("re_jg67xdmF_EbmjpYaMQ7mHCCveRUPtpBFn");

export const sendMessageService = async ({
  message,
}: {
  message: SendMesssage;
}) => {
  try {
    const { data, error } = await resend.emails.send({
      ...message,
      to: "plauue@gmail.com",
      react: EmailTemplate({
        email: message.from,
        message: message.subject,
        name: message.name,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
};
