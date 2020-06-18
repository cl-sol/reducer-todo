import React, { useReducer } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

import { todoReducer, initialState } from "../Reducers/reducer";

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState)
    console.log(state);

    return(
        <div>
            {state.task.map(task => {
                console.log(task);
                return <Todo task={task} key={task.id} dispatch={dispatch} />
            })}
            <TodoForm dispatch={dispatch} />
        </div>
    )
}

export default TodoList;