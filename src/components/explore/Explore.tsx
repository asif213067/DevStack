import { use, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Technologies from "./Technologies";
import Stack from "./Stack";
import StackCard from "./StackCard";

import type { Itech } from "../../types/types";

interface ExploreProps {
  techPromise: Promise<Itech[]>;
}

const Explore = ({ techPromise }: ExploreProps) => {
  const technologies = use(techPromise);

  const [selectedTechs, setSelectedTechs] = useState<Itech[]>([]);

  // Add technology
  const handleAddToStack = (tech: Itech) => {
    setSelectedTechs((previousTechs) => {
      const alreadySelected = previousTechs.some(
        (item) => item.id === tech.id,
      );

      // Duplicate
      if (alreadySelected) {
        toast.warning(`${tech.name} is already in your stack!`);
        return previousTechs;
      }

      // Successfully added
      toast.success(`${tech.name} added to your stack!`);

      return [...previousTechs, tech];
    });
  };

  // Remove technology
  const handleRemoveFromStack = (id: number) => {
    setSelectedTechs((previousTechs) => {
      const techToRemove = previousTechs.find(
        (tech) => tech.id === id,
      );

      if (techToRemove) {
        toast.info(
          `${techToRemove.name} removed from your stack.`,
        );
      }

      return previousTechs.filter((tech) => tech.id !== id);
    });
  };

  // Remove all technologies
  const handleRemoveAllFromStack = () => {
    setSelectedTechs((previousTechs) => {
      if (previousTechs.length === 0) {
        return previousTechs;
      }

      toast.error("All technologies removed from your stack.");

      return [];
    });
  };

  return (
    <>
      <ToastContainer position="bottom-right" />

      <section className="w-full px-3 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">

          {/* Section Header */}
          <div className="mb-5 sm:mb-6">
            <h2 className="text-lg font-bold tracking-tight text-slate-900 sm:text-2xl">
              Explore{" "}
              <span className="text-brand-gradient">
                Technologies
              </span>
            </h2>

            <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
              Pick one technology per category to build your ideal stack
            </p>
          </div>

          {/* Main Layout */}
          <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-4 lg:items-start lg:gap-6">

            <div className="min-w-0 lg:col-span-3">
              <Technologies
                technologies={technologies}
                handleAddToStack={handleAddToStack}
                selectedTechs={selectedTechs}
              />
            </div>

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
    </>
  );
};

export default Explore;