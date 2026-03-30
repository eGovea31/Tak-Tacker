//CONTROLLER
//Entrada (CLI) - Recibe comandos del usuario
const {
    addTasks,
    eliminateTasks,
    updateTasks,
    updateStatus,
    listTasks
} = require("./tasks")


const args = process.argv // save arguments

const command = args[2] // extract command 
const input = args[3] // 




//******************************* COMMANDS *********************************

//---------------ADD--------------------
if(command === "add"){
   const task= addTasks(input)
    console.log("Tarea agregada: ", task)
} 

//------------- List  --------------
else if(command ==="list") {
    const filter = args[3]
    const tasks = listTasks(filter)

    if( tasks.length === 0){
        console.log("No hay tareas")
    } else {
        tasks.forEach( task => {
            console.log(task.id + " - " + task.description + "["+ task.status +"]")
        })
    }
}

//------------- Delete -----------

else if( command === "delete") {

        const id = Number(input)
    
        const success= eliminateTasks(id) 

        if(!success){
            console.log("No se encontr'o la tarea")
        }else {
            console.log("Tarea eliminada")
        }
        
       /* if( tasks.length === updatedTasks.length){
            console.log("No se encontr'o esta tarea")
        }else {
            saveTasks(updatedTasks)
            console.log("Tarea eliminada correctamente")
        }*/
    

}

// -------------- Update -------------------------
else if (command === "update") {
    const id = Number(input);
    const newDescription = args[4];

    if (!newDescription) {
        console.log("Debes proporcionar una nueva descripción");
        return;
    }

    const success = updateTasks(id, newDescription);

    if (!success) {
        console.log("No se encontró la tarea");
    } else {
        console.log("Tarea actualizada correctamente");
    }
}

//-------------Mark-In-Progress----------------
else if(command === "mark-in-progress"){
    
    const id = Number(input)

    const success= updateStatus(id,"in-progress")
      if (!success) {
        console.log("No se encontró la tarea");
    } else {
        console.log("Tarea marcada como en progreso");
    }
}

// ----------------- Mark-Done-----------------
else if (command === "mark-done") {
    
    const id = Number(input);

    const success = updateStatus( id, "done");

    if (!success) {
        console.log("No se encontró la tarea");
    } else {
        console.log("Tarea marcada como completada");
    }
}
else{
    console.log("Comando no reconocido")
}