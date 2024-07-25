import "bootstrap/dist/css/bootstrap.min.css";
import "./TodoList.css";
import "./TodoListItem.css";
import TodoList from "./TodoList";
import CurrentTodo from "./CurrentTodo";
import { useEffect, useState } from "react";
import { api } from "./api";

function App() {
  const [personalTodos, setPersonalTodos] = useState([]);
  const [workTodos, setWorkTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState({});
  const [workspace, setCurrentWorkspace] = useState("personal");

  const updateTodos = () => {
    api.get('http://localhost:8080/getTodos')
      .then(r => r.json())
      .then(r => {
        return r ? Array.from(r) : [];
      })
      .then(r => r.map((val) => JSON.stringify(val)))
      .then(r => r.map((val) => JSON.parse(val)))
      .then(r => {
        var ptds = [];
        var wtds = [];
        r.forEach((val) => {
          if (val.Workspace === 'personal') {
            ptds.push(val);
          } else {
            wtds.push(val);
          }
        });
        setPersonalTodos(ptds);
        setWorkTodos(wtds);
      });
  }

  useEffect(() => {
    updateTodos();
  }, [currentTodo])

  return (
    <div
      style={{ display: "flex", direction: "row", backgroundColor: "#353A40", height: '100vh' }}
      className="App"
    >
      <div style={{ display: "flex", width: "40%", height: "100vh" }}>
        <TodoList
          todos={workspace === 'personal' ? personalTodos : workTodos}
          setCurrentTodos={workspace === 'personal' ? setPersonalTodos : setWorkTodos}
          setCurrentTodo={setCurrentTodo}
          updateTodos={updateTodos}
          workspace={workspace}
          setCurrentWorkspace={setCurrentWorkspace}
          style={{
            height: '100vh'
          }} />
      </div>
      <div style={{ marginBottom: '10%', marginTop: '10%', marginRight: '10%', marginLeft: '10%', display: "flex", width: "60%", height: "100%" }}>
        <CurrentTodo
          todo={currentTodo}
          updateTodos={updateTodos}
          setCurrentTodo={setCurrentTodo}
        />
      </div>
    </div>
  );
}

export default App;
