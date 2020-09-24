/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodoList = /* GraphQL */ `
  mutation CreateTodoList(
    $input: CreateTodoListInput!
    $condition: ModelTodoListConditionInput
  ) {
    createTodoList(input: $input, condition: $condition) {
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
export const updateTodoList = /* GraphQL */ `
  mutation UpdateTodoList(
    $input: UpdateTodoListInput!
    $condition: ModelTodoListConditionInput
  ) {
    updateTodoList(input: $input, condition: $condition) {
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
export const deleteTodoList = /* GraphQL */ `
  mutation DeleteTodoList(
    $input: DeleteTodoListInput!
    $condition: ModelTodoListConditionInput
  ) {
    deleteTodoList(input: $input, condition: $condition) {
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
