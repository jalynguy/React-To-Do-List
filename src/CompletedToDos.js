import Table from 'react-bootstrap/Table';

export default function CompletedToDos(props){
    return(
        <div>
            <h1> Completed To Dos </h1>
            <div className="justify-content-center completed-task-list">
                <Table className="table-container" striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th> Task </th>
                            <th> Date Completed </th>
                            <th> Delete </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.completedItems.map(completedItems=>{
                            return (
                                <tr>
                                    <td> {completedItems.title}</td>
                                    <td> {completedItems.dateCompleted} </td>
                                    <td> <button className='btn btn-danger btn-sm' onClick={()=> props.deleteCompletedItem(completedItems.id)}>  <i className="bi bi-trash"> </i>  Delete </button></td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </Table>
            </div>

        </div>
    )
}