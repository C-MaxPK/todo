import cn from 'classnames';
import { IoEllipseOutline, IoCheckmarkCircleOutline } from "react-icons/io5";
import { useAppDispatch } from '../../store/hooks';
import { changeStatus, ITodo } from '../../store/todo/todoSlice';
import styles from './ToDoItem.module.scss';

interface IToDoItemProps {
	todo: ITodo;
}

const ToDoItem = ({todo}: IToDoItemProps): JSX.Element => {
	const dispatch = useAppDispatch();

	const changeStatusHandler = (): void => {
		dispatch(changeStatus({id: todo.id, status: todo.completed}));
	};

	return (
		<li className={styles.todoItem}>
			<div className={styles.statusBtn} onClick={changeStatusHandler}>
				{todo.completed ? <IoCheckmarkCircleOutline color='rgb(186, 186, 186)' /> : <IoEllipseOutline />}
			</div>
			<div className={cn(styles.taskMessage, {
					[styles.taskMessageComplete]: todo.completed
				})}
			>
				{todo.task}
			</div>
		</li>
	);
};

export default ToDoItem;
