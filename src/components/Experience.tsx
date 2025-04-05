import "../App.css";

function Experience() {
  return (
    <div className="media pb-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-200)] to-[var(--primary-300)] relative pb-2">
        Experience
        <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-[var(--accent-100)] to-[var(--accent-200)]"></span>
      </h1>
      
      <div className="space-y-6">
        <div className="p-5 rounded-lg border border-gray-100 hover:border-[var(--primary-100)] transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <h2 className="text-xl font-bold text-[var(--accent-200)]">
              Software Developer Intern
            </h2>
            <span className="text-xs px-2 py-1 bg-[var(--primary-100)] text-white rounded-full">
              Jan 2024 - Present
            </span>
          </div>
          <ul className="space-y-2 pl-5 text-[var(--text-200)]">
            <li className="relative before:absolute before:-left-4 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[var(--primary-200)] transition-transform duration-200 hover:translate-x-1">
              Developed and maintained web applications using modern technologies
            </li>
            <li className="relative before:absolute before:-left-4 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[var(--primary-200)] transition-transform duration-200 hover:translate-x-1">
              Collaborated with cross-functional teams to deliver high-quality software solutions
            </li>
            <li className="relative before:absolute before:-left-4 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[var(--primary-200)] transition-transform duration-200 hover:translate-x-1">
              Implemented REST APIs and integrated third-party services
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
