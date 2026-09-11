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
    <section>
      <h2>Explore the Technologies</h2>
      <p>Pick one technology per category to build your ideal stack</p>
      <div>
        <div>
          <Suspense fallback={<h2>Loadinh....</h2>}>
            <Technologies techPromise={techPromise} />
          </Suspense>
        </div>
        <div>
            <Stack />
        </div>
      </div>
    </section>
  );
};

export default Explore;
