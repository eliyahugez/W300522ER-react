export const SetArray = () => {
  const INITIAL_TODO = { todo: "" };
  const [task, setTask] = useState(INITIAL_TODO);
  const [tasks, setTasks] = useState([]);

  // immutable - can't be changed
  const createNewTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask(INITIAL_TODO);
  };

  return (
    <div>
      <form>
        <h5>
          Todo: <span style={{ fontWeight: "bolder" }}>{task.todo}</span>
        </h5>
        <input
          type="text"
          value={task.todo}
          onChange={(e) => setTask({ ...task, todo: e.target.value })}
        />
        <button onClick={createNewTask} disabled={!task.todo}>Create</button>
      </form>

      <ul>
        
      </ul>
    </div>
  );
};
