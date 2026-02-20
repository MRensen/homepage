import feedbacktool from "../../../public/projects/FeedbackAutomationTool/FeedbackTool.md?raw"
import dockerize from "../../../public/projects/Dockerize/Dockerize.md?raw"

import {MarkdownDoc} from "../../components/MarkdownComponent.tsx";


export default function ProjectsPage({project}: {project: string}) {




        if(project == "feedbacktool") {
            return <MarkdownDoc markdown={feedbacktool || "# Laden...\nEven geduld."}/>
        }
        else if(project == "dockerize") {
            return <MarkdownDoc markdown={dockerize || "# Laden...\nEven geduld."}/>
        }

        else {
            return <h1>No project found</h1>
        }


}