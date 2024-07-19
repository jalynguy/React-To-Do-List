import { useEffect, useState } from "react";
import './App.css'
import ToDoForm from "./ToDoForm.js";
import ToDoList from './ToDoList.js'


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

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(toDos))
    }, [toDos])

    function updateItemCount(val){
        if(val === 'add'){
            return setItemCount(itemCount + 1);
        }
        else if(val === 'subtract'){
            return setItemCount(itemCount -1);
        }
    }

    function AddNewToDo(title, description){
        updateItemCount('add');
        return [
            setTodos((currentToDos) => {
                return [
                    ...currentToDos, {
                        id: crypto.randomUUID(),
                        title,
                        completed: false,
                        description,
                        dateAdded: getCurrentDate()
                    }
                ]
            })
        ]
    }

    function getCurrentDate(){
        const currentDate = new Date();
        const month = currentDate.getMonth()+1;
        const year = currentDate.getFullYear();
        const date = currentDate.getDate();
        let today = month + "/" + date + "/"  + year;
        return today;
    }

    function toggleCompleted(id, completed){
        setTodos(currentToDos=>{
            return currentToDos.map(todo =>{
                if(todo.id === id){
                    return {...todo, completed}
                }
                return todo
            })
        })
    }

    function deleteItem(id){
        updateItemCount('subtract');
        setTodos(currentToDos=>{
            return currentToDos.filter(todo => todo.id !== id)
        })
    }
    return (
        <>
            <h1> To Do List </h1> 
            <div className="form-element">                  
                <ToDoForm onSubmit={AddNewToDo}/>
                <br/>
                <br/>
                <ToDoList toDos = {toDos} toggleCompleted={toggleCompleted} deleteItem={deleteItem} itemCount={itemCount}/>
            </div>
        </>
    ) 
}