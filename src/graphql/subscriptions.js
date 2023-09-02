/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
    onCreateTask(filter: $filter) {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
    onUpdateTask(filter: $filter) {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
    onDeleteTask(filter: $filter) {
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
export const onCreateTaskCompletion = /* GraphQL */ `
  subscription OnCreateTaskCompletion(
    $filter: ModelSubscriptionTaskCompletionFilterInput
  ) {
    onCreateTaskCompletion(filter: $filter) {
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
export const onUpdateTaskCompletion = /* GraphQL */ `
  subscription OnUpdateTaskCompletion(
    $filter: ModelSubscriptionTaskCompletionFilterInput
  ) {
    onUpdateTaskCompletion(filter: $filter) {
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
export const onDeleteTaskCompletion = /* GraphQL */ `
  subscription OnDeleteTaskCompletion(
    $filter: ModelSubscriptionTaskCompletionFilterInput
  ) {
    onDeleteTaskCompletion(filter: $filter) {
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
export const onCreateHousehold = /* GraphQL */ `
  subscription OnCreateHousehold(
    $filter: ModelSubscriptionHouseholdFilterInput
  ) {
    onCreateHousehold(filter: $filter) {
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
export const onUpdateHousehold = /* GraphQL */ `
  subscription OnUpdateHousehold(
    $filter: ModelSubscriptionHouseholdFilterInput
  ) {
    onUpdateHousehold(filter: $filter) {
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
export const onDeleteHousehold = /* GraphQL */ `
  subscription OnDeleteHousehold(
    $filter: ModelSubscriptionHouseholdFilterInput
  ) {
    onDeleteHousehold(filter: $filter) {
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
export const onCreateHouseholdMember = /* GraphQL */ `
  subscription OnCreateHouseholdMember(
    $filter: ModelSubscriptionHouseholdMemberFilterInput
  ) {
    onCreateHouseholdMember(filter: $filter) {
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
export const onUpdateHouseholdMember = /* GraphQL */ `
  subscription OnUpdateHouseholdMember(
    $filter: ModelSubscriptionHouseholdMemberFilterInput
  ) {
    onUpdateHouseholdMember(filter: $filter) {
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
export const onDeleteHouseholdMember = /* GraphQL */ `
  subscription OnDeleteHouseholdMember(
    $filter: ModelSubscriptionHouseholdMemberFilterInput
  ) {
    onDeleteHouseholdMember(filter: $filter) {
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
