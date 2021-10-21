import React from "react";

import { Task } from "../../utils/interfaces";

import { Wrapper } from "./styles";

interface TaskItemProps {
  task: Task;
  onDone: any;
}

const TaskItem = (props: TaskItemProps) => {
    const handleDone = () => {
        props.onDone(props.task);
    }
  
    return (
    <Wrapper done={props.task.done}>
      {props.task.name}
      <input
        type="checkbox"
        checked={props.task.done}
        onChange={handleDone}
      />
    </Wrapper>
  );
};

export default TaskItem;
