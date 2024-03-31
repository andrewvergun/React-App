import './NewCard.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, } from 'react-router-dom'; // Changed from useParams


function NewCard() {
    const { taskId } = useParams<{ taskId: number }>();

 // Change from useParams
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('TODO'); // Changed from 'To-Do'
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('Low');
    const [description, setDescription] = useState('');

    const handleGoBack = () => {
        window.history.back(); // Use history to go back
    }

    const handleSave = async () => {
        const cardInfo = {
            title: title,
            status: status,
            dueDate: dueDate,
            priority: priority,
            description: description,
        }

        try {
            await axios.post('http://localhost:3000/tasks', cardInfo); // Use POST request to create a new card
            // Handle success response
            
            window.history.back(); // Go back to the previous page
        } catch (error) {
            console.error('Error saving card:', error); // Handle error
        }

        
    }

    return (
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
                                <select required value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option value="TODO">To-Do</option>
                                    <option value="PLANNED">Planned</option>
                                    <option value="IN_PROGRESS">In Progress</option>
                                    <option value="CLOSED">Closed</option>
                                </select>
                            </div>
                            <div className='duedate'>
                                <h3 className='duedate-title'><span className="material-symbols-outlined">event</span>Due Date</h3>
                                <input
                                    type="date"
                                    required
                                    value={dueDate}
                                    onChange={(e) => setDueDate(e.target.value)}
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
                
                </div>
            </div>
        </div>
    )
}

export default NewCard;
