import './CardMoreButton.css';
import { useState } from 'react';
import axios from 'axios';

function CardMoreButton(props: { taskId: number }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    

    const handleDelete = async () => {
        try {    
            const response = await axios.delete(`http://localhost:3000/tasks/${props.taskId}`);
            console.log('Task deleted successfully:', response.data);
            // Optionally, handle success
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };
    
    return (
        <>
            <button onClick={toggleDropdown} className='dropdown-toggle'><span className="material-symbols-outlined">more_vert</span></button>
            {dropdownOpen &&
                <ul className='dropdown-content'>
                    <li onClick={handleDelete} className='delete-card'><span className="material-symbols-outlined">delete</span>Delete</li>
                </ul>
            }
        </>
    );
}

export default CardMoreButton;
