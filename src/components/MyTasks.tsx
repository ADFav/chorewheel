import React, { useState, useEffect } from "react";
import { GraphQLQuery } from "@aws-amplify/api";

import { API } from "aws-amplify";

import { myTasks } from "../graphql/queries";
import TaskList from "./TaskList";

export default function MyTasks() {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const graphqlParams = { query: myTasks };
        const { data }: GraphQLQuery<any> = await API.graphql(graphqlParams);
        setTasks(data.listHouseholdMembers.items[0].assignedTasks.items);
      } catch (err) {
        console.error(err);
      }
    };

    getTasks();
  }, []);
  if (tasks === null) {
    return <>Loading...</>;
  }
  return <TaskList tasks={tasks} />;
}
