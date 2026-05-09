export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <>
            <ul className="list">
            {todos.length === 0 && "No Todos"}
            {todos.map(todo => {
                return  ( 
                <li className="list-item" key={todo.id}>
                    <label>
                    <input type="checkbox" checked={todo.completed} 
                    onChange={e => toggleTodo(todo.id, e.target.checked)} />
                    <span>{todo.title}</span>
                    </label>
                    <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
                </li>
                )
            })
            }
            </ul>
        </>
    )
}