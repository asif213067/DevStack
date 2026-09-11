import Logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-100 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">

          {/* Mobile Menu Icon */}
          <button
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Menu"
          >
            <span className="h-0.5 w-6 bg-gray-500"></span>
            <span className="h-0.5 w-6 bg-gray-500"></span>
            <span className="h-0.5 w-6 bg-gray-500"></span>
          </button>

          {/* Logo */}
          <a href="#" className="shrink-0">
            <img
              src={Logo}
              alt="DevStack Logo"
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-6 md:flex lg:gap-8">
            <li>
              <a
                href="#"
                className="text-[14px] font-semibold text-pink-500"
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

          {/* Authentication Buttons */}
          <div className="flex items-center gap-1">
            <button className="rounded-full px-3 py-2 text-[12px] font-medium text-gray-600 transition hover:text-pink-500">
              Sign In
            </button>

            <button className="rounded-full bg-linear-to-r from-pink-500 to-pink-600 px-4 py-2 text-[12px] font-medium text-white shadow-sm transition hover:opacity-90">
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;