import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import TodoListItem from "./TodoListItem";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

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

const TodoList = () => {
  return (
    <div style={{ width: "100%", position: "relative"}}>
      <div style={{width:'100%', height:'90%', backgroundColor: '#2C3137'}}>
        <div style={{ display: "flex", direction: "row" }}>
          <div className="highlight-dropdown"></div>
          <Dropdown style={{ width: "100%" }} variant="dark" as={ButtonGroup}>
            <Dropdown.Toggle variant="dark" split id="dropdown-split-basic">
              Workspace
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="#/action-1">Personal</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Work</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <TodoListItem />
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: "35%",marginBottom:'10px' }}>
        <AddTaskButton variant="contained">Add Task</AddTaskButton>
      </div>
    </div>
  );
};

export default TodoList;
