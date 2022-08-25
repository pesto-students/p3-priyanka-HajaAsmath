import Navigation from "../nav/nav";
import Todo from "../todo/todo";
import './content.css'
import {useState} from 'react';

function Content() {

    let getProjects = () => {
        const projects = JSON.parse(localStorage.getItem('projects'));
        if(projects) {
            return projects;
        }
        return [];
    }

    let [projects, setProjects] = useState(getProjects);
    let [activeProject, setActiveProject] = useState('Today');
    
    return <div className='mainContent'>
        <Navigation projects = {projects} setProjects = {setProjects} activeProject={activeProject} setActiveProject={setActiveProject}/>
        <Todo activeProject={activeProject}/>
    </div>
}

export default Content;