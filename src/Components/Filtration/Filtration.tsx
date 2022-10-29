import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { showFilterTodo, clearTodo, selectFilter, FilterType } from '../../store/todo/todoSlice';
import styles from './Filtration.module.scss';

const Filtration = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const filterCategory = useAppSelector(selectFilter);
	const arrayFiltersBtn = [FilterType.ALL, FilterType.ACTIVE, FilterType.COMPLETED];

	const filterHandler = (btn: FilterType): void => {
		if (btn !== filterCategory) {
			dispatch(showFilterTodo(btn));
		}
	};

	return (
		<div className={styles.filtration}>
			{arrayFiltersBtn.map(btn => (
				<div
					className={cn(styles.filtrationBtn, {
						[styles.filtrationBtnActive]: btn === filterCategory
					})}
					onClick={() => filterHandler(btn)}
					key={btn}
				>
					{btn}
				</div>
			))}

			<div className={styles.filtrationBtn} onClick={() => dispatch(clearTodo())}>Clear</div>
		</div>
	);
};

export default Filtration;
