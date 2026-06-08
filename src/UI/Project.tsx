import Skill from "./skill";

function Project() {
  return (
    <div className=" rounded-2xl hover:shadow text-start p-9 outline-1 outline-gray-200">
      <p className="pb-1.5 font-semibold">E-commerce Platform</p>
      <p className="pb-1.5 text-gray-500">
        Une plateforme e-commerce complète avec panier, paiement et gestion des
        commandes
      </p>
      <div className="flex flex-wrap gap-2">
        <Skill name="NodeJs" />
        <Skill name="TypeScript" />
        <Skill name="React" />
        <Skill name="MongoDb" />
        <Skill name="Stripe" />
      </div>
    </div>
  );
}

export default Project;
