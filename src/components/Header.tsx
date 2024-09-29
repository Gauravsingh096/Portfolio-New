import profile from "../assets/profile-img.png";
import "../App.css";
function Header() {
  return (
    <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row justify-between items-center gap-4">

      <div className="flex flex-col items-start justify-center gap-2">
        <div id="header"className="flex sm:flex-row flex-col items-start sm:items-center sm:justify-center gap-4">
          <h1 id="name" className="text-4xl font-bold">Aryan Kesharwani</h1>
          <a href="mailto:work.aryankesharwani04@gmail.com" id="hire" className="text-sm p-1 bg-[var(--primary-200)] text-[var(--accent-200)] rounded-lg font-bold">
            Hire Me!
          </a>
        </div>
        <p className="text-md font-bold text-justify text-[var(--text-200)]">
          Full Stack and Software Developer Engineer focused on learning through experimentation and product development.
        </p>
        <i className="ri-map-pin-2-line text-md flex justify-center items-end gap-1 text-[var(--accent-200)]"><h2 className="text-xl">Kanpur, India</h2></i>
        <div className="flex justify-between items-center gap-5 mt-2">
          <a href="https://www.linkedin.com/in/aryankesharwani04/">
            <i className="ri-linkedin-box-fill text-3xl text-[var(--accent-200)]"></i>
          </a>
          <a href="https://github.com/aryankesharwani04">
            <i className="ri-github-fill text-3xl text-[var(--accent-200)]"></i>
          </a>
          <a href="mailto:work.aryankesharwani04@gmail.com">
            <i className="ri-mail-add-line text-3xl text-[var(--accent-200)]"></i>
          </a>
          <a href="#">
            <i className="ri-twitter-x-line text-3xl text-[var(--accent-200)]"></i>
          </a>
        </div>
      </div>
      <div className="min-w-[100px] p-4 z-10 aspect-square w-40 sm:w-60">
        <img src={profile} alt="" className="w-full" />
      </div>
    </div>
  );
}

export default Header;
