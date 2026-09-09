const { test, expect } = require('@playwright/test');
const { TodoPage } = require('../pages/todo.page');

test.describe('TodoMVC Application', () => {
  test('should add and complete todos', async ({ page }) => {

    // Create an instance of the TodoPage Page Object // and pass the current Playwright page object to it
    const todoPage = new TodoPage(page);


    // Navigate to the TodoMVC application
    await todoPage.open();
    await expect(
      todoPage.todoInput,
      'Todo input field should be visible so a new todo can be added'
    ).toBeVisible();


    // Add the first todo item
    await todoPage.addTodo('Learn Playwright');
    await expect(
      todoPage.todo('Learn Playwright'),
      'Todo "Learn Playwright" should be visible in the current todo list'
    ).toBeVisible();


    // Add the second todo item
    await todoPage.addTodo('Write tests');
    await expect(
      todoPage.todoItems,
      'Expected 2 visible todo item(s), but the actual count is different'
    ).toHaveCount(2);


    // Mark "Learn Playwright" as completed
    await todoPage.completeTodo('Learn Playwright');

    // Select the Completed filter to display only completed todos
    await todoPage.showCompletedTodos();
    await expect(
      todoPage.todoItems,
      'Expected 1 visible todo item(s), but the actual count is different'
    ).toHaveCount(1);
    
    await expect(
      todoPage.todo('Learn Playwright'),
      'Todo "Learn Playwright" should be visible in the current todo list'
    ).toBeVisible();

    // Select the Active filter to display only active todos
    await todoPage.showActiveTodos();
    await expect(
      todoPage.todoItems,
      'Expected 1 visible todo item(s), but the actual count is different'
    ).toHaveCount(1);

    await expect(
      todoPage.todo('Write tests'),
      'Todo "Write tests" should be visible in the current todo list'
    ).toBeVisible();

  });
  
});
