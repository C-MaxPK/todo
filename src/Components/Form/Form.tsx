import { FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '../../store/hooks';
import { addTask } from '../../store/todo/todoSlice';
import styles from './Form.module.scss';

const Form = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const [ inputValue, setInputValue] = useState<string>('');
	const [ errorMinSignFlg, setErrorMinSignFlg] = useState<boolean>(false);

	const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		setErrorMinSignFlg(false);

		if (inputValue.length > 0) {
			dispatch(addTask({id: uuidv4(), task: inputValue, completed: false}));
			setInputValue('');
		} else {
			setErrorMinSignFlg(true);
		}
	};

	return (
		<>
			<form className={styles.taskForm} onSubmit={e => submitHandler(e)}>
				<input
					className={styles.taskInput}
					type="text"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder='What need to be done?'	
					/>
				<button className={styles.addTaskBtn}>Add task</button>
			</form>

			{errorMinSignFlg && <div className={styles.error}>Please enter at least one character</div>}
		</>
	);
};

export default Form;
