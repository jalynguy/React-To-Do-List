
import "bootstrap-icons/font/bootstrap-icons.css";
export default function ToDoItems(props){

    return(
        
            <tr>
                <td> <input type='checkbox' checked={props.completed} onChange= {e => props.toggleCompleted(props.id, e.target.checked) }/> </td>
                <td> {props.title} </td>
                <td> {props.dateAdded} </td>
                <td> <button className="btn btn-primary btn-sm"><i className="bi bi-zoom-in"></i> </button></td>
                <td> <button className='btn btn-danger btn-sm' onClick={()=> props.deleteItem(props.id)}  style={{marginLeft:"10px", background:'red', color:'white'}}>  <i className="bi bi-trash"> </i>  Delete </button> </td>
            </tr>
    )
}