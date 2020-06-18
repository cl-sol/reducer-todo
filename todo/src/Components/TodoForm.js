import React, { useState, useReducer } from "react";
import TodoList from "./TodoList";

const TodoForm = props => {
    const [newTask, setNewTask] = useState("");

    const handleChanges = e => {
        e.preventDefault();
        setNewTask(e.target.value);
      };

      const addTask = e => {
          e.preventDefault();
          props.dispatch(
              {
                type: "ADD_TASK",
                payload: {item: newTask, completed: false, id: Date.now()}
              }
          )
        setNewTask("");
      }

      const taskComplete = e => {
          e.preventDefault();
          props.dispatch({type: "CLEAR"})
      }

    return(
        <div>
            <form className="todo-form">
                <input
                    type = "text"
                    value = {newTask}
                    name = "task"
                    onChange = {handleChanges}
                />
            </form>
            <button
                className="add-task"
                onClick = {addTask}
            >
                    Add Task
            </button>
            <button
                className="task-complete"
                onClick = {taskComplete}
            >
                Clear Completed
            </button>
        </div>
    )
}

export default TodoForm;