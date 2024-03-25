import { useState } from "react";
import ItemContent from "./ItemContent";

import './Content.css'

function Content(){
    const [todoCounter, setTodoCounter] = useState(0);
    const [plannedCounter, setPlannedCounter] = useState(0);
    const [inprogressCounter, setInprogressCounter] = useState(0);
    const [closedCounter, setClosedCounter] = useState(0);

    return(
        <>
        <main>

            <div className="content-wrapper">
                <ItemContent counter = {todoCounter} title='To-Do'/>
                <ItemContent counter = {plannedCounter} title='Planned'/>
                <ItemContent counter = {inprogressCounter} title = 'In Progress'/>
                <ItemContent counter = {closedCounter} title='Closed'/>


            </div>
            
        </main>
        </>
    )
}
export default Content