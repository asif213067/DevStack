import { use } from "react";
import type { Itech } from "../../types/types";
import TechCard from "./TechCard";

interface TechnologiesProps {
    techPromise: Promise<Itech[]>;
}

const Technologies = ({techPromise}: TechnologiesProps) => {

  const technologies = use(techPromise);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {technologies.map((tech) => (
        <TechCard key={tech.id} tech={tech} />
      ))}
    </div>
  )
}

export default Technologies