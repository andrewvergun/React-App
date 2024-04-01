import './CardMoreButton.css';
import { useState } from 'react';
import axios from 'axios';

function CardMoreButton({ taskId }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/tasks/${taskId}`);
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
                    {/* <li className='edit-card'><span className="material-symbols-outlined">edit_note</span>Edit</li> */}
                    <li onClick={handleDelete} className='delete-card'><span className="material-symbols-outlined">delete</span>Delete</li>
                </ul>
            }
        </>
    );
}

export default CardMoreButton
