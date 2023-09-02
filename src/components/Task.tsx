import React from "react";
import { EagerTaskCompletion } from "../models";

type PropType = {
  completion: EagerTaskCompletion;
};

export default function Task({ completion }: PropType) {
  return (
    <div style={{ border: "1px solid black", margin: "5px" }}>
      <h1>{completion.task.title}</h1>
      <h2>Due: {completion.dueDate}</h2>
      <h2>Assigned to: {completion.asignee.name}</h2>

      <div>
        <button>Complete Task</button>
        <button>Reassign Task</button>
        <button>Postpone Task</button>
        <button>Backdate Task</button>
      </div>
    </div>
  );
}
