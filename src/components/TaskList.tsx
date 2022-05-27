import React, { FC, ReactElement, useState } from "react";
import TaskElement from "./TaskElement";
import { Task } from "./types/Task";

interface TaskListProps {
  tasks: Task[];
}

const TaskList: FC<TaskListProps> = ({ tasks }): ReactElement => {
  return (
    <>
      {tasks.length ? (
        <ul>
          {tasks.map((task: Task) => {
            return TaskElement({ task: task });
          })}
        </ul>
      ) : (
        <p>No tasks!</p>
      )}
    </>
  );
};

export default TaskList;
