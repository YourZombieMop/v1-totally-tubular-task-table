import React, { FC, ReactElement } from "react";
import { Task } from "../types/Task";
import ClickableContainer from "./ClickableContainer";

interface TaskListItemProps {
  task: Task;
  setTask: (task: Task) => void;
}

const TaskListItem: FC<TaskListItemProps> = ({
  task,
  setTask
}): ReactElement => {
  // const [isEditing, setIsEditing] = useState<boolean>(false);
  return (
    <li>
      <ClickableContainer disableTextSelect={true}>
        <p className="TaskListItem">{task.title}</p>
      </ClickableContainer>
      <button
        onClick={() => {
          const newTask = task;
          newTask.isDeleted = true;
          setTask(newTask);
        }}
      >
        &#10006;
      </button>
    </li>
  );
};

export default TaskListItem;
