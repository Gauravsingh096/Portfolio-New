import "../App.css";
function Education() {
  return (
    <div className=" media pb-4">
      <h1 className="text-3xl font-bold mb-4 text-[var(--primary-300)]">Education</h1>
      <div className="box flex justify-between">
        <div className="edu__name">
          <h2 className="text-lg font-medium">Pranveer Singh Institute of Technology</h2>
          <h3>Bachelor of Technology, Computer Science</h3>
        </div>
        <div className="edu__date">
          <h4>Expected 2026</h4>
          <h4>SGPA: 8.89 (3rd sem)</h4>
        </div>
      </div>
      <div className="box flex justify-between">
        <div className="edu__name ">
          <h2 className="text-lg font-medium">B.N.S.D. Shiksha Niketan Kanpur</h2>
          <h3>Intermediate</h3>
        </div>
        <div className="edu__date">
          <h4>April 2020 - March 2021</h4>
          <h4>Percentage: 81.2</h4>
        </div>
      </div>
      <div className="box flex justify-between">
        <div className="edu__name">
          <h2 className="text-lg font-medium">DD Education Centre Kanpur Nagar</h2>
          <h3>High School</h3>
        </div>
        <div className="edu__date">
          <h4>April 2018 - March 2019</h4>
          <h4>Percentage: 92.2</h4>
        </div>
      </div>
    </div>
  )
}

export default Education
