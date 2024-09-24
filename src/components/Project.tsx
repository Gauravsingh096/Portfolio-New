import "../App.css";
function Project() {
  return (
    <div className="media pb-4">
      <h1 className="text-3xl font-bold mb-4 text-[var(--primary-300)]">Projects</h1>
      <div className="">
        <div className="box">
          <a href="https://github.com/Aryankesharwani04/Journee"><h2 className="text-xl font-bold text-[var(--accent-200)]"><u>Journee</u></h2></a>
          <ul className="list-disc text-[var(--text-200)] pl-4 text-justify">
            <li> Developed a Tours and Travels Booking Website using the MERN stack.</li>
            <li>Designed and implemented the frontend using ReactJS.</li>
            <li>Created models for login, registration, and tour reviews using ExpressJS and MongoDB.</li>
            <li>Verified all routes and functionalities using Postman.</li>
            <li>Implemented robust backend functionalities and data management to handle client requests.</li>
            <li>Connected the frontend to the backend, enabling seamless data flow and user interaction.</li>
            <li>Deployed the application to a production environment, ensuring accessibility and scalability.</li>
          </ul>
        </div>
        <div className="box">
          <a href="https://github.com/Aryankesharwani04/javascriptBackend/tree/main/VideoStreaming"><h2 className="text-xl font-bold text-[var(--accent-200)]"><u>VideoFlix</u> <span>(In Progress)</span></h2></a>
          <ul className="list-disc text-[var(--text-200)] pl-4 text-justify">
            <li>Currently developing a video streaming application to learn and implement backend technologies.</li>
            <li> Using Express.js and tools like Postman, Cloudinary, MongoDB Atlas to manage backend operations and database interactions.</li>
            <li>Enhancing back-end development skills by handling various server-side tasks and integrating APIs.</li>
          </ul>
        </div>
        <div className="box">
          <a href="https://github.com/Aryankesharwani04/WebScrapping/tree/main/attendanceGetter"><h1 className="text-xl font-bold text-[var(--accent-200)]"><u>Attendance Scraping</u></h1></a>
          <ul className="list-disc text-[var(--text-200)] pl-4 text-justify">
            <li>Designed a web scraping tool using Node.js Puppeteer to automate the retrieval of attendance data from the college ERP portal.</li>
            <li>Deployed automated login to securely handle user authentication. </li>
            <li>Extracted and parsed HTML content to get total lecture and total absents.</li>
            <li>Acquired skills in web scraping, automated web interactions, and data extraction using Puppeteer.</li>
          </ul>
        </div>
        <div className="box">
          <a href="https://github.com/Aryankesharwani04/javascriptBackend/tree/main/CHESS"><h1 className="text-xl font-bold text-[var(--accent-200)]"><u>Chess Game</u></h1></a>
          <ul className="list-disc text-[var(--text-200)] pl-4 text-justify">
            <li>Built a live chess game using Express.js and Socket.io for real-time communication between users.</li>
            <li>Engineered chess moves logic and managed game state using Chess.js CDN.</li>
            <li>Utilized EJS to render content dynamically based on backend data, enhancing the user experience.</li>
            <li>Gained experience in bidirectional communication between web clients and servers, utilizing socket.on and socket.emit for seamless updates.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Project
