import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white px-6 py-10">
      <div className="container mx-auto flex flex-col items-center text-center gap-8 md:flex-row md:items-start md:justify-start md:gap-24 md:text-left">
        {/* Brand */}
        <div className="max-w-xs">
          <a href="#" className="inline-block shrink-0">
            <img src={Logo} alt="DevStack Logo" className="h-8 w-auto" />
          </a>

          <p className="mt-3 text-sm text-gray-500">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="mt-4 flex justify-center gap-2 text-sm text-gray-500 md:justify-start">
            <a href="#" className="hover:text-gray-900">
              GitHub
            </a>
            <span className="text-gray-300 md:hidden">•</span>
            <a href="#" className="hover:text-gray-900">
              Twitter
            </a>
            <span className="text-gray-300 md:hidden">•</span>
            <a href="#" className="hover:text-gray-900">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Links — hidden on mobile */}
        <div className="hidden md:flex md:gap-50">
          <div>
            <h4 className="text-xs font-semibold text-gray-900">PRODUCT</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900">Home</a></li>
              <li><a href="#" className="hover:text-gray-900">Technologies</a></li>
              <li><a href="#" className="hover:text-gray-900">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-900">COMPANY</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900">About</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-900">LEGAL</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto mt-8 flex flex-col-reverse items-center gap-3 border-t border-gray-100 pt-6 text-xs text-gray-400 md:flex-row md:justify-between">
        <p>&copy; 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-700">Privacy</a>
          <a href="#" className="hover:text-gray-700">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;