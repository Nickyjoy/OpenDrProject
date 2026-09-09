class TodoPage {

constructor(page) {

// Store the Playwright page object for interacting with the browser
this.page = page;

// Locate the input field used to enter a new todo item
this.todoInput = page.getByPlaceholder('What needs to be done?');

// Locate all todo items displayed in the todo list
this.todoItems = page.locator('.todo-list li');

// Locate the Completed filter link
this.completedFilter = page.getByRole('link', { name: 'Completed' });

// Locate the Active filter link
this.activeFilter = page.getByRole('link', { name: 'Active' });

}

// Open the TodoMVC application
async open() {

await this.page.goto('https://demo.playwright.dev/todomvc', {

  // Wait until the initial HTML document has been loaded
  waitUntil: 'domcontentloaded',

});

}

// Add a new todo item and press Enter to save it
async addTodo(title) {

await this.todoInput.fill(title);

await this.todoInput.press('Enter');

}

// Return the todo item matching the specified title
todo(title) {

return this.todoItems.filter({ hasText: title });

}

// Mark the specified todo item as completed
async completeTodo(title) {

await this.todo(title).locator('.toggle').check();

}

// Select the Completed filter to display completed todos
async showCompletedTodos() {

await this.completedFilter.click();

}

// Select the Active filter to display active todos
async showActiveTodos() {

await this.activeFilter.click();

}

}

// Export TodoPage so it can be imported and used in the test file
module.exports = { TodoPage };