import { useEffect, useState } from "react";
import './App.css'
import ToDoForm from "./ToDoForm.js";
import ToDoList from './ToDoList.js'
import CompletedToDos from "./CompletedToDos.js";


export default function App(){
    const [toDos,setTodos] = useState(() =>{
        const localValue = localStorage.getItem("ITEMS")
        if(localValue == null) return []

        return JSON.parse(localValue)
    })

    const [itemCount, setItemCount] = useState(()=>{
        const localValue = localStorage.getItem("ITEMS")
        if(localValue == null) return 0
        
        const result = JSON.parse(localValue)
        return result.length;
    })

    const [completedItems, setCompletedItems] = useState(()=>{
        const localValue = localStorage.getItem("COMPLETEDITEMS")
        if(localValue == null) return []
        return JSON.parse(localValue);
    })

    useEffect(()=> {
        localStorage.setItem("COMPLETEDITEMS", JSON.stringify(completedItems))
    }, [completedItems])

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(toDos))
    }, [toDos])

    // Function to update the counter
    function updateItemCount(val){
        if(val === 'add'){
            return setItemCount(itemCount + 1);
        }
        else if(val === 'subtract'){
            return setItemCount(itemCount -1);
        }
    }

    // Add Functions
    function AddNewToDo(title, description){
        updateItemCount('add');
        return [
            setTodos((currentToDos) => {
                return [
                    ...currentToDos, {
                        id: crypto.randomUUID(),
                        title,
                        completed: false,
                        in_progress: false,
                        description,
                        dateAdded: getCurrentDate()
                    }
                ]
            })
        ]
    }

    function addNewCompleted(id, title){
        deleteItem(id);
        setCompletedItems(currentCompletedItems=>{
            return [
                ...currentCompletedItems, {
                    id,
                    title,
                    dateCompleted : getCurrentDate()
                }
            ]
        })
    }

    function getCurrentDate(){
        const currentDate = new Date();
        const month = currentDate.getMonth()+1;
        const year = currentDate.getFullYear();
        const date = currentDate.getDate();
        let today = month + "/" + date + "/"  + year;
        return today;
    }

    // TODO:  IN PROGRESS FUNCTION
    function toggleInProgress(id, in_progress){
  
        setTodos(currentToDos=>{
            return currentToDos.map(todo =>{
                if(todo.id === id){
                    return {...todo, in_progress}
                }
                return todo
            })
        })
    }


    // Delete Functions
    function deleteItem(id){
        updateItemCount('subtract');
        setTodos(currentToDos=>{
            return currentToDos.filter(todo => todo.id !== id)
        })
    }

    function deleteCompletedItem(id){
        setCompletedItems(currentCompletedItems=>{
            return currentCompletedItems.filter(completedItems => completedItems.id !== id)
        })
    }
    return (
        <>
            <h1> To Do List </h1> 
            <div className="form-element">                  
                <ToDoForm onSubmit={AddNewToDo}/>
                <br/>
                <br/>
                <ToDoList toDos = {toDos} toggleInProgress={toggleInProgress} deleteItem={deleteItem} itemCount={itemCount} addNewCompleted={addNewCompleted}/>
                <br/>
                <br/>
                <br/>
            </div>
            <CompletedToDos completedItems={completedItems} deleteCompletedItem={deleteCompletedItem}/>
        </>
    ) 
}