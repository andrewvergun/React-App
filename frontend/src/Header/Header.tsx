import './Header.css'
import { useNavigate } from 'react-router-dom';

function Header(){

    const navigate = useNavigate();

    return(
        <>
            <header>
                <div>
                    <h2 className='header-title'>My Task Board</h2>
                </div>
                <div>
                    <button onClick={() => navigate('/new-board-add')} className='header-newboard-button'><span className="material-symbols-outlined">add</span>
                    Create New Board</button>
                </div>
                
            </header>
            
        </>
    )
}

export default Header