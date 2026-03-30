//SERVICE
// Lógica de negocio . Qué hacer con las tareas
const {loadTasks, saveTasks} = require("./storage")

// ---------------- ADD --------------------------
function addTasks(description){
    const tasks = loadTasks()

    const newTask = {
        id: tasks.length + 1,
        description: description,
        status: "pending",
        createAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    }

    tasks.push(newTask)
    saveTasks(tasks)

    return newTask
}


// -------------Eliminate Task--------------
function eliminateTasks(id){
    //tareas= tareas.filter(t => t.id !== id)
    const tasks = loadTasks()

    const updatedTasks= tasks.filter(t => t.id !== id)

    if(tasks.length === updatedTasks.length){
        //console.log("")
        return false
    }
    saveTasks(updatedTasks)
    return true

}

//--------------- Update Task description ------------------
function updateTasks( id, newDescription){
    const tasks= loadTasks()
    let found = false

    for(let i=0; i < tasks.length; i++){
        if(tasks[i].id ===id){
            tasks[i].description = newDescription
            tasks[i].updatedAt = new Date().toISOString()
            found = true
        }
    }
    if(!found) return false
    saveTasks(tasks)
    return true
}

// -------------Update Task Status--------------------
function updateStatus(id,newStatus){
    const tasks= loadTasks()
    let found = false

    for(let i=0; i< tasks.length; i++){
        if(tasks[i].id ===id){
            tasks[i].status =newStatus
            tasks[i].updatedAt = new Date().toISOString()
            found = true
        }
    }
    if(!found) return false
    saveTasks(tasks)
    return true
}

//-------------------List Tasks--------------------------

function listTasks(filter){
    const tasks = loadTasks()

    if(!filter) return tasks

    if(filter === "done"){
        return tasks.filter(t => t.status === "done")
    }
    if(filter === "in-progress"){
        return tasks.filter(t => t.status === "in-progress")
    }
    if(filter === "pending"){
        return tasks.filter(t => t.status === "pending")
    }
    if(filter === "not-done"){
        return tasks.filter(t => t.status !== "done")
    }
    return tasks

}

module.exports= {
    addTasks,
    eliminateTasks,
    updateStatus,
    updateTasks,
    listTasks
}