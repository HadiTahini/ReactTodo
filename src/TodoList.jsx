import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo,deleteTodo }) {
    return (
        <ul className="list">
            {/* the code on below will display No todos if the list is empty*/}
            {todos.length === 0 && "No Todos"}
            {todos.map(todo => {
                return (
                    /*
                                        I can use this or the version below
                                        <TodoItem id={todo.id} completed={todo.completed} 
                                        title={todo.title} key={todo.id}/>
                    */
                    <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
                )
            })}
        </ul>
    )
}