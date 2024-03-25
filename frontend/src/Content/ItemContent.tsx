import Card from "./Card/Card"
import { useNavigate } from "react-router-dom";

function ItemContent(props:any){
    const navigate = useNavigate();


   


    return(
        
        <div className='item-content'>
            <div className="content-top">

                <h4>{props.title}</h4>
                <div className="content-top-right">
                    <h4>{props.counter}</h4>
                    <button><span className="material-symbols-outlined">more_vert</span></button>
                </div>
             </div>
            <div className="content-bottom">
                <button onClick={()=>navigate('/new-card')}><span className="material-symbols-outlined">add</span>Add New Card</button>
                
            </div>

           

                    
                    
                        <Card 
                        
                        title='hello'
                        description='lorem ipsum'
                        date='Wed, 19 Apr'
                        priority='Medium'/>
                    


                
                </div>


                
    )
}

export default ItemContent