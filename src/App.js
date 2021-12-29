import "./App.css";
import {
  Button,
  Navbar,
  Container,
  Form,
  ProgressBar,
  InputGroup,
  FormControl,
  Table,
  Spinner
} from "react-bootstrap";
import {
  getDatabase,
  ref,
  onValue,
  set,
  get
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import { useState, useEffect } from "react";
import Task from "./components/Task.js";
import Inputs from "./components/Inputs.js";
import {db} from './firebase.js'

   
function App() {
  const [name, setName] = useState("");
  const [score, setScore] = useState("5");
  
  const [todo, setTodo] = useState();

useEffect(()=>{
  const newRef =  ref(db, 'users/'+ "teF47kesi2X88p4pyJpUkZ0FEX92")    
  onValue(newRef,(snapshot)=>{
    const todos= snapshot.val()
    const todoList=[]
    for (let id in todos) {
      todoList.push({id,...todos[id]})

    }
    setTodo(todoList)
    
  }) 
},[])

  useEffect(()=>{
    if(todo){const objList={}
    for (let i =0;i < todo.length;i++) {
      objList[`${i}`]=todo[i]
    }
    set(ref(db, "users/" + "teF47kesi2X88p4pyJpUkZ0FEX92"), objList);}
  },[todo])

  const [scoreProgress, setscoreProgress] = useState(0);
  let prupose = 1000;
  const handleClick = () => {
    const addTodo = [
      ...todo,
      {
        id: `${todo.length}`,
        name: name,
        score: score,
        isDone: false,
      },
    ];
    setTodo(addTodo);
    setName("");
    setScore("5");
  };

  const removeTodo = (id) => {
    const removetodos = [...todo];
    removetodos.splice(id, 1);
    setTodo(removetodos);
  };

  const markTodo = (id, num) => {
    const markTodos = [...todo];
    markTodos[id].isDone = !markTodos[id].isDone;
    setscoreProgress(scoreProgress + parseInt(num));
    setTodo(markTodos);
    removeTodo(id);
  };

 

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <div>Score:{scoreProgress}</div>
        </Container>
      </Navbar>
      <ProgressBar  animated now={(100 * scoreProgress) / prupose} />

      <Inputs handleClick={handleClick} name={name} score={score} 
      setScore={setScore} setName={setName}/>

      <Table striped hover variant="dark">
        <thead>
          <tr>
            <th>Task name</th>
            <th>Score</th>
            <th>Buttons</th>
          </tr>
        </thead>
        <tbody>
          {todo &&
            todo.map((todo, id) => (
              <Task
                key={id}
                id={id}
                todo={todo}
                removeTodo={removeTodo}
                markTodo={markTodo}
              />
            ))}
        </tbody>
      </Table>
    </>
  );
}

export default App;
