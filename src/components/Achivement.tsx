import "../App.css";
function Achivement() {
  return (
    <div className="media pb-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-200)] to-[var(--primary-300)] relative pb-2">
        Achievements
        <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-[var(--accent-100)] to-[var(--accent-200)]"></span>
      </h1>
      <ul className="space-y-3 pl-6 text-[var(--text-200)]">
        <li className="transition-transform duration-200 hover:translate-x-1">
          Solved 450+ Problems on <a 
            className="text-[var(--text-100)] font-bold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--primary-200)] after:transition-all after:duration-300 hover:after:w-full" 
            href="https://leetcode.com/Gauravsingh096/"
          >
            LeetCode
          </a>
        </li>
        <li className="transition-transform duration-200 hover:translate-x-1">
          Achieved a badge for 200 days in <a 
            className="text-[var(--text-100)] font-bold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--primary-200)] after:transition-all after:duration-300 hover:after:w-full" 
            href="https://leetcode.com/GauravSingh096/"
          >
            LeetCode
          </a>
        </li>
        <li className="transition-transform duration-200 hover:translate-x-1">
          5 stars in Problem Solving at <a 
            className="text-[var(--text-100)] font-bold relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--primary-200)] after:transition-all after:duration-300 hover:after:w-full" 
            href="https://www.hackerrank.com/profile/CS_2201640100147"
          >
            Hackerrank
          </a>
        </li>
        <li className="transition-transform duration-200 hover:translate-x-1">
          Sea Guardian selected for <span className="text-[var(--text-100)] font-bold">GDSC Bootcamp 2024</span>, receiving recognition in the tech community
        </li>
        <li className="transition-transform duration-200 hover:translate-x-1">
          Rank 343: <span className="text-[var(--text-100)] font-bold">Coding Ninjas Tricolor Coding Fest</span>
        </li>
      </ul>
    </div>
  )
}

export default Achivement
