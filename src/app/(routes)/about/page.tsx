import Divider from "@/src/UI/Divider";
import Image from "next/image";
function About(): React.JSX.Element {
  return (
    <section className="">
      <div className="w-full h-64 flex justify-center items-center animate-text1">
        <Image
          src="/avatar.jpeg"
          alt="Profile"
          width={200}
          height={200}
          className="rounded-full object-cover"
        />
      </div>
      <h1 className="text-4xl md:text-5xl mb-2 font-semibold text-center animate-text2 ">
        À propos de moi
      </h1>
      <p className="  text-muted-foreground max-w-2xl mx-auto mb-8 text-center text-gray-500 animate-text3">
        Développeur passionné avec plus de 3 ans d'expérience dans la création
        d'applications mobile modernes. J'aime résoudre des problèmes complexes
        et créer des expériences utilisateur exceptionnelles. Toujours en quête
        d'apprentissage et d'amélioration continue.
      </p>
      <p className="lg:text-2xl md:text-[0.8rem] font-semibold">
        Expérience professionnelle
      </p>
      <Divider padding="pb-5" />
      <div className=" rounded  text-start p-2 outline-1 outline-gray-300">
        <p className="pb-1 font-mono">Développeur Fullstack Senior</p>

        <p className="pb-5 text-gray-500 font-mono">
          Tech Solutions Inc. • 2022 - Présent
        </p>
        <p className="pb-1 text-gray-500 text-[0.9rem] w-[70%] font-mono">
          Développement d'applications web avec React, Node.js et PostgreSQL.
          Lead technique sur plusieurs projets d'envergure avec une équipe de 5
          développeurs.
        </p>
      </div>
      <Divider padding="pb-3.5" />

      <div className=" rounded  text-start p-2 outline-1 outline-gray-300">
        <p className="pb-1 font-mono">Développeur Frontend</p>

        <p className="pb-5  text-gray-500 font-mono">
          Digital Agency • 2020 - 2022
        </p>
        <p className="pb-1 text-gray-500 text-[0.9rem] w-[70%] font-mono">
          Création d'interfaces utilisateur modernes et responsive.
          Spécialisation en React et TypeScript avec intégration de design
          systems.
        </p>
      </div>

      <Divider padding="pb-3.5" />
      <div className=" rounded  text-start p-2 outline-1 outline-gray-300">
        <p className="pb-1 font-mono">Développeur Web Junior</p>

        <p className="pb-5 text-gray-500 font-mono">
          StartUp Innovante • 2018 - 2020
        </p>
        <p className="pb-1 text-gray-500 text-[0.9rem] w-[70%] font-mono">
          Premier poste en développement web. Apprentissage des technologies
          frontend et backend, participation à des projets agiles.
        </p>
      </div>

      <Divider padding="pb-5" />
      <p className="lg:text-2xl md:text-[0.8rem] font-semibold">Formation</p>
      <Divider padding="pb-5" />

      <div className=" rounded  text-start p-2 outline-1 outline-gray-300">
        <p className="pb-1 font-mono">Licence Informatique</p>

        <p className="pb-5  text-gray-500 font-mono">
          Université de Lyon • 2013 - 2016
        </p>
        <p className="pb-1 text-gray-500 text-[0.9rem] w-[70%] font-mono">
          CFormation générale en informatique couvrant programmation,
          algorithmes, bases de données et réseaux. systems.
        </p>
      </div>

      <Divider padding="pb-3.5" />
      <div className=" rounded  text-start p-2 outline-1 outline-gray-300">
        <p className="pb-1 font-mono">Master Informatique</p>

        <p className="pb-5 text-gray-500 font-mono">
          Université de Paris • 2016 - 2018
        </p>
        <p className="pb-1 text-gray-500 text-[0.9rem] w-[70%] font-mono">
          Spécialisation en développement web et applications distribuées.
          Projet de fin d'études sur l'architecture microservices.
        </p>
      </div>
      <Divider padding="pb-5" />
    </section>
  );
}

export default About;
