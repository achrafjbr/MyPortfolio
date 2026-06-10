import OutlookMessage from "@/src/UI/contact/OutlookMessage";
import SendMessage from "@/src/UI/contact/SendMessage";
import SocialMediaProfile from "@/src/UI/contact/SocialMediaProfile";
import Divider from "@/src/UI/Divider";
import Link from "next/link";
import React from "react";

function Contact(): React.JSX.Element {
  return (
    <section className="pt-[7%] px-[10%] w-full">
      <h1 className="text-5xl md:text-6xl mb-2 font-semibold text-center  animate-text1 ">
        Contactez-moi
      </h1>
      <p className="text-lg text-center max-w-2xl mx-auto mb-8 text-gray-500 animate-text3">
        N&apos;hésitez pas à me contacter pour discuter de vos projets ou
        opportunités de collaboration.
      </p>
      <section className="grid grid-cols-2 gap-30">
        <SendMessage />

        <div className="flex flex-col gap-y-4">
          <section className="rounded-2xl outline-1 flex flex-col gap-y-6 outline-gray-400 p-6">
            <p className="pb-1.5 font-mono">{"Informations de contact"}</p>
            <OutlookMessage />
          </section>

          <section className="rounded-2xl outline-1 outline-gray-400 p-6">
            <p className="pb-1.5 font-mono">Réseaux sociaux</p>

            <div className="flex flex-col gap-y-4">
              <Link href={"https://github.com/achrafjbr"} target="_blank">
                <SocialMediaProfile
                  contact={{ image: "/github.png", platform: "Github" }}
                />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/achraf-el-jabbar-a28892320/"}
                target="_blank"
              >
                <SocialMediaProfile
                  contact={{ image: "/linkedIn.png", platform: "LinkedIn" }}
                />
              </Link>
            </div>
          </section>
        </div>
      </section>

      <Divider padding="pb-5" />
    </section>
  );
}

export default Contact;
