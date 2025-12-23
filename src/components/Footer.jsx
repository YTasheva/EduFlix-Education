const Footer = () => {
  const today = new Date();
  return (
    <footer className="mt-12 bg-gradient-to-r from-[#1d3557] to-[#2b4f73] text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold">EduFlix</h3>
          <p className="text-sm text-gray-200 mt-3 leading-relaxed">
            Curated education modules, tutorials, and live sessions to keep you
            learning and inspired.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-200">
            Contact
          </h4>
          <div className="mt-3 space-y-2 text-sm">
            <a
              href="tel:+5555555555"
              className="flex items-center gap-2 text-gray-100 hover:text-white"
            >
              <i className="fa-solid fa-phone text-gray-300" aria-hidden="true"></i>
              555.555.5555
            </a>
            <a
              href="mailto:ytasheva@website.com"
              className="flex items-center gap-2 text-gray-100 hover:text-white"
            >
              <i className="fa-regular fa-envelope text-gray-300" aria-hidden="true"></i>
              YTashevaGit@gmail.com
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-200">
            Connect
          </h4>
          <div className="mt-3 flex gap-4 text-lg">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github" aria-hidden="true"></i>
            </a>
            <a
              href="https://uk.linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>EduFlix Education © {today.getFullYear()}</span>
          <span className="text-gray-300">
            Built with React, Vite, and a love for learning by Yuliya Tasheva.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
