import { useAppSelector } from '../../store/hooks';
import { selectFilter, selectTodos } from '../../store/todo/todoSlice';
import ToDoItem from '../ToDoItem/ToDoItem';
import styles from './ToDoList.module.scss';

const ToDoList = (): JSX.Element => {
	const todos = useAppSelector(selectTodos);
	const filterCategory = useAppSelector(selectFilter);
	
	return (
		<>
			{todos.length > 0 ?
				<ul className={styles.todoList}>
					
					{filterCategory === 'All' && todos.map(todo => (
						<ToDoItem key={todo.id} todo={todo} />
					)).reverse()}

					{filterCategory === 'Active' && todos.filter(todo => todo.completed === false).map(todo => (
						<ToDoItem key={todo.id} todo={todo} />
					)).reverse()}

					{filterCategory === 'Completed' && todos.filter(todo => todo.completed === true).map(todo => (
						<ToDoItem key={todo.id} todo={todo} />
					)).reverse()}

				</ul>
				:
				<div className={styles.todoNoneMessage}>No tasks</div>
			}
		</>
	);
};

export default ToDoList;
