
import './App.css'
import Header from './components/Header';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import Education from './components/Education';
import Achivement from './components/Achivement';
function App() {
  
  return (
    <>
      <div className="bg-[var(--bg-100)] text-[var(--text-100)] flex justify-center items-center h-full w-screen">
        <div className="flex-column justify-between items-center h-full w-[700px] m-6 ">
          <Header/>
          <About/>
          <Skill/>
          <Project/>
          <Achivement/>
          <Education/>
        </div>
      </div>
    </>
  )
}

export default App
