/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      householdID
      househould {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      taskCompletions {
        nextToken
        startedAt
        __typename
      }
      defaultAssignee {
        id
        householdID
        name
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextCompletion {
        id
        taskID
        assigneeID
        householdID
        dueDate
        completedOn
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      title
      description
      frequency
      estimatedLength
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      taskDefaultAssigneeId
      taskNextCompletionId
      __typename
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      householdID
      househould {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      taskCompletions {
        nextToken
        startedAt
        __typename
      }
      defaultAssignee {
        id
        householdID
        name
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextCompletion {
        id
        taskID
        assigneeID
        householdID
        dueDate
        completedOn
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      title
      description
      frequency
      estimatedLength
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      taskDefaultAssigneeId
      taskNextCompletionId
      __typename
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      householdID
      househould {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      taskCompletions {
        nextToken
        startedAt
        __typename
      }
      defaultAssignee {
        id
        householdID
        name
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextCompletion {
        id
        taskID
        assigneeID
        householdID
        dueDate
        completedOn
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      title
      description
      frequency
      estimatedLength
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      taskDefaultAssigneeId
      taskNextCompletionId
      __typename
    }
  }
`;
export const createTaskCompletion = /* GraphQL */ `
  mutation CreateTaskCompletion(
    $input: CreateTaskCompletionInput!
    $condition: ModelTaskCompletionConditionInput
  ) {
    createTaskCompletion(input: $input, condition: $condition) {
      id
      taskID
      task {
        id
        householdID
        title
        description
        frequency
        estimatedLength
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        taskDefaultAssigneeId
        taskNextCompletionId
        __typename
      }
      assigneeID
      asignee {
        id
        householdID
        name
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      householdID
      household {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      dueDate
      completedOn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateTaskCompletion = /* GraphQL */ `
  mutation UpdateTaskCompletion(
    $input: UpdateTaskCompletionInput!
    $condition: ModelTaskCompletionConditionInput
  ) {
    updateTaskCompletion(input: $input, condition: $condition) {
      id
      taskID
      task {
        id
        householdID
        title
        description
        frequency
        estimatedLength
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        taskDefaultAssigneeId
        taskNextCompletionId
        __typename
      }
      assigneeID
      asignee {
        id
        householdID
        name
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      householdID
      household {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      dueDate
      completedOn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteTaskCompletion = /* GraphQL */ `
  mutation DeleteTaskCompletion(
    $input: DeleteTaskCompletionInput!
    $condition: ModelTaskCompletionConditionInput
  ) {
    deleteTaskCompletion(input: $input, condition: $condition) {
      id
      taskID
      task {
        id
        householdID
        title
        description
        frequency
        estimatedLength
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        taskDefaultAssigneeId
        taskNextCompletionId
        __typename
      }
      assigneeID
      asignee {
        id
        householdID
        name
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      householdID
      household {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      dueDate
      completedOn
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createHousehold = /* GraphQL */ `
  mutation CreateHousehold(
    $input: CreateHouseholdInput!
    $condition: ModelHouseholdConditionInput
  ) {
    createHousehold(input: $input, condition: $condition) {
      id
      HouseholdMembers {
        nextToken
        startedAt
        __typename
      }
      Tasks {
        nextToken
        startedAt
        __typename
      }
      TaskCompletions {
        nextToken
        startedAt
        __typename
      }
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateHousehold = /* GraphQL */ `
  mutation UpdateHousehold(
    $input: UpdateHouseholdInput!
    $condition: ModelHouseholdConditionInput
  ) {
    updateHousehold(input: $input, condition: $condition) {
      id
      HouseholdMembers {
        nextToken
        startedAt
        __typename
      }
      Tasks {
        nextToken
        startedAt
        __typename
      }
      TaskCompletions {
        nextToken
        startedAt
        __typename
      }
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteHousehold = /* GraphQL */ `
  mutation DeleteHousehold(
    $input: DeleteHouseholdInput!
    $condition: ModelHouseholdConditionInput
  ) {
    deleteHousehold(input: $input, condition: $condition) {
      id
      HouseholdMembers {
        nextToken
        startedAt
        __typename
      }
      Tasks {
        nextToken
        startedAt
        __typename
      }
      TaskCompletions {
        nextToken
        startedAt
        __typename
      }
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createHouseholdMember = /* GraphQL */ `
  mutation CreateHouseholdMember(
    $input: CreateHouseholdMemberInput!
    $condition: ModelHouseholdMemberConditionInput
  ) {
    createHouseholdMember(input: $input, condition: $condition) {
      id
      householdID
      household {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      assignedTasks {
        nextToken
        startedAt
        __typename
      }
      name
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateHouseholdMember = /* GraphQL */ `
  mutation UpdateHouseholdMember(
    $input: UpdateHouseholdMemberInput!
    $condition: ModelHouseholdMemberConditionInput
  ) {
    updateHouseholdMember(input: $input, condition: $condition) {
      id
      householdID
      household {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      assignedTasks {
        nextToken
        startedAt
        __typename
      }
      name
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteHouseholdMember = /* GraphQL */ `
  mutation DeleteHouseholdMember(
    $input: DeleteHouseholdMemberInput!
    $condition: ModelHouseholdMemberConditionInput
  ) {
    deleteHouseholdMember(input: $input, condition: $condition) {
      id
      householdID
      household {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      assignedTasks {
        nextToken
        startedAt
        __typename
      }
      name
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
