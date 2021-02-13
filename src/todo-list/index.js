export const initTodoApp = () => {
  console.log('init todo list');
  const appEl = document.createElement('div');
  appEl.innerHTML = 'Todo list application';
  appEl.classList.add('todo-app');
  document.getElementById('root').appendChild(appEl);
};
