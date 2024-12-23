import styles from "./todoitem.module.css";
export default function Todoitem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete button clicked for item", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  const classComplete = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={classComplete} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            X
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
