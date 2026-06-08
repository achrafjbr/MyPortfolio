interface Skills {
  name: string;
}
function Skill({ name }: Skills): React.JSX.Element {
  return <div className="bg-gray-100 rounded-2xl p-1.5">{name}</div>;
}

export default Skill;
