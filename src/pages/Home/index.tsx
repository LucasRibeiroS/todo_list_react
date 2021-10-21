import { useState } from "react";
import TaskItem from "../../components/TaskItem";

import { Task } from "../../utils/interfaces";

import {
  Body,
  Container,
  InputContainer,
  Input,
  Button,
  ContentContainer,
} from "./styles";

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [taskName, setTaskName] = useState("");

  const addTask = () => {
    if (taskName.trim().length < 3) return;

    const task: Task = {
      name: taskName.trim(),
      done: false,
    };

    const list = [...tasks];
    list.push(task);
    setTasks(list);

    setTaskName("");
  };

  const updateTask = (task: Task) => {
    const index = tasks.indexOf(task);

    task.done = !task.done;

    const list = [...tasks];
    list[index] = task;
    setTasks(list);
  }

  return (
    <Body>
      <Container>
        <InputContainer>
          <Input
            value={taskName}
            onChange={e => setTaskName(e.target.value)}
            onKeyUp={e => {
              if (e.key === "Enter") addTask();
            }}
          />
          <Button onClick={addTask}>Adicionar</Button>
        </InputContainer>

        <ContentContainer>
          {tasks &&
            tasks.map((task, index) => <TaskItem key={index} task={task} onDone={updateTask} />)}
        </ContentContainer>
      </Container>
    </Body>
  );
}

export default Home;
