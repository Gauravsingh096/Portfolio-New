import "../App.css";
function Project() {
  return (
    <div className="media pb-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-200)] to-[var(--primary-300)] relative pb-2">
        Projects
        <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-[var(--accent-100)] to-[var(--accent-200)]"></span>
      </h1>
      <div className="space-y-6">
        <div className="p-5 rounded-lg border border-gray-100 hover:border-[var(--primary-100)] transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <a 
              href="https://github.com/Gauravsingh096/ShrareRooms" 
              className="text-xl font-bold text-[var(--accent-200)] hover:text-[var(--accent-100)] transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--primary-200)] after:transition-all after:duration-300 hover:after:w-full"
            >
              Share Rooms
            </a>
            <span className="text-xs px-2 py-1 bg-[var(--primary-100)] text-white rounded-full">
              In Progress
            </span>
          </div>
          <ul className="space-y-2 pl-5 text-[var(--text-200)]">
            <li className="relative before:absolute before:-left-4 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[var(--primary-200)] transition-transform duration-200 hover:translate-x-1">
              Created an intuitive hotel room booking platform with real-time availability and user-friendly navigation.
            </li>
            <li>Tech Stack: MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
            <li>Built a user-friendly room booking interface using React.js with dynamic room selection capabilities.</li>
            <li>Developed REST APIs using Express.js for booking management and user registration.</li>
            <li>Connected the frontend to the backend, enabling seamless data flow and user interaction.</li>
            <li>Incorporated feedback from users to enhance the booking flow and UI elements for a better user experience.</li>
            <li>Deployed the application to a production environment, ensuring accessibility and scalability.</li>
          </ul>
        </div>
        <div className="p-5 rounded-lg border border-gray-100 hover:border-[var(--primary-100)] transition-all duration-300">
          <a 
            href="https://github.com/Gauravsingh096/Livestream-webapp" 
            className="text-xl font-bold text-[var(--accent-200)] hover:text-[var(--accent-100)] transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--primary-200)] after:transition-all after:duration-300 hover:after:w-full block mb-3"
          >
            Livestream Webapp
          </a>
          <ul className="space-y-2 pl-5 text-[var(--text-200)]">
            <li className="relative before:absolute before:-left-4 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[var(--primary-200)] transition-transform duration-200 hover:translate-x-1">
              Developed a video streaming web application with RTSP support and overlay management.
            </li>
            <li>Tech Stack: Flask, React.js, MongoDB</li>
            <li>Created a React-based UI for video playback and overlay controls.</li>
            <li>Implemented Flask APIs to handle video streaming and CRUD operations for overlays.</li>
            <li>Verified functionalities with Postman and deployed the application to ensure real-time video streaming.</li>
          </ul>
        </div>
        <div className="p-5 rounded-lg border border-gray-100 hover:border-[var(--primary-100)] transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <a 
              href="https://github.com/Gauravsingh096/PawsVedha" 
              className="text-xl font-bold text-[var(--accent-200)] hover:text-[var(--accent-100)] transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--primary-200)] after:transition-all after:duration-300 hover:after:w-full"
            >
              Paws Vedha
            </a>
            <span className="text-xs px-2 py-1 bg-[var(--primary-100)] text-white rounded-full">
              In Progress
            </span>
          </div>
          <ul className="space-y-2 pl-5 text-[var(--text-200)]">
            <li className="relative before:absolute before:-left-4 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[var(--primary-200)] transition-transform duration-200 hover:translate-x-1">
              Developing a platform for virtual vet consultations, pet healthcare solutions, and an e-commerce marketplace.
            </li>
            <li>Tech Stack: MERN Stack</li>
            <li>Designed a user-friendly interface for virtual consultations and product browsing.</li>
            <li>Created backend APIs for vet services and e-commerce transactions, storing data in MongoDB.</li>
          </ul>
        </div>
        <div className="p-5 rounded-lg border border-gray-100 hover:border-[var(--primary-100)] transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <a 
              href="https://github.com/Gauravsingh096/Cabinix-A-cab-booking-Site" 
              className="text-xl font-bold text-[var(--accent-200)] hover:text-[var(--accent-100)] transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--primary-200)] after:transition-all after:duration-300 hover:after:w-full"
            >
              Cabinix
            </a>
          </div>
          <ul className="space-y-2 pl-5 text-[var(--text-200)]">
            <li>Developed a web-based cab booking platform using Firebase for authentication and Google Maps for real-time cab tracking.</li>
            <li>Tech Stack: Firebase, JavaScript, HTML, CSS</li>
            <li>Designed a responsive user interface and integrated Maps for enhanced booking and navigation experience.</li>
            <li>Developed secure user authentication using Firebase.</li>
          </ul>
        </div>
        <div className="p-5 rounded-lg border border-gray-100 hover:border-[var(--primary-100)] transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <a 
              href="https://github.com/ayushsharma-1/Marine-Pollution-SeaGuardian" 
              className="text-xl font-bold text-[var(--accent-200)] hover:text-[var(--accent-100)] transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--primary-200)] after:transition-all after:duration-300 hover:after:w-full"
            >
              Sea Guardian
            </a>
          </div>
          <ul className="space-y-2 pl-5 text-[var(--text-200)]">
            <li className="relative before:absolute before:-left-4 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[var(--primary-200)] transition-transform duration-200 hover:translate-x-1">
              Created a web platform to raise awareness and promote action against marine pollution.
            </li>
            <li className="relative before:absolute before:-left-4 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[var(--primary-200)] transition-transform duration-200 hover:translate-x-1">
              Tech Stack: MERN Stack and Firebase
            </li>
            <li className="relative before:absolute before:-left-4 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[var(--primary-200)] transition-transform duration-200 hover:translate-x-1">
              Built an engaging UI using React.js, collaborating with NGOs to display pollution data.
            </li>
            <li className="relative before:absolute before:-left-4 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[var(--primary-200)] transition-transform duration-200 hover:translate-x-1">
              Created APIs using Node.js and Express.js to handle user interactions and manage pollution statistics.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Project
