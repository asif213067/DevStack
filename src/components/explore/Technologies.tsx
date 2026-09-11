import type { Itech } from "../../types/types";
import TechCard from "./TechCard";

interface TechnologiesProps {
  technologies: Itech[];
  handleAddToStack: (tech: Itech) => void;
  selectedTechs: Itech[];
}

const Technologies = ({
  technologies,
  handleAddToStack,
  selectedTechs,
}: TechnologiesProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {technologies.map((tech: Itech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          handleAddToStack={handleAddToStack}
          selectedTechs={selectedTechs}
        />
      ))}
    </div>
  );
};

export default Technologies;
