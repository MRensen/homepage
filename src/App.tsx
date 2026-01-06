import './App.css'

function App() {

    return (
        <>
            <div className="term" role="region" aria-label="Linux terminal">
                <div className="term__titlebar">
                    <div className="term__left">
                        <div className="term__appicon" aria-hidden="true"></div>
                        <span className="term__title">Terminal</span>
                    </div>

                    <div className="term__title">mark@homepage: ~/project</div>

                    <div className="term__winbtns" aria-hidden="true">
                        <div className="btn" title="Minimize">–</div>
                        <div className="btn" title="Maximize">□</div>
                        <div className="btn btn--close" title="Close">×</div>
                    </div>
                </div>

                <div className="term__body" aria-label="Terminal output">
                    <span className="line">
                        <span className="user">mark</span><span className="prompt">@</span><span className="host">homepage</span><span
                          className="prompt">:</span><span className="path">~</span><span className="prompt">$</span>
                        <span className="cmd"> neofetch</span>
                    </span>

                    <span className="line"></span>

                    <span className="line out neoRow">
                        <span className="neoArt" aria-hidden="true">
  <span className="neoArtLine">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</span>
  <span className="neoArtLine">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</span>
  <span className="neoArtLine">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</span>
  <span className="neoArtLine">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</span>
  <span className="neoArtLine">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</span>
  <span className="neoArtLine">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</span>
  <span className="neoArtLine">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</span>
  <span className="neoArtLine">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠈⢻⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</span>
  <span className="neoArtLine">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢆⠀⠀⠙⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</span>
  <span className="neoArtLine">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢧⠀⠀⠘⢿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</span>
  <span className="neoArtLine">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡆⠀⠀⠘⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</span>
  <span className="neoArtLine">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⠃⠀⠀⠀⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</span>
  <span className="neoArtLine">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⠃⠀⠀⠀⠀⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</span>
  <span className="neoArtLine">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡏⣀⣀⣀⠀⡜⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</span>
  <span className="neoArtLine">⠀⠀⠀⠀⠀⠀⠀⣀⡤⠤⠒⠒⠋⠉⠉⠻⣧⠀⠀⠀⠈⠉⠁⠀⠀⠀⠢⢄⠀⠀⠀⠀⠀⠀⠀⠀</span>
  <span className="neoArtLine">⠀⠀⠀⠀⠀⠀⣾⣿⠀⠀⠀⠀⣀⣀⣀⣀⣤⣽⣦⣄⣀⣀⣀⣀⠀⠀⠀⠀⢹⠀⠀⠀⠀⠀⠀⠀</span>
  <span className="neoArtLine">⠀⠀⠀⠀⠀⠀⣿⣿⣿⠷⠾⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠶⠚⠀⠀⠀⠀⠀⠀⠀⠀</span>
  <span className="neoArtLine">⠀⠀⠀⠀⠀⠀⢿⣿⡏⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⣸⠛⠻⣷⠀⠀⠀</span>
  <span className="neoArtLine">⠀⠀⠀⠀⠀⠀⠸⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠃⠀⢠⣿⠇⠀⠀</span>
  <span className="neoArtLine">⠀⠀⠀⠀⠀⠀⠀⣹⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣎⣠⣴⠿⠃⠀⠀⠀</span>
  <span className="neoArtLine">⠀⢀⣠⠔⠒⠈⠉⠀⠹⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠾⠛⠛⠉⠒⠢⣄⠀⠀</span>
  <span className="neoArtLine">⠀⣿⡁⠀⠀⠀⠀⠀⠀⠈⢻⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣾⡃⠀⠀⠀⠀⠀⠀⠀⡟⠀</span>
  <span className="neoArtLine">⠀⠙⠻⣶⣀⠀⠀⠀⠀⠀⠀⠈⠙⠲⠦⣤⣄⣀⣀⣀⣤⣤⣾⣯⡵⠞⠋⠀⠀⠀⣀⠟⠀⠀⠀⠀</span>
  <span className="neoArtLine">⠀⠀⠀⠀⠉⠛⠻⠿⠿⠶⠶⠤⠤⠤⣄⣀⣀⣀⣀⣀⣀⣀⣀⡠⠤⠤⠤⠴⠖⠉⠀⠀⠀⠀⠀⠀</span>
</span>

                        <span className="neoInfo">
                          <span className="neoInfoLine prompt">----------------------</span>
                          <span className="neoInfoLine"><span className="prompt">Name:</span> Mark Rensen</span>
                          <span className="neoInfoLine"><span className="prompt">Role:</span> Backend developer | docent</span>
                          <span className="neoInfoLine"><span className="prompt">Shell:</span> bash | PowerShell</span>
                          <span className="neoInfoLine"><span className="prompt">Uptime:</span> ∞ </span>
                          <span className="neoInfoLine"><span className="prompt">Editor:</span> IntelliJ | Webstorm | Pycharm</span>
                          <span className="neoInfoLine"><span className="prompt">Languages:</span> Java | JavaScript | Kotlin | Python</span>
                          <span className="neoInfoLine"><span className="prompt">Frameworks:</span> SpringBoot | React | FastApi | Ktor</span>
                          <span className="neoInfoLine"><span className="prompt">Security:</span> Security-first | Oath | Spring security | Keycloak</span>
                          <span className="neoInfoLine"><span className="prompt">Github:</span> <a href="https://github.com/MRensen">github.com/MRensen</a> </span>
                          <span className="neoInfoLine"><span className="prompt">LinkedIn:</span> <a href="https://www.linkedin.com/in/mark-rensen/">linkedin.com/mark-rensen</a> </span>
                          <span className="neoInfoLine"><span className="prompt">E-mail:</span> <a href="mailto:markrensen@hotmail.com">markrensen@hotmail.com</a> </span>


                          <span className="neoPalette" aria-hidden="true">
                            <span className="neoSw neoSw--green"></span>
                            <span className="neoSw neoSw--cyan"></span>
                            <span className="neoSw neoSw--blue"></span>
                            <span className="neoSw neoSw--yellow"></span>
                            <span className="neoSw neoSw--red"></span>
                            <span className="neoSw neoSw--muted"></span>
                          </span>
                        </span>
                    </span>

                    <span className="line"></span>
                    <span className="line">
                        <span className="user">mark</span><span className="prompt">@</span><span className="host">homepage</span><span
                                            className="prompt">:</span><span className="path">~</span><span className="prompt">$</span>
                        <span className="cmd"> </span><span className="cursor" aria-hidden="true"></span>
                    </span>
                </div>

            </div>

        </>
    )
}

export default App
