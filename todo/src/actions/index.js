export const NEW_TASK  = 'NEW_TASK'
export const COMPLETE_TASK = 'COMPLETE_TASK'


export addNewTask = (newTask) => {
    return {
        type: NEW_TASK, 
        payload: newTask
    };
}

export completeTask = (completeTask) => {
    return {
        type: COMPLETE_TASK, 
        payload: completeTask,
    }
}