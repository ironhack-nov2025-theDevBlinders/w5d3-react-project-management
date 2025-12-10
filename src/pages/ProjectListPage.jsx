import axios from "axios";
import { useEffect, useState } from "react";

import Loader from "../components/Loader";


function ProjectListPage() {

    const [projects, setProjects] = useState(null)

    useEffect(() => {
        axios.get("https://project-management-api.edu.ironhack.com/projects")
            .then((response) => {
                setProjects(response.data)
            })
            .catch(e => console.log("Error getting projects from the API", e))
    }, [])

    if (projects === null) {
        return <Loader />
    }

    return (
        <div>
            <h1>Project List Page</h1>
            <h2>Number of projects: {projects.length}</h2>

            {projects.map((projectObj) => {
                return (
                    <div className="card" key={projectObj.id}>
                        <h3>{projectObj.title}</h3>
                        <p>{projectObj.description}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default ProjectListPage