import "../App.css";
function Achivement() {
  return (
    <div className="media pb-4">
      <h1 className="text-3xl font-bold mb-4 text-[var(--primary-300)]">Achievements</h1>
      <ul className="list-disc pl-6 text-[var(--text-200)]">
        <li>Solved 450+ Problems on <a className="text-[var(--text-100)] font-bold" href="https://leetcode.com/Gauravsingh096/"><u>LeetCode</u></a>.</li>
        <li>Achieved a badge for 200 days in <a className="text-[var(--text-100)] font-bold" href="https://leetcode.com/GauravSingh096/"><u>LeetCode</u></a>.</li>
        {/* <li>Achieved top 30% position in <a className="text-[var(--text-100)] font-bold" href="https://leetcode.com/aryankesharwani04/"><u>LeetCode</u></a> contests.</li> */}
        <li>5 stars in Problem Solving at <a className="text-[var(--text-100)] font-bold" href="https://www.hackerrank.com/profile/CS_2201640100147"><u>Hackerrank</u></a>.</li>
        <li> Sea Guardian selected for <b>GDSC Bootcamp 2024,</b> receiving recognition in the tech community </li>
        <li> Rank 343: <b>Coding Ninjas Tricolor Coding Fest</b></li>
      </ul>
    </div>
  )
}

export default Achivement
