import "../App.css";
function Project() {
  return (
    <div className="media pb-4">
      <h1 className="text-3xl font-bold mb-4 text-[var(--primary-300)]">Projects</h1>
      <div className="">
        <div className="box">
          <a href="https://github.com/Gauravsingh096/ShrareRooms"><h2 className="text-xl font-bold text-[var(--accent-200)]"><u>Share Rooms</u> <span>(In Progress)</span></h2></a>
          <ul className="list-disc text-[var(--text-200)] pl-4 text-justify">
            <li>Created an intuitive hotel room booking platform with real-time availability and user-friendly navigation.</li>
            <li>Tech Stack: MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
            <li>Built a user-friendly room booking interface using React.js with dynamic room selection capabilities.</li>
            <li>Developed REST APIs using Express.js for booking management and user registration.</li>
            <li>Connected the frontend to the backend, enabling seamless data flow and user interaction.</li>
            <li>Incorporated feedback from users to enhance the booking flow and UI elements for a better user experience.</li>
            <li>Deployed the application to a production environment, ensuring accessibility and scalability.</li>
          </ul>
        </div>
        <div className="box">
          <a href="https://github.com/Gauravsingh096/Livestream-webapp"><h2 className="text-xl font-bold text-[var(--accent-200)]"><u>Livestream Webapp</u></h2></a>
          <ul className="list-disc text-[var(--text-200)] pl-4 text-justify">
            <li>Developed a video streaming web application with RTSP support and overlay management.</li>
            <li>Tech Stack: Flask, React.js, MongoDB</li>
            <li>Created a React-based UI for video playback and overlay controls.</li>
            <li>Implemented Flask APIs to handle video streaming and CRUD operations for overlays.</li>
            <li>Verified functionalities with Postman and deployed the application to ensure real-time video streaming.</li>
          </ul>
        </div>
        <div className="box">
          <a href="https://github.com/Gauravsingh096/PawsVedha"><h1 className="text-xl font-bold text-[var(--accent-200)]"><u>Paws Vedha</u> <span>(In Progress)</span></h1></a>
          <ul className="list-disc text-[var(--text-200)] pl-4 text-justify">
            <li>Developing a platform for virtual vet consultations, pet healthcare solutions, and an e-commerce marketplace.</li>
            <li>Tech Stack: MERN Stack</li>
            <li>Designed a user-friendly interface for virtual consultations and product browsing.</li>
            <li>Created backend APIs for vet services and e-commerce transactions, storing data in MongoDB.</li>
          </ul>
        </div>
        <div className="box">
          <a href="https://github.com/Gauravsingh096/Cabinix-A-cab-booking-Site"><h1 className="text-xl font-bold text-[var(--accent-200)]"><u>Cabinix</u></h1></a>
          <ul className="list-disc text-[var(--text-200)] pl-4 text-justify">
            <li>Developed a web-based cab booking platform using Firebase for authentication and Google Maps for real-time cab tracking.</li>
            <li>Tech Stack: Firebase, JavaScript, HTML, CSS</li>
            <li>Designed a responsive user interface and integrated Maps for enhanced booking and navigation experience.</li>
            <li>Developed secure user authentication using Firebase.</li>
          </ul>
        </div>
        <div className="box">
          <a href="https://github.com/ayushsharma-1/Marine-Pollution-SeaGuardian"><h1 className="text-xl font-bold text-[var(--accent-200)]"><u>Sea Guardian</u></h1></a>
          <ul className="list-disc text-[var(--text-200)] pl-4 text-justify">
           <li>Created a web platform to raise awareness and promote action against marine pollution.</li>
           <li>Tech Stack: MERN Stack and Firebase</li>
           <li>Built an engaging UI using React.js, collaborating with NGOs to display pollution data.</li>
           <li>Created APIs using Node.js and Express.js to handle user interactions and manage pollution statistics.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Project
