const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 lg:px-16">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-white">Uber</h1>
          <a href="/" className="text-gray-400 hover:text-white">
            Visit Help Center
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <h2 className="font-bold text-white mb-4">Company</h2>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="/" className="hover:text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  Our offerings
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  Newsroom
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  Investors
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-white mb-4">Products</h2>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="/" className="hover:text-white">
                  Ride
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  Drive
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  Deliver
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  Eat
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  Uber for Business
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  Uber Freight
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  Gift cards
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-white mb-4">Global citizenship</h2>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="/" className="hover:text-white">
                  Safety
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  Diversity and Inclusion
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-white mb-4">Travel</h2>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="/" className="hover:text-white">
                  Reserve
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  Cities
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
          <a href="/" className="hover:text-white">
            Do not sell or share my personal information
          </a>
          <a href="/" className="hover:text-white">
            Google Data Policy
          </a>
        </div>
        <div className="flex items-center gap-6 text-gray-400 text-2xl">
          <a href="/" className="hover:text-white">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="/" className="hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/" className="hover:text-white">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="/" className="hover:text-white">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="/" className="hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="flex gap-4 items-center text-sm">
          <a href="/" className="hover:text-white">
            🌐 English
          </a>
          <a href="/" className="hover:text-white">
            📍 Wichita
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
