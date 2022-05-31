import React, { FC, ReactElement, useContext } from "react";
import { Task } from "../types/Task";
import { ListContext } from "../App";
import TaskListItem from "./TaskListItem";
import ClickableContainer from "./ClickableContainer";

interface TaskListProps {
  deleteTask?: () => void | undefined;
}

const TaskList: FC<TaskListProps> = ({ deleteTask }): ReactElement => {
  const list = useContext(ListContext);
  const setTask: (task: Task) => void = (task) => {};
  return (
    <>
      {list.tasks.length ? (
        <ul>
          {list.tasks.map((task: Task) => {
            return <TaskListItem key={task.id} task={task} setTask={setTask} />;
          })}
        </ul>
      ) : (
        <p>No tasks!</p>
      )}
    </>
  );
};

export default TaskList;
