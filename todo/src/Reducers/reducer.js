export const initialState = {
    todo: [
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
    switch(action.type) {
        default: return state;
    }
}