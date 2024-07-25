import { useState, useEffect } from "react";
import './TodoListItem.css';
import { BiSolidTrash } from "react-icons/bi";
import { styled } from 'styled-components';

const TodoItem = styled.span`
    color: white;
    font-size: 10px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

var trashCanStyle = {
  color: '#633B48',
  position: 'absolute',
  marginTop: '9px',
  right: 0
}

const TodoListItem = ({ todos, setCurrentTodos, setCurrentTodo }) => {
  const todoComponents = todos.map((todo) => {
    return (
      <div
        style={{
          display: "flex",
          direction: "row",
          backgroundColor: "#2C3137",
        }}
      >
        <div onClick={() => {
          setCurrentTodo(todo)
        }}>
          <TodoItem>{todo.Title}</TodoItem>
        </div>
        <BiSolidTrash
          style={trashCanStyle}
        />
        <CheckBox />
      </div>
    );
  });

  return <div>{todoComponents}</div>;
};

const CheckBox = () => {
  useEffect(() => {
    window.onclick = (event) => {
    };
  }, []);

  return (
    <div>
      <input className="checkBox" type="checkbox" id="checkbox" />
    </div>
  );
};

export default TodoListItem;
