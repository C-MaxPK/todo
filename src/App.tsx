import { useAppSelector } from './store/hooks';
import { selectTodos } from './store/todo/todoSlice';
import Form from './Components/Form/Form';
import ToDoList from './Components/ToDoList/ToDoList';
import Filtration from './Components/Filtration/Filtration';
import styles from './App.module.scss';

const App = (): JSX.Element => {
  const todos = useAppSelector(selectTodos);

  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>ToDos</h1>
        <Form />
        <ToDoList />
        {todos.length > 0 && <Filtration />}
      </div>
    </div>
  );
}

export default App;
