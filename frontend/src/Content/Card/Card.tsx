import './Card.css'; 
import CardMoreButton from './CardMoreButton/CardMoreButton'; 
import ItemContent from '../ItemContent';
 
function Card(props:any) { 


    
    return ( 
        <div className="card" key={props.taskId}> 
            <div className="card-title"> 
                <h4>{props.title}</h4> 
                <CardMoreButton taskId={props.taskId} /> 
            </div> 
            <p className='card-description'>{props.description}</p> 
            <div className='card-date'> 
                <span className="material-symbols-outlined">event</span> 
                <p>{props.date}</p> 
            </div> 
            <div className='card-priority'> 
                {props.priority} 
            </div> 
            <select id="dropdown" className='card-dropdown'> 
                <option disabled selected value="">Move to:</option> 
                <option value="option1">Option 1</option> 
                <option value="option2">Option 2</option> 
                <option value="option3">Option 3</option> 
                <option value="option4">Option 4</option> 
            </select> 
        </div> 
    ); 
} 
 
export default Card;