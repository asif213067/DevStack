import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="border-b border-gray-100 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <a href="#" className="shrink-0">
            <img src={Logo} alt="DevStack Logo" className="h-7 w-auto" />
          </a>

          {/* Navigation */}
          <ul className="hidden items-center gap-5 md:flex lg:gap-7">
            <li>
              <a
                href="#"
                className="text-[14px] font-semibold text-pink-500 transition hover:text-pink-600"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[14px] font-semibold text-gray-600 transition hover:text-pink-500"
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[14px] font-semibold text-gray-600 transition hover:text-pink-500"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[14px] font-semibold text-gray-600 transition hover:text-pink-500"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[14px] font-semibold text-gray-600 transition hover:text-pink-500"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Authentication */}
          <div className="flex items-center gap-1">
            <button className="btn btn-ghost btn-xs font-semibold rounded-full px-4 py-4 text-[14px]">
              Sign In
            </button>

            <button className="btn btn-secondary btn-xs font-semibold rounded-full px-4 py-4 text-[14px] ">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
