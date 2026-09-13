import type { Itech } from "../../types/types";

interface TechCardProps {
  tech: Itech;
  handleAddToStack: (tech: Itech) => void;
  selectedTechs: Itech[];
}

const TechCard = ({
  tech,
  handleAddToStack,
  selectedTechs,
}: TechCardProps) => {
  const selectedBtn = selectedTechs.some(
    (item) => item.id === tech.id
  );

  return (
    <div
      className={`flex h-full flex-col rounded-2xl border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
        selectedBtn
          ? "border-pink-400 shadow-pink-100"
          : "border-slate-100"
      }`}
    >
      {/* Top */}
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center">
          <img
            src={tech.img}
            alt={`${tech.name} logo`}
            className="h-10 w-10 object-contain"
          />
        </div>

        <span className="rounded-full border border-sky-100 bg-sky-50 px-4 py-1.5 text-sm font-medium text-sky-500">
          {tech.badge}
        </span>
      </div>

      {/* Title */}
      <h2 className="mt-7 text-2xl font-semibold text-slate-900">
        {tech.name}
      </h2>

      {/* Description */}
      <p className="mt-1.5 text-[13px] leading-7 text-slate-500">
        {tech.description}
      </p>

      {/* Divider */}
      <div className="my-2.5 border-t border-slate-100" />

      {/* Meta Data */}
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-md bg-slate-100 px-3 py-1.5 text-[12px] font-bold text-slate-600">
          {tech.category}
        </span>

        <span className="text-[11px] font-bold text-slate-500">
          {tech.level}
        </span>

        <div className="flex items-center gap-1 text-sm font-semibold text-slate-700">
          <span className="text-[12px] font-bold text-amber-400">
            ★
          </span>

          <span className="text-[12px] font-bold">
            {tech.rating}
          </span>
        </div>
      </div>

      {/* Add / Selected Button */}
      <button
        onClick={() => handleAddToStack(tech)}
        type="button"
        className={`mt-5 w-full rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-300 ${
          selectedBtn
            ? "bg-pink-500 text-white shadow-md shadow-pink-200 hover:bg-pink-600 hover:shadow-lg"
            : "bg-slate-950 text-white shadow-sm hover:shadow-md hover:shadow-pink-200"
        }`}
      >
        {selectedBtn ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;