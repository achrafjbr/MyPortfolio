import Divider from "../Divider";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div>
      <h1 className="text-center">Welcome, {name}!</h1>
      <Divider padding="bt-10" />
      <h1 className="text-center text-gray-500">{email}!</h1>
      <Divider padding="bt-4" />
      <p className="text-center p-1">{message}</p>
      <Divider padding="bt-4" />
    </div>
  );
}
