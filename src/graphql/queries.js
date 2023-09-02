/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
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
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTasks = /* GraphQL */ `
  query SyncTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTasks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const tasksByHouseholdID = /* GraphQL */ `
  query TasksByHouseholdID(
    $householdID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tasksByHouseholdID(
      householdID: $householdID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getTaskCompletion = /* GraphQL */ `
  query GetTaskCompletion($id: ID!) {
    getTaskCompletion(id: $id) {
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
export const listTaskCompletions = /* GraphQL */ `
  query ListTaskCompletions(
    $filter: ModelTaskCompletionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTaskCompletions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTaskCompletions = /* GraphQL */ `
  query SyncTaskCompletions(
    $filter: ModelTaskCompletionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTaskCompletions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const taskCompletionsByTaskID = /* GraphQL */ `
  query TaskCompletionsByTaskID(
    $taskID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTaskCompletionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    taskCompletionsByTaskID(
      taskID: $taskID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const taskCompletionsByAssigneeIDAndDueDate = /* GraphQL */ `
  query TaskCompletionsByAssigneeIDAndDueDate(
    $assigneeID: ID!
    $dueDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTaskCompletionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    taskCompletionsByAssigneeIDAndDueDate(
      assigneeID: $assigneeID
      dueDate: $dueDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const taskCompletionsByHouseholdIDAndDueDate = /* GraphQL */ `
  query TaskCompletionsByHouseholdIDAndDueDate(
    $householdID: ID!
    $dueDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTaskCompletionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    taskCompletionsByHouseholdIDAndDueDate(
      householdID: $householdID
      dueDate: $dueDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getHousehold = /* GraphQL */ `
  query GetHousehold($id: ID!) {
    getHousehold(id: $id) {
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
export const listHouseholds = /* GraphQL */ `
  query ListHouseholds(
    $filter: ModelHouseholdFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHouseholds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncHouseholds = /* GraphQL */ `
  query SyncHouseholds(
    $filter: ModelHouseholdFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHouseholds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getHouseholdMember = /* GraphQL */ `
  query GetHouseholdMember($id: ID!) {
    getHouseholdMember(id: $id) {
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
export const listHouseholdMembers = /* GraphQL */ `
  query ListHouseholdMembers(
    $filter: ModelHouseholdMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHouseholdMembers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncHouseholdMembers = /* GraphQL */ `
  query SyncHouseholdMembers(
    $filter: ModelHouseholdMemberFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHouseholdMembers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const householdMembersByHouseholdID = /* GraphQL */ `
  query HouseholdMembersByHouseholdID(
    $householdID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelHouseholdMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    householdMembersByHouseholdID(
      householdID: $householdID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;

export const myTasks = /* GraphQL */ `
query MyTasks {
  listHouseholdMembers(filter: { name: { eq: "Andrew" } }) {
    items {
      assignedTasks(
        filter: { completedOn: { attributeExists: false } }
        sortDirection: ASC
      ) {
        items {
          id
          completedOn
          dueDate
          task {
            description
            estimatedLength
            frequency
            id
            title
          }
          asignee {
            id
            name
          }
        }
      }
    }
  }
}
`;