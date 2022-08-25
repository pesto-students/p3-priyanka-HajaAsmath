import './modal.css'

function Modal(props) {
    let {taskName, taskDetails, dueDate, priority, handleInputChange, handleSubmit, isEdit} = props;
    return <div className='modal'>
        <div className='modal-content'>
        <div className='modal-close' onClick={() => props.showModal(false)}>&times;</div>
        <form onSubmit={handleSubmit}>
            <input id='task-name' className='modal-text-area' placeholder='Task Name' name='taskName' onChange={handleInputChange} value={(taskName?taskName:'')} readOnly={isEdit}/>
            <textarea id='task-details' className='modal-text-area' placeholder='Details' name='taskDetails' value={(taskDetails?taskDetails:'')} onChange={handleInputChange}/>
            <label>Due Date: </label><input type='date' name='taskDueDate' value={(dueDate?dueDate:'')} onChange={handleInputChange}/>
            <div className='priority-block'>
                <label>Priority: </label>
                <input type='button' id='priority-high' className={'priority-btn ' + (priority==='High'?'active':'')} name='taskPriority' onClick={handleInputChange} value='High'/>
                <input type='button' id='priority-medium' className={'priority-btn ' + (priority==='Medium'?'active':'')} name='taskPriority' onClick={handleInputChange} value='Medium'/>
                <input type='button' id='priority-low' className={'priority-btn ' + (priority==='Low'?'active':'')} name='taskPriority' onClick={handleInputChange} value='Low'/>
                <input type='submit' id='submit'/>
            </div>
        </form>
        </div>
    </div>
}

export default Modal;