import './NewCard.css'
import { useState } from 'react';

function NewCard(){

    const handleGoBack = () => {
        window.history.back();
    }

    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('To-Do');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('Low');
    const [description, setDescription] = useState('');

    const handleSave = (e) => {
        const cardInfo = {
            'title': title,
            'status': status,
            'dueDate': dueDate,
            'priority': priority,
            'description': description,
        }

        console.log(cardInfo);
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
                            <input
                                type="text"
                                required
                                placeholder='Task Name'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <button onClick={handleSave}><span className="material-symbols-outlined">download_done</span>Save</button>
                        </div>
                        <div className='new-card-chars'>
                            <div className='status'>
                                <h3 className='status-title'><span className="material-symbols-outlined">target</span>Status</h3>
                                <select value={status} onChange={(e) => setStatus(e.target.value)} required>
                                    <option value="To-Do">To-Do</option>
                                    <option value="Planned">Planned</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Closed">Closed</option>
                                </select>
                            </div>
                            <div className='duedate'>
                                <h3 className='duedate-title'><span className="material-symbols-outlined">event</span>Due Date</h3>
                                <input
                                    type="date"
                                    required
                                    value = {dueDate}
                                    onChange = {(e) => setDueDate(e.target.value)}
                                    />
                            </div>
                            <div className='priority'>
                                <h3 className='priority-title'><span className="material-symbols-outlined">label</span>Priority</h3>
                                <select required value={priority} onChange={(e) => setPriority(e.target.value)}>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>
                            </div>
                        </div>
                        <div className='new-card-description'>
                            <h2>Description</h2>
                            <textarea required value={description} onChange={(e) => setDescription(e.target.value)} placeholder=' Task Description'></textarea>
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
