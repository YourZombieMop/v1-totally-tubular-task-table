import React, { FC, ReactElement } from "react";
import { Task } from "./types/Task";

interface TaskElementProps {
  task: Task;
  deleteTask?: () => void | undefined;
}

const TaskElement: FC<TaskElementProps> = ({
  task,
  deleteTask = undefined
}): ReactElement => {
  return (
    <li>
      <p>{task.title}</p>
      {deleteTask === undefined ? (
        <></>
      ) : (
        <button onClick={deleteTask}>&#10006;</button>
      )}
    </li>
  );
};

export default TaskElement;
