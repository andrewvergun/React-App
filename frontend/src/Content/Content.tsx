import { useState, useEffect } from "react";
import ItemContent from "./ItemContent";
import axios from "axios";

import './Content.css'

function Content(){
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

    return(
        <main>
            <div className="content-wrapper">
                <ItemContent counter={todoCounter} title='To-Do' status='TODO'/>
                <ItemContent counter={plannedCounter} title='Planned' status='PLANNED'/>
                <ItemContent counter={inprogressCounter} title='In Progress' status='IN_PROGRESS'/>
                <ItemContent counter={closedCounter} title='Closed' status='CLOSED'/>
            </div>
        </main>
    );
}

export default Content;
