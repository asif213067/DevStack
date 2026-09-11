import BannarImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex min-h-0 flex-col items-center justify-center py-8 sm:py-10 md:min-h-[calc(100vh-56px)] md:flex-row md:justify-between md:gap-8 md:py-12 lg:gap-12">

          {/* Banner Content */}
          <div className="w-full text-center md:w-1/2 md:text-left">

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-[52px]">
              Build Your Ideal
              <br />

              <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-500 sm:text-lg md:mx-0">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits
              your next project.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex w-full items-center gap-3 justify-center sm:mt-7 md:justify-start">

              <button className="flex-1 rounded-lg bg-linear-to-r from-orange-500 to-pink-500 px-4 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90 sm:flex-none sm:px-5">
                Explore Technologies
              </button>

              <button className="flex-1 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 sm:flex-none sm:px-7">
                Learn More
              </button>

            </div>
          </div>

          {/* Banner Image */}
          <div className="mt-7 flex w-full justify-center md:mt-0 md:w-1/2 md:justify-end">
            <img
              src={BannarImg}
              alt="Development Stack"
              className="w-[80%] max-w-82.5 object-contain sm:w-[70%] sm:max-w-92.5 md:w-full md:max-w-100 lg:max-w-110"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;