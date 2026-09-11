import { Suspense, useState } from "react";
import type { Itech } from "../../types/types";
import Technologies from "./Technologies";
import Stack from "./Stack";

const techFetch = async (): Promise<Itech[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const Explore = () => {
  const [techPromise] = useState(() => techFetch());

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
            <Suspense
              fallback={
                <div className="flex min-h-40 w-full items-center justify-center rounded-xl border border-slate-200 bg-white">
                  <span className="loading loading-spinner loading-md text-primary" />
                </div>
              }
            >
              <Technologies techPromise={techPromise} />
            </Suspense>
          </div>

          {/* Stack */}
          <div className="min-w-0 lg:col-span-1">
            <Stack />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
