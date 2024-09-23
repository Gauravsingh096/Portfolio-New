import "../App.css";
function Achivement() {
  return (
    <div className="media pb-4">
      <h1 className="text-3xl font-bold mb-4 text-[var(--primary-300)]">Achievements</h1>
      <ul className="text-[var(--text-200)]">
        <li>Solved 400+ Problems on <a className="text-[var(--text-100)] font-bold" href="https://leetcode.com/aryankesharwani04/"><u>LeetCode</u></a>. <br />Achieved a badge for 200 days.</li>
        <li>Achieved top 30% position in <a className="text-[var(--text-100)] font-bold" href="https://leetcode.com/aryankesharwani04/"><u>LeetCode</u></a> contests.</li>
        <li>4 stars in Problem Solving at <a className="text-[var(--text-100)] font-bold" href="https://www.hackerrank.com/profile/CS_2201640100088"><u>Hackerrank</u></a>.</li>
      </ul>
    </div>
  )
}

export default Achivement
