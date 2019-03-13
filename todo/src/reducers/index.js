

const initalState = {
    todos : [
        {task:'', completed: false}
    ]
}

const reducer= (state = initalState, action) => {
    switch(action.type){
        case NEW_TASK:
            return{
                ...state,
                todos : [
                    {
                        task: action.task
                        completed: false,
                    }
                ]
            }
        case COMPLETE_TASK:
            return{
                ...state, 
                todos : [ 

                ]
            }
    }
}

export default reducer;