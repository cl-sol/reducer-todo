export const initialState = {
    task: [
        {
            item: "go to skatepark",
            completed: false,
            id: 1
        },
        {
            item: "nap",
            completed: false,
            id: 2
        },
        {
            item: "buy father's day gift for dad",
            completed: false,
            id: 3
        },
        {
            item: "lambda lecture",
            completed: false,
            id: 4
        },
    ]
}


export const todoReducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "ADD_TASK":
            return {
                ...state,
                task: [...state.task,
                action.payload]
            }
        
        case "TOGGLE_COMPLETE":
            return {
                ...state,
                task: state.task.map(e => {
                    if (e.id === action.payload) {
                        return {
                            ...e,
                            completed: !e.completed
                        } 
                    } else {
                        return e;
                        }
                })
            }

        case "CLEAR":
            return {
                ...state,
                task: state.task.filter(item => !item.completed)
            }
            
        default: return state;
    }
}