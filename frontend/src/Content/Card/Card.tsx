import axios from 'axios';
import './Card.css';
import CardMoreButton from './CardMoreButton/CardMoreButton';
import { useState } from 'react';

function Card(props) {
    
    const [selectedStatus, setSelectedStatus] = useState('');

    const handleStatusChange = async (e) => {
        const newStatus = e.target.value;
        setSelectedStatus(newStatus);

        try {
            await axios.put(`http://localhost:3000/tasks/${props.id}/status`, { status: newStatus });
            // Optionally, handle success
        } catch (error) {
            console.error('Error updating task status:', error);
        }
    };
    


    return (
        <div className="card" key={props.id}>
            <div className="card-title">
                <h4>{props.title}</h4>
                <CardMoreButton taskId={props.id} />
            </div>
            <p className='card-description'>{props.description}</p>
            <div className='card-date'>
                <span className="material-symbols-outlined">event</span>
                <p>{props.date}</p>
            </div>
            <div className='card-priority'>
                {props.priority}
            </div>
            <select id="dropdown" className='card-dropdown' value={selectedStatus} onChange={handleStatusChange}>
                <option disabled selected value="">Move to:</option>
                <option value="TODO">To Do</option>
                <option value="PLANNED">Planned</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="CLOSED">Closed</option>
            </select>
        </div>
    );
}

export default Card;
