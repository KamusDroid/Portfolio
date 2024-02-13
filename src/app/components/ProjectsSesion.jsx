import React from "react";
import ProjectCard from "./ProjectCards";
import Image from "next/image";

const projectsData = [
    {
        id:1,
        title:"",
        description:"",
        image:"/images/projects/",
        tag:["All","Web"],
    },
    {
        id:2,
        title:"",
        description:"",
        image:"/images/projects/",
        tag:["All","Web"],
    },
    {
        id:3,
        title:"",
        description:"",
        image:"/images/projects/",
        tag:["All","Web"],
    },
    {
        id:4,
        title:"",
        description:"",
        image:"/images/projects/",
        tag:["All","Web"],
    },
]
const ProjectsSection  = () => {
    return(
        <>
        <h2 className="text-center text-4xl font-bold text-white mt-4" >
        My Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {projectsData.map((project) => (
                <ProjectCard
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.image} 
                />
            ))}
        </div>
        </>

    )
}

export default ProjectsSection