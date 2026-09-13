import type { Itech } from "../../types/types";
import { IoClose } from "react-icons/io5";

interface StackCardProps {
  selectedTechs: Itech[];
  handleRemoveFromStack: (id: number) => void;
  handleRemoveAllFromStack: () => void;
}

const StackCard = ({ selectedTechs, handleRemoveFromStack, handleRemoveAllFromStack }: StackCardProps) => {
  return (
    <section className="w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      {/* Header */}
      <div>
        <h2 className="text-lg font-bold text-slate-900">
          Your Stack
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          {selectedTechs.length} Technology
          {selectedTechs.length !== 1 ? "s" : ""} Selected
        </p>
      </div>

      {/* Selected Technologies */}
      <div className="mt-4 space-y-2">
        {selectedTechs.map((tech) => (
          <div
            key={tech.id}
            className="
              flex
              w-full
              items-center
              justify-between
              rounded-lg
              border
              border-slate-200
              px-3
              py-2.5
            "
          >
            {/* Left Side */}
            <div className="flex items-center gap-3">
              {/* Logo */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center">
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="h-8 w-8 object-contain"
                />
              </div>

              {/* Name + Category */}
              <div>
                <h3 className="text-xs font-semibold text-slate-900">
                  {tech.name}
                </h3>

                <p className="mt-0.5 text-[9px] text-slate-400">
                  {tech.category}
                </p>
              </div>
            </div>

            {/* Remove */}
            <button
            onClick={() => handleRemoveFromStack(tech.id)}
              type="button"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-md
                text-slate-400
                transition
                hover:bg-slate-50
                hover:text-slate-600
              "
            >
              <IoClose className="h-5 w-5 text-red-500" strokeWidth={1.5} />
            </button>
          </div>
        ))}
      </div>

      {/* Remove All */}
      <button
        onClick={handleRemoveAllFromStack}
        type="button"
        className="
          mt-12
          w-full
          rounded-lg
          border
          border-red-300
          bg-white
          px-4
          py-2
          text-sm
          font-semibold
          text-red-600
          transition
          hover:bg-red-50
        "
      >
        Remove All
      </button>
    </section>
  );
};

export default StackCard;