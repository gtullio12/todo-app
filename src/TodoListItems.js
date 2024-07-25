import { useState, useEffect } from "react";
import './TodoListItem.css';
import { BiSolidTrash } from "react-icons/bi";
import { styled } from 'styled-components';
import { api } from "./api";

const TodoItem = styled.span`
${(props) => {
    switch (props.$textDecoration) {
      case ("line-through"):
        return `
        color: grey;
        font-size: 10px;
        cursor: pointer;
        text-decoration: line-through`;
      default:
        return `
          color: white;
          font-size: 10px;
          cursor: pointer;
          &:hover {
          text-decoration: underline;
          }`;
    }
  }
  }`;

var trashCanStyle = {
  color: '#633B48',
  position: 'absolute',
  marginTop: '9px',
  right: 0
}

const TodoListItems = ({ todos, setCurrentTodos, setCurrentTodo }) => {

  const todoComponents = todos.map((todo) => {
    return (
      <TodoListItem
        todo={todo}
        setCurrentTodo={setCurrentTodo}
      />
    );
  });

  return <div>{todoComponents}</div>;
};

const TodoListItem = ({ todo, setCurrentTodo }) => {

  const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(false);

  const handleCheckedBox = (event) => {
    if (event.target.value === 'on') {
      setIsCheckBoxChecked(!isCheckBoxChecked);
    }
  }

  const todoItemDeleted = () => {
    api.delete('http://localhost:8080/deleteTodo', {
      Id: todo.Id
    });
  }

  useEffect(() => {
    if (isCheckBoxChecked === true) {
      setTodoDecoration('line-through');
    } else {
      setTodoDecoration('none');
    }
  }, [isCheckBoxChecked]);

  const [todoDecoration, setTodoDecoration] = useState("underline");
  return (
    <div
      style={{
        display: "flex",
        direction: "row",
        backgroundColor: "#2C3137",
      }}
    >
      <div onClick={() => {
        setTodoDecoration("line-through");
        setCurrentTodo(todo)
      }}>
        <TodoItem $textDecoration={todoDecoration} >{todo.Title}</TodoItem>
      </div>
      <BiSolidTrash
        onClick={todoItemDeleted}
        style={trashCanStyle}
      />
      <div>
        <input onChange={handleCheckedBox} className="checkBox" type="checkbox" id="checkbox" />
      </div>
    </div>
  );
};


export default TodoListItems;
