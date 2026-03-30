//DATA
//Este archivo SOLO maneja lectura y escritura.
const fs= require("fs")

//***************** FUNCTIONS ********************************

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

module.exports= {
    loadTasks,
    saveTasks
}