import './todo.css'
import { useState, useEffect, useRef } from 'react';
import Modal from '../modal/modal'

function Todo(props) {

    let [showModal, setShowModal] = useState(false);
    let {activeProject} = props;

    let handleShow = (e) => {
        if(e.currentTarget.tagName === 'SPAN') {
            let task = tasks.get(e.currentTarget.id);
            setTaskName(task.taskName);
            setTaskDetails(task.taskDetails);
            setDueDate(task.dueDate);
            setPriority(task.priority);
            setIsEdit(true);
        } else {
            setTaskName('');
            setTaskDetails('');
            setDueDate('');
            setPriority('');
            setIsEdit(false);
        }
        setShowModal(true);
    }

    let getTaskMap = () => {
        let taskMap;
        let tasks = localStorage.getItem(activeProject);
        if(tasks) {
            taskMap = new Map(JSON.parse(tasks));
        } else {
            taskMap = new Map();
        }
        return taskMap;
    }

    let deleteTask = (e) => {
        setTasks(tasks => {
            tasks.delete(e.target.id);
            return new Map(tasks);
        })
    }

    let handleInputChange = (e) => {
        let elementName = e.target.name;
        switch(elementName) {
            case 'taskName':
                setTaskName(e.target.value);
                break;
            case 'taskDetails':
                setTaskDetails(e.target.value);
                break;
            case 'taskDueDate':
                setDueDate(e.target.value);
                break;
            case 'taskPriority':
                setPriority(e.target.value);
                break;
            case 'status':
                let task = e.target.id;
                setTasks(tasks => {
                    tasks.get(task).status = !e.target.checked;
                    return new Map(tasks);
                })
                setStatus(false);
                break;
            default:
                break;
        }
    }


    let handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(false);
        let task = {taskName: taskName, taskDetails:taskDetails, dueDate:dueDate, priority:priority, status:true};
        setTasks((tasks) => {
            tasks.set(task.taskName,task);
            return new Map(tasks);
        });
    }


    let [tasks, setTasks] = useState(getTaskMap);
    let [taskName, setTaskName] = useState("");
    let [taskDetails, setTaskDetails] = useState("");
    let [dueDate, setDueDate] = useState("");
    let [priority, setPriority] = useState("");
    let [status, setStatus] = useState(true);
    let [isEdit, setIsEdit] = useState(true);
    let [previousActiveProject, setPreviousActiveProject] = useState(null);

    if(activeProject !== previousActiveProject) {
        setTasks(() => {
            return getTaskMap();
        })
        setPreviousActiveProject(activeProject);
    }

    //console.log(activeProject, previousActiveProject);


    useEffect(() => {
        return () => {
            //console.log(activeProject);
            localStorage.setItem(activeProject, JSON.stringify(Array.from(tasks.entries())));
        }
    }, [tasks, activeProject]);

    

    return (<div className='todo-container'>
        <h1>{activeProject}</h1>
        <ul className='taskList'>
        {[...tasks.keys()].map((task, id) => {
            return <li key={id} className='task'>
                    <input type='checkbox' id={task} checked={!tasks.get(task).status} name='status' onChange={handleInputChange}/>    
                    <label className={'taskLabel ' + (tasks.get(task).status?'':'strike')}>{task}</label>
                    <span id={task} className="material-symbols-outlined icon" onClick={deleteTask}>delete</span>
                    <span className="material-symbols-outlined editIcon icon" id={task} onClick={handleShow}>edit_square</span>
                </li>
        })}
        </ul>
        <button className='addTask' onClick={handleShow}><span className="material-symbols-outlined">add</span>Add Task</button>
        {showModal?<Modal showModal={setShowModal} taskName={taskName} 
        taskDetails={taskDetails} 
        dueDate={dueDate}
        priority={priority} 
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isEdit={isEdit}/>:null}
    </div>)
}

export default Todo;