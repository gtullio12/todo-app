import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import TodoListItems from './TodoListItems.js';
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { api } from "./api.js";

const AddTaskButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "#6C40EC",
  "&:hover": {
    backgroundColor: "#812387",
  },
  width: "100px",
  height: "30px",
  fontSize: 8,
}));

const TodoList = ({ todos, updateTodos, setCurrentTodos, setCurrentTodo, workspace, setCurrentWorkspace }) => {
  const addTodo = () => {
    api.post('https://todo-app-production-8c19.up.railway.app/createTodo', {
      'Content': '',
      'Title': 'Enter Title...',
      'IsDone': false,
      'Workspace': workspace,
    })
      .then(r => updateTodos());
  };

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <div style={{ position: 'absolute', width: '100%', height: '90%', backgroundColor: '#2C3137' }}>
        <div style={{ display: "flex", direction: "row" }}>
          <div className="highlight-dropdown"></div>
          <Dropdown style={{ width: "100%" }} variant="dark" as={ButtonGroup}>
            <Dropdown.Toggle variant="dark" split id="dropdown-split-basic">
              {workspace.charAt(0).toUpperCase() + workspace.slice(1)}
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item onClick={() => setCurrentWorkspace('personal')} href="#/action-1">Personal</Dropdown.Item>
              <Dropdown.Item onClick={() => setCurrentWorkspace('work')} href="#/action-2">Work</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <TodoListItems
            todos={todos}
            updateTodos={updateTodos}
            setCurrentTodos={setCurrentTodos}
            setCurrentTodo={setCurrentTodo} />
        </div>
      </div>
      <div style={{ position: "fixed", bottom: 0, left: '10%' }}>
        <AddTaskButton onClick={addTodo} variant="contained">Add Task</AddTaskButton>
      </div>
    </div>
  );
};

export default TodoList;
