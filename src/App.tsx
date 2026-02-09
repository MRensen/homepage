import './App.css'
import './components/terminal.css'
import {Terminal} from "./components/Terminal.tsx";
import {Routes, Route} from "react-router-dom";


function App() {



    return (

            <Routes>
                <Route path="/" element={
                    // <main className="app-main">
                        <Terminal bodyItems={[<p className="app-main-p">Hint: Type help</p>]}/>
                    // </main>
                }/>
                <Route path="/projects" element={<h1>Projects</h1>}/>
            </Routes>


    )
}

export default App
