import { Button } from "react-bootstrap";

function Task({ id, todo, removeTodo, markTodo }) {
  return (
    <>
      <tr>
        <td>{todo.name}</td>
        <td>{todo.score}</td>
        <td>
          <Button size='sm' variant="outline-success" onClick={() => markTodo(id, todo.score)}>&#10004;</Button>
          <Button size='sm' variant="outline-danger" onClick={() => removeTodo(id)}>&#10006;</Button>
        </td>
      </tr>
    </>
  );
}

export default Task;
