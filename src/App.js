import "bootstrap/dist/css/bootstrap.min.css";
import "./TodoList.css";
import "./TodoListItem.css";
import TodoList from "./TodoList";
import CurrentTodo from "./CurrentTodo";

function App() {
  return (
    <div
      style={{ backgroundColor: 'black',display: "flex", direction: "row", backgroundColor: "#353A40", height:'100vh' }}
      className="App"
    >
      <div style={{display: "flex", width: "40%", height: "100vh" }}>
        <TodoList style={{height:'100vh'}} />
      </div>
      <div style={{marginBottom: '10%', marginTop: '10%', marginRight: '10%',marginLeft: '10%',display: "flex", width: "60%", height: "100%" }}>
        <CurrentTodo />
      </div>
    </div>
  );
}

export default App;
