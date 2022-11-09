import React from "react";
import "./TaskList.css";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
function TaskList({ task, id, deleteItem }) {
  return (
    <div className="taskList">
      <p>{task}</p>
      <span>
        {/* <IconButton>
          <EditIcon className="taskList__button" />
        </IconButton> */}
        <IconButton
          onClick={() => {
            deleteItem(id);
          }}
        >
          <CheckIcon className="taskList__button" />
        </IconButton>
      </span>
    </div>
  );
}

export default TaskList;
