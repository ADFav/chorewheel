import React from "react";
import { EagerTaskCompletion } from "../models";
import Task from "./Task";

type PropType = {
  tasks: [EagerTaskCompletion];
};

export default function TaskList({ tasks }: PropType) {
  console.log(tasks.map((task) => task.id));
  return (
    <div style={{ maxWidth: "300px", margin: "0 auto" }}>
      {tasks.map((task) => (
        <Task completion={task} key={task.id} />
      ))}
    </div>
  );
}
