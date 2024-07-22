import ToDoInfoPopup from "./ToDoInfoPopup";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function ToDoItems(props){

    return(
        
            <tr>
                <td> <input type='checkbox' checked={props.in_progress} onChange= {e => props.toggleInProgress(props.id, e.target.checked) }/> </td>
                <td> {props.title} </td>
                <td> {props.dateAdded} </td>
                <td> <ToDoInfoPopup title={props.title} completed={props.completed} dateAdded={props.dateAdded} description={props.description} in_progress={props.in_progress}/> </td>
                <td> <button className='btn btn-danger btn-sm' onClick={()=> props.deleteItem(props.id)}  style={{marginLeft:"10px", background:'red', color:'white'}}>  <i className="bi bi-trash"> </i>  Delete </button> </td>
                <td> <button className="btn btn-success btn-sm"  onClick={() => props.addNewCompleted(props.id, props.title)}> <i className="bi bi-check2-square"></i></button></td>
            </tr>
    )
}