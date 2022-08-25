import './nav.css'
import {useEffect} from 'react';

function Navigation(props) {

    let {projects, setProjects} = props;
    let {activeProject, setActiveProject} = props;

    useEffect(() => {
        let buttons = document.querySelectorAll('.default-button');
        localStorage.setItem('projects', JSON.stringify(projects));
        buttons.forEach((button) => {
            button.addEventListener('click', setActive);
        })

        return () => {
            buttons.forEach(button => {
                button.removeEventListener('click', setActive);
            });
        }
    });

    let setActive = (e) => {
        if(e.target.tagName === 'BUTTON') {
            let activeButton = document.querySelector('.default-button.active');
            setActiveProject(e.target.value);
            if(activeButton) {
                activeButton.classList.remove('active');
                e.target.classList.add('active');
            } else {
                e.target.classList.add('active');
            }
        }
    }

    let removeTask = (e) => {
        console.log(e.target.id);
        console.log(localStorage.getItem(e.target.id));
        if(localStorage.getItem(e.target.id)) {
            localStorage.removeItem(e.target.id);
        }
        setActiveProject(() => 'Today');
        setProjects(projects => {
            projects.splice(e.target.id, 1);
            return [...projects];
        });
    }

    let addTask = () => {
        let task = document.querySelector('#addProject');
        setProjects(projects => {
            return [task.value, ...projects];
        });
    }

    let displayDiv = (e) => {
        e.currentTarget.nextSibling.classList.add('display');
    }

    let hideDiv = () => {
        document.querySelector('.addDiv').classList.remove('display');
    }

    return (
        <nav className='nav'>
            <div className='generalSection section'>
                <button className={'default-button ' + (activeProject==='Today'?'active':'')} value='Today'>
                    <span className="material-symbols-outlined">today</span>
                    Today
                </button>
                <button className={'default-button ' + (activeProject==='This Week'?'active':'')} value='This Week'>
                    <span className="material-symbols-outlined">calendar_month</span>
                    This Week
                </button>
            </div>
            <div className='tasksSection section'>
                <div className='projectDiv'>
                    <h2>Projects</h2>
                    <span className="material-symbols-outlined" onClick={displayDiv}>add</span>
                    <div className='addDiv'>
                        <input id='addProject' type='text'/>
                        <button className='addBtn' onClick={addTask}>Add</button>
                        <button className='cancelBtn' onClick={hideDiv}>Cancel</button>
                    </div>
                </div>
                <div className='taskContainer'>
                    {projects.map((project, id) => {
                        return (
                            <button id={id} key={id} className={'taskButton default-button '+ (activeProject===project?'active':'')} value={project}>
                                <span className="material-symbols-outlined">task_alt</span>
                                {project}
                                <span id={project} className="material-symbols-outlined close" onClick={removeTask}>close</span>
                            </button>
                        )
                    })}
                </div>
            </div>
        </nav>
    );
} 

export default Navigation;