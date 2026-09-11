import { use, useState } from "react";
import Technologies from "./Technologies";
import Stack from "./Stack";
import type { Itech } from "../../types/types";
import StackCard from "./StackCard";

interface ExploreProps {
  techPromise: Promise<Itech[]>;
}

const Explore = ({ techPromise }: ExploreProps) => {
  const technologies = use(techPromise);

  // Selected technologies
  const [selectedTechs, setSelectedTechs] = useState<Itech[]>([]);

  // Add technology to stack
  const handleAddToStack = (tech: Itech) => {
    setSelectedTechs((previousTechs) => {
      const alreadySelected = previousTechs.some((item) => item.id === tech.id);

      if (alreadySelected) {
        return previousTechs;
      }

      return [...previousTechs, tech];
    });
  };

  // Remove technology to stack
  const handleRemoveFromStack = (id: number) => {
    setSelectedTechs((previousTechs) =>
      previousTechs.filter((tech) => tech.id !== id),
    );
  };

  // Remove All technology to stack
  const handleRemoveAllFromStack = () => {
    setSelectedTechs([]);
  };

  return (
    <section className="w-full px-3 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <div className="mb-5 sm:mb-6">
          <h2 className="text-lg font-bold tracking-tight text-slate-900 sm:text-2xl">
            Explore the{" "}
            <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
            Pick one technology per category to build your ideal stack
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-4 lg:items-start lg:gap-6">
          {/* Technologies */}
          <div className="min-w-0 lg:col-span-3">
            <Technologies
              technologies={technologies}
              handleAddToStack={handleAddToStack}
              selectedTechs={selectedTechs}
            />
          </div>

          {/* Stack */}
          <div className="min-w-0 lg:col-span-1">
            {selectedTechs.length === 0 ? (
              <Stack />
            ) : (
              <StackCard
                selectedTechs={selectedTechs}
                handleRemoveFromStack={handleRemoveFromStack}
                handleRemoveAllFromStack={handleRemoveAllFromStack}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
