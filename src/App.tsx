import React from "react";
import "./App.css";

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";

import MyTasks from "./components/MyTasks";

Amplify.configure(awsExports);

function App() {
  return <MyTasks />;
}

export default App;
