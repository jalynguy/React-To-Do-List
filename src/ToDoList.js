import ToDoItems from "./ToDoItems.js";
import Table from 'react-bootstrap/Table';
import ToDoCounter from "./ToDoCounter.js";
export default function ToDoList(props){
    return (
        <>   
            <ToDoCounter itemCount={props.itemCount}/>      
            <div className="d-flex justify-content-center">
                <Table className="table-container" striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th> In-Progress? </th >
                            <th> To Do Item</th>
                            <th> Date Added</th>
                            <th> Details</th>
                            <th> Delete</th>
                            <th> Mark Task as Completed </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.toDos.map(toDos=>{
                            return <ToDoItems id={toDos.id} title={toDos.title} completed={toDos.completed} dateAdded={toDos.dateAdded} description={toDos.description} toggleCompleted={props.toggleCompleted} deleteItem={props.deleteItem} />
                            })
                        }
                    </tbody>

                </Table>
            </div>
            {props.toDos.length === 0 && "No Items on your list"}
        </>
    )
}
