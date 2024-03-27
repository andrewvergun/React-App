import './NewCard.css'
import './NewCardEdit'

import { useNavigate } from "react-router-dom";

function NewCard(taskId){
    const navigate = useNavigate();

    const handleGoBack = () => {
        window.history.back();
    }

    return(
        <div className="new-card-background">
            <div className='new-card'>
                <div className='new-card-top'>
                    <div></div>
                    <div><button onClick={handleGoBack} className='new-card-exit'><span className="material-symbols-outlined">close</span></button></div>
                </div>
                <div className='new-card-content'>
                    <div className='new-card-main'>
                        <div className='new-card-main-title'>
                            <h2>Task Name</h2>
                            <button onClick={() => navigate(`/new-card-edit/${taskId}`)}><span className="material-symbols-outlined">edit_note</span>Edit Task</button>
                        </div>
                        <div className='new-card-chars'>
                            <div className='status'><h3 className='status-title'><span className="material-symbols-outlined">target</span>Status</h3> <h3>In progress</h3></div>
                            <div className='duedate'><h3 className='duedate-title'><span className="material-symbols-outlined">event</span>Due Date</h3><h3>Wed, 29, April</h3></div>
                            <div className='priority'><h3 className='priority-title'><span className="material-symbols-outlined">label</span>Priority</h3><h3>Low</h3></div>
                        </div>
                        <div className='new-card-description'>
                            <h2>Description</h2>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt recusandae, quae reiciendis distinctio a fuga numquam provident, veniam magni quis, non culpa amet. Quibusdam, quisquam praesentium labore beatae adipisci magnam.</p>
                        </div>
                    </div>
                    <div className='new-card-activity'>
                        <h3>Activity</h3>
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default NewCard 