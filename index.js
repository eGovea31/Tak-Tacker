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
} else {
    console.log("Unrecognized Command ")
}

//const tasks=[]
