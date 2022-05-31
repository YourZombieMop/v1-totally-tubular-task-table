import React, { FC, ReactElement } from "react";
import { Task } from "../types/Task";

interface TaskFormProps {
  tasks?: Task[];
  setTasks?: (tasks: Task[]) => void;
  deleteTask?: () => void | undefined;
}

const TaskForm: FC<TaskFormProps> = ({
  tasks,
  setTasks,
  deleteTask
}): ReactElement => {
  return <form></form>;
};

export default TaskForm;
