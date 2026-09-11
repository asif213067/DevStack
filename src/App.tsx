import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Explore from "./components/explore/Explore";
import Nav from "./components/Nav";
import type { Itech } from "./types/types";
import Footer from "./components/Footer";

const techFetch = async (): Promise<Itech[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const App = () => {
  const [techPromise] = useState(() => techFetch());

  return (
    <>
      <Nav />
      <Banner />
      <Suspense
        fallback={
          <div className="flex min-h-40 w-full items-center justify-center rounded-xl border border-slate-200 bg-white">
            <span className="loading loading-spinner loading-md text-primary" />
          </div>
        }
      >
        <Explore techPromise={techPromise} />
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
