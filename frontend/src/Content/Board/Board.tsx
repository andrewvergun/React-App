import axios from 'axios';
import ItemContent from '../ItemContent'
import './Board.css'
import { useState, useEffect } from 'react';

function Board(props: any){

    const [todoCounter, setTodoCounter] = useState(0);
    const [plannedCounter, setPlannedCounter] = useState(0);
    const [inprogressCounter, setInprogressCounter] = useState(0);
    const [closedCounter, setClosedCounter] = useState(0);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:3000/tasks');
                const tasks = response.data;
                const todoTasks = tasks.filter(task => task.status === 'TODO');
                const plannedTasks = tasks.filter(task => task.status === 'PLANNED');
                const inProgressTasks = tasks.filter(task => task.status === 'IN_PROGRESS');
                const closedTasks = tasks.filter(task => task.status === 'CLOSED');
                setTodoCounter(todoTasks.length);
                setPlannedCounter(plannedTasks.length);
                setInprogressCounter(inProgressTasks.length);
                setClosedCounter(closedTasks.length);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="content-board-wrapper">
            <div className="title-and-delete">
                <h3>{props.title}</h3>
                <button>Delete</button>
            </div>

            <div className="content-board">
                <ItemContent counter={todoCounter} title='To-Do' status='TODO'/>
                <ItemContent counter={plannedCounter} title='Planned' status='PLANNED'/>
                <ItemContent counter={inprogressCounter} title='In Progress' status='IN_PROGRESS'/>
                <ItemContent counter={closedCounter} title='Closed' status='CLOSED'/>
            </div>
        </div>

        )
    
}

export default Board;