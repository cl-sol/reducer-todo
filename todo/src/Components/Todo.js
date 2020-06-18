import React from "react";

export default function Todo({task, dispatch}) {
    const handleChanges = (id) => {
        console.log(id);
        console.log(task);
        dispatch({
            type: "TOGGLE_COMPLETE",
            payload: id
        })
    }

    console.log(task.id);

    return(
        <div
            className={`task ${task.completed ? "completed" : ""}`}
            onClick={() => handleChanges(task.id)}
        >
            <p>{task.item}</p>
        </div>
    )
}