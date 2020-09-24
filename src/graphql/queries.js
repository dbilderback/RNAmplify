/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodoList = /* GraphQL */ `
  query GetTodoList($id: ID!) {
    getTodoList(id: $id) {
      id
      name
      description
      lastupdated
      todos {
        id
        name
        description
        lastupdated
        priority
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTodoLists = /* GraphQL */ `
  query ListTodoLists(
    $filter: ModelTodoListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodoLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        lastupdated
        todos {
          id
          name
          description
          lastupdated
          priority
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
