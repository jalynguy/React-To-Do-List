import { TextField } from "@mui/material";
import { useState } from "react";
export default function ToDoForm(props){

    const [newItem,setNewItem] = useState("")
    const [newDescription, setNewDescription] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        if(newItem !== ""){
            props.onSubmit(newItem, newDescription);
            setNewItem("")
            setNewDescription("")
        }
        else{
            console.log("Item left blank!")
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='new-item-form'> 
                <div className='form-group'>
                    <TextField 
                        className="TextField"
                        type='text' 
                        value={newItem} 
                        id='item' 
                        placeholder="Add a new task!"
                        onChange={e => setNewItem(e.target.value)}
                        variant='outlined'
                        focused
                        label="Add a new task!"
                    /> 
                </div>
                <br/>
                <div className="form-group">
                    <TextField
                        className="TextField"
                        type="textbox"
                        value={newDescription}
                        placeholder="Add details about your task"
                        id='description'
                        onChange={e=>setNewDescription(e.target.value)}
                        multiline
                        rows={4}                   
                        label="Task Details"
                        focused
                    />
                </div>
                <button className="btn btn-success btn-sm" style={{marginTop:"5px", marginLeft:"10px"}}> Add </button>        
            </form>
        </>
    )
}