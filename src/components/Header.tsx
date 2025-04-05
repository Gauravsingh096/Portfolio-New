import profile from "../assets/profiles.png";
import "../App.css";
function Header() {
  return (
    <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row justify-between items-center gap-4">

      <div className="flex flex-col items-start justify-center gap-2">
        <div id="header"className="flex sm:flex-row flex-col items-start sm:items-center sm:justify-center gap-4">
          <h1 id="name" className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-200)] to-[var(--primary-300)] transition-transform duration-300 hover:scale-105">
            Gaurav Singh
          </h1>
          <a 
            href="mailto:2k22.cse.2213452@gmail.com" 
            id="hire" 
            className="relative px-4 py-2 text-sm font-bold rounded-lg overflow-hidden group"
          >
            <span className="relative z-10 text-white">Hire Me!</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[var(--accent-100)] to-[var(--accent-200)] opacity-90 group-hover:opacity-100 transition-all duration-300"></span>
          </a>
        </div>
        <p className="text-md font-bold text-justify text-[var(--text-200)]">
          Full Stack and Software Developer Engineer focused on learning through experimentation and product development.
        </p>
        <i className="ri-map-pin-2-line text-md flex justify-center items-end gap-1 text-[var(--accent-200)]"><h2 className="text-xl">Kanpur, India</h2></i>
        <div className="flex gap-5 mt-2">
          {[
            {icon: "ri-linkedin-box-fill", url: "https://www.linkedin.com/in/Gauravsingh096/"},
            {icon: "ri-github-fill", url: "https://github.com/Gauravsingh096"},
            {icon: "ri-mail-add-line", url: "mailto:2k22.cse.2213452@gmail.com"},
            {icon: "ri-twitter-x-line", url: "#"}
          ].map((social, index) => (
            <a 
              key={index} 
              href={social.url} 
              className="text-3xl text-[var(--accent-200)] transition-transform duration-200 hover:scale-110 hover:text-[var(--accent-100)]"
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="w-40 sm:w-60 aspect-square overflow-hidden rounded-full border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105">
        <img 
          src={profile} 
          alt="Gaurav Singh" 
          className="w-full h-full object-cover"
        />
      </div>


    </div>
  );
}

export default Header;
