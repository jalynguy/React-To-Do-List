import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function ToDoInfoPopup(props){
    return(
        <div>
             <Popup trigger={<button className="btn btn-primary btn-sm"> <i className="bi bi-zoom-in"></i> </button>} modal nested> 
             {
                close =>(
                    <div>
                        <div className='content'>
                            <div className='detail-header'>
                                <h1> Task: <b> {props.title}</b>  </h1>
                            </div>
                            <div> 
                                <p> Date Added: {props.dateAdded} </p>
                            </div>
                            <div>
                                Completed: { props.completed ? <p style={{color: "green"}}> True </p> : <p style={{color: "red"}}> False </p>}
                            </div>
                            <div className='Details'>
                                <div> 
                                    <h3> Task Specific Details: </h3>
                                    <p style={{textAlign:"left", border: "1px solid black"}}> 
                                        {props.description}
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                        <div>
                            <button onClick={()=>close()} className='btn btn-secondary btn-sm'> Close </button>
                        </div>
                    </div>
                )
             }
            </Popup>
        </div>
    )
}