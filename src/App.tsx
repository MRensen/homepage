import './App.css'
import './components/terminal.css'
import {Terminal} from "./components/Terminal.tsx";


function App() {



    return (
        <main className="app-main">

            <Terminal bodyItems={[<p className="app-main-p">Hint: Type help</p>]}/>
        </main>
    )
}

export default App
