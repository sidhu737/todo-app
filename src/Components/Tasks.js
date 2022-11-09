import React from "react";
import TaskList from "./TaskList";
import "./Tasks.css";
function Tasks({ items, deleteItem }) {
  return (
    <div className="tasks">
      <h2>List of Tasks</h2>
      {items.length > 0 ? (
        items.map((item) => (
          <TaskList
            task={item.task}
            key={item.id}
            id={item.id}
            deleteItem={deleteItem}
          />
        ))
      ) : (
        <p className="no__tasks">Nothing here, Add tasks.</p>
      )}
    </div>
  );
}

export default Tasks;
