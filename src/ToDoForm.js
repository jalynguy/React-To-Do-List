import { useState } from "react";
export default function ToDoForm(props){

    const [newItem,setNewItem] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        if(newItem !== ""){
            props.onSubmit(newItem);
        }
        else{
            console.log("Item left blank!")
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='new-item-form'> 
                <div className='form-row'>
                    <input 
                    type='text' 
                    value={newItem} 
                    id='item' 
                    placeholder="Add a new item!"
                    onChange={e => setNewItem(e.target.value)}
                    /> 
                    <button className="btn btn-success btn-sm" style={{marginBottom:"5px", marginLeft:"10px"}}> Add </button>
                </div>        
            </form>
        </>
    )
}