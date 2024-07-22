import EasyEdit, { Types } from "react-easy-edit";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { api } from "./api";
import { useState } from "react";


const CurrentTodo = ({ todo, updateTodos }) => {

  console.log("Todo content --> " + todo.Content);
  const [todoTitle, setTodoTitle] = useState(todo.Title);
  const [todoContent, setTodoContent] = useState(todo.Content);

  const handleTodoContentChange = (event) => {
    setTodoContent(event.target.value);
  };

  const handleSaveTodoContent = () => {
    // Call the edit todo API
    api.put('http://localhost:8080/editTodo', {
      "Id": todo.Id,
      "title": todoTitle,
      "content": todoContent,
      "isDone": todo.IsDone,
    });
    updateTodos();
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
    setTodoTitle(value);
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
        placeholder={todo.Title}
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
        value={todoContent}
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
