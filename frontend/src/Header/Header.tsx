import './Header.css'


function Header(){
    return(
        <>
            <header>
                <div>
                    <h2 className='header-title'>My Task Board</h2>
                </div>
                <div className='header-buttons'>
                    <button className='header-history-button'><span className="material-symbols-outlined">history</span>
                    History</button>
                    <button className='header-newlist-button'><span className="material-symbols-outlined">add</span>
                    Create New List</button>
                </div>
                
            </header>
            
        </>
    )
}

export default Header