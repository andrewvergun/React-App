import React, { useState } from 'react';
import axios from 'axios';



function NewBoard() {
  const [title, setTitle] = useState('');

  

  const handleSave = async () => {
    try {
      if (!title) {
        alert('Please enter a board name');
        return;
      }
      
      // Send a request to create a new board
      await axios.post('http://localhost:3000/boards', { title: title });
      
      // Redirect or navigate to the boards page after saving
      // You may need to replace this with your navigation logic
      window.history.back();
    } catch (error) {
      console.error('Error saving board:', error);
    }
  };

  return (
    <div className="new-card-background">
      <div className='new-card'>
        <div className='new-card-top'>
          <div></div>
          <div>
            <button onClick={() => window.history.back()} className='new-card-exit'>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>
        <div className='new-card-content'>
          <div className='new-card-main'>
            <div className='new-card-main-title'>
              <input
                type="text"
                required
                placeholder='Board Name'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <button onClick={handleSave}>
                <span className="material-symbols-outlined">download_done</span>Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewBoard;
