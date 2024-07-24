import "bootstrap/dist/css/bootstrap.min.css";
import "./TodoList.css";
import "./TodoListItem.css";
import TodoList from "./TodoList";
import CurrentTodo from "./CurrentTodo";
import { useEffect, useState } from "react";
import { api } from "./api";

function App() {
  const [currentTodo, setCurrentTodo] = useState({});
  const [todos, setCurrentTodos] = useState([]);

  const updateTodos = () => {
    api.get('http://localhost:8080/getTodos')
      .then(r => r.json())
      .then(r => Array.from(r))
      .then(r => r.map((val) => JSON.stringify(val)))
      .then(r => r.map((val) => JSON.parse(val)))
      .then(r => {
        setCurrentTodos(r)
        setCurrentTodo(r[0]) // Default to display first Todo
      });
  }

  useEffect(() => {
    updateTodos();
  }, [])

  console.log("Current Todo --> " + JSON.stringify(currentTodo))

  return (
    <div
      style={{ display: "flex", direction: "row", backgroundColor: "#353A40", height: '100vh' }}
      className="App"
    >
      <div style={{ display: "flex", width: "40%", height: "100vh" }}>
        <TodoList
          todos={todos}
          setCurrentTodos={setCurrentTodos}
          setCurrentTodo={setCurrentTodo}
          style={{
            height: '100vh'
          }} />
      </div>
      <div style={{ marginBottom: '10%', marginTop: '10%', marginRight: '10%', marginLeft: '10%', display: "flex", width: "60%", height: "100%" }}>
        <CurrentTodo todo={currentTodo} updateTodos={updateTodos} />
      </div>
    </div>
  );
}

export default App;
