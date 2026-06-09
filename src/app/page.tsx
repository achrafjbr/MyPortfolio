import VuProjects from "../UI/home/VuProjects";
import MoreProjects from "../UI/home/MoreProjects";

export default function Home() {
  return (
    <section className="flex flex-col text-center items-center gap-y-1 pt-[7%]">
      <h1 className="text-5xl md:text-6xl mb-2 font-semibold  animate-text1 ">
        Bonjour, je suis Achraf El jabbar
      </h1>
      <p className="text-2xl md:text-3xl  mb-3 font-light text-gray-500 animate-text2">
        Développeur Fullstack & Flutter
      </p>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-centertext-gray-500 animate-text3">
        Passionné par la création d applications web modernes et performantes.
        Je transforme des idées en solutions numériques élégantes.
      </p>
      <VuProjects />
      <MoreProjects />
    </section>
  );
}
