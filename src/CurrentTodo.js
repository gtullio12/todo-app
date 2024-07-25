import EasyEdit, { Types } from "react-easy-edit";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { api } from "./api";


const CurrentTodo = ({ todo, updateTodos, setCurrentTodo }) => {

  const handleTodoContentChange = (event) => {
    setCurrentTodo({ Content: event.target.value, Title: todo.Title, Id: todo.Id, IsDone: todo.IsDone });
  };

  const handleSaveTodoContent = () => {
    // Call the edit todo API
    api.put('http://localhost:8080/editTodo', {
      "Id": todo.Id,
      "title": todo.Title,
      "content": todo.Content,
      "isDone": todo.IsDone,
    });
    updateTodos();
    setCurrentTodo({ Content: todo.Content, Title: todo.Title, Id: todo.Id, IsDone: todo.IsDone });
  }

  const SaveTodoButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "#6C40EC",
    "&:hover": {
      backgroundColor: "#812387",
    },
    width: "100px",
    height: "30px",
    fontSize: 8,
  }));

  const save = (value) => {
    setCurrentTodo({ Content: todo.Content, Title: value, Id: todo.Id, IsDone: todo.IsDone });
    api.put('http://localhost:8080/editTodo', {
      "Id": todo.Id,
      "title": value,
      "content": todo.Content,
      "isDone": todo.IsDone,
    });
    updateTodos();
  };

  const cancel = () => {
    // do something
  };

  return (
    <div
      style={{
        position: "absolute",
      }}
    >
      <EasyEdit
        class="easy-edit-container"
        value={todo.Title}
        type={Types.TEXT}
        onSave={save}
        onCancel={cancel}
        saveButtonLabel="Save"
        cancelButtonLabel="Cancel"
        attributes={{ name: "awesome-input", id: 1 }}
      />
      <textarea
        style={{
          position: "absolute",
          top: '35px',
          color: "white",
          backgroundColor: "#353A40",
        }}
        value={todo.Content}
        onChange={handleTodoContentChange}
        name="editTodo"
        rows={4}
        cols={40}
      />
      <SaveTodoButton
        onClick={handleSaveTodoContent}
        style={{
          position: 'absolute',
          top: '140px',
          left: '250px',
        }}
        variant="contained">Save</SaveTodoButton>
    </div>
  );
};

export default CurrentTodo;
