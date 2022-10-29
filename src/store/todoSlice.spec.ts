import todoReducer, { addTask, changeStatus, showFilterTodo, clearTodo, ITodoState, FilterType } from './todo/todoSlice';

describe('todo reducer', () => {
  const initialState: ITodoState = {
    todos: [
      {
        id: '745873h5g87h30b7547gqg5',
        task: 'задача 1',
        completed: false
      }
    ],
    filter: FilterType.ACTIVE
  };
  it('should handle initial state', () => {
    expect(todoReducer(undefined, { type: 'unknown' })).toEqual({
      todos: [],
      filter: FilterType.ALL
    });
  });

  it('should handle adding', () => {
    const actual = todoReducer(initialState, addTask({
      id: '387hgo8er',
      task: 'задача 2',
      completed: false
    }));
    expect(actual.todos.length).toEqual(2);
    expect(actual.todos[1].id).toEqual('387hgo8er');
  });

  it('should handle status change', () => {
    const actual = todoReducer(initialState, changeStatus({
      id: '745873h5g87h30b7547gqg5',
      status: false
    }));
    expect(actual.todos[0].completed).toEqual(true);
  });

  it('should handle filtering', () => {
    const actual = todoReducer(initialState, showFilterTodo(FilterType.COMPLETED));
    expect(actual.filter).toEqual('Completed');
  });

  it('should handle cleanup', () => {
    const actual = todoReducer(initialState, clearTodo());
    expect(actual).toEqual({
      todos: [],
      filter: FilterType.ALL
    })});
});
