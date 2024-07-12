import 'bootstrap/dist/css/bootstrap.min.css';
import './TodoList.css';
import './TodoListItem.css'
import TodoList from "./TodoList";

function App() {
  return (
    <div style={{backgroundColor: '#353A40'}} className="App">
      <TodoList  style={{backgroundColor: '#353A40'}}/>
    </div>
  );
}

export default App;
