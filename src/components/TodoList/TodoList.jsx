import { useContext } from "react"
import TodoContext from "../../context/TodoContext"
import Todo from "../Todo/Todo"

function TodoList() {

    const { todos, dispatch } = useContext(TodoContext)

    function onDeleteTodo(id) {
        dispatch({ type: "delete_todo", payload: { id } })
    }

    function onEditTodo(id, newTodo) {
        dispatch({ type: "edit_todo", payload: { id, newTodo } })
    }

    function onFinished(id, state) {
        dispatch({ type: "finish_todo", payload: { id, state } })
    }
    return (
        todos && todos.map(
            (todo) => <Todo
                key={todo.id}
                text={todo.text}
                isFinished={todo.isFinished}
                editTodo={(newTodo) => onEditTodo(todo.id, newTodo)}
                deleteTodo={() => onDeleteTodo(todo.id)}
                finishedTodo={(state) => onFinished(todo.id, state)}
            />)
    )
}

export default TodoList