import Project from "../UI/Project";
import VuProjects from "../UI/VuProjects";

export default function Home() {
  return (
    <section className="flex flex-col pt-[10%] text-center items-center gap-y-1">
      <h1 className="text-5xl md:text-6xl mb-2  font-semibold">
        Bonjour, je suis Achraf El jabbar
      </h1>
      <p className="text-2xl md:text-3xl text-muted-foreground mb-3 font-light text-gray-500 ">
        Développeur Fullstack & Flutter
      </p>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-centertext-gray-500">
        Passionné par la création d applications web modernes et performantes.
        Je transforme des idées en solutions numériques élégantes.
      </p>

      <VuProjects />

      <section className="grid grid-cols-3 gap-6 mx-1 mt-7 ">
        <Project />
        <Project />
        <Project />
        <Project />
      </section>
    </section>
  );
}

//https://www.figma.com/make/j5c4HhXTsaMPWWoMGutGzF/Personal-Portfolio-Website?code-node-id=0-9&p=f&t=37GxjJksPa1yIvD9-0&fullscreen=1
