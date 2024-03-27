import './Card.css';
import CardMoreButton from './CardMoreButton/CardMoreButton';

function Card(props) {
    
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
            <select id="dropdown" className='card-dropdown'>
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
