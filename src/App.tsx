import './App.css'
import './components/Terminal/terminal.css'
import {Terminal} from "./components/Terminal/Terminal.tsx";
import {Routes, Route} from "react-router-dom";
import ProjectsPage from "./pages/projects/Projects.tsx";


function App() {



    return (

            <Routes>
                <Route path="/" element={
                    // <main className="min-h-screen pt-[60px] grid justify-center items-center">
                        <Terminal bodyItems={[<p className="app-main-p">Hint: Type help</p>]}/>
                    // </main>
                }/>
                <Route path="/projects/feedbacktool" element={
                    <ProjectsPage project="feedbacktool"/>
                }/>
                <Route path="/projects/dockerize" element={
                    <ProjectsPage project="dockerize"/>
                }/>
            </Routes>


    )
}

export default App
