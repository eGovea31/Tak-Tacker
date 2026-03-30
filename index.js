/*
INPUT
  ↓
interpretar comando
  ↓
leer datos existentes
  ↓
modificar datos
  ↓
guardar datos
  ↓
OUTPUT
*/
const fs= require("fs")

// ------------Read Tasks-------------
function loadTasks(){
    try{
        const data= fs.readFileSync("tasks.json","utf-8")
        return JSON.parse(data)
    } catch(error){
        return[]
    }
}

//------------Save tasks------------------
function saveTasks(tasks){
    fs.writeFileSync("tasks.json",JSON.stringify(tasks,null,2))
}

// -------------Eliminate Task--------------
function eliminateTasks(tasks, id){
    //tareas= tareas.filter(t => t.id !== id)
    return tasks.filter( t => t.id !== id)
}


const args = process.argv // save arguments

const command = args[2] // extract command 
const input = args[3] // 

if(command === "add"){
    const tasks = loadTasks()

    const newTask = {
        id: tasks.length+1,
        description: input
    }

    tasks.push(newTask)
    saveTasks(tasks)

    console.log("Tarea agregada: ", newTask)
} 

//------------- List Tasks --------------
else if(command ==="list") {
    const tasks = loadTasks()
    
    if( tasks.length === 0){
        console.log("No hay tareas")
    } else {
        tasks.forEach( task => {
            console.log(task.id + " - " + task.description)
        })
    }
}

//------------- Delete task-----------

else if( command === "delete") {
    const tasks= loadTasks()

    if(tasks.length === 0){
        console.log("No hay tareas para eliminar")
    }else {
        const id = Number(input)
        
        const updatedTasks =  eliminateTasks(tasks, id)

        if( tasks.length === updatedTasks.length){
            console.log("No se encontr'o esta tarea")
        }else {
            saveTasks(updatedTasks)
            console.log("Tarea eliminada correctamente")
        }
    }

}