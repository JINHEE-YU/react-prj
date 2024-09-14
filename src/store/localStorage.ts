// todo localStorage
export const saveTodoData = (todoData: ITodoItem[]) => {
  localStorage.setItem('todoData', JSON.stringify(todoData));
};

export const loadTodoData = (): ITodoItem[] => {
  const todoData = localStorage.getItem('todoData');
  if (todoData) {
    return JSON.parse(todoData);
  } else {
    return [];
  }
};
// END todo localStorage ===

// memo localStorage
export const saveMemoData = (memoData: IMemoItem[]) => {
  localStorage.setItem('memoData', JSON.stringify(memoData));
};

export const loadMemoData = (): IMemoItem[] => {
  const memoData = localStorage.getItem('memoData');
  if (memoData) {
    return JSON.parse(memoData);
  } else {
    return [];
  }
};
// END memo localStorage ===
