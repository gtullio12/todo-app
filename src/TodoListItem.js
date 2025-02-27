import { useState, useEffect } from "react";
import './TodoListItem.css';
import { BiSolidTrash } from "react-icons/bi";
import { styled } from 'styled-components';

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
  const [todoDecoration, setTodoDecoration] = useState("underline"); // Can either be 'underline' or 'line-through'
  const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(false);

  const handleCheckedBox = (event) => {
    if (event.target.value === 'on') {
      setIsCheckBoxChecked(!isCheckBoxChecked);
    }
  }

  useEffect(() => {
    if (isCheckBoxChecked === true) {
      setTodoDecoration('line-through');
    }
  }, [isCheckBoxChecked]);


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
          setTodoDecoration("line-through");
          setCurrentTodo(todo)
        }}>
          <TodoItem $textDecoration={todoDecoration} >{todo.Title}</TodoItem>
        </div>
        <BiSolidTrash
          style={trashCanStyle}
        />
        <div>
          <input onChange={handleCheckedBox} className="checkBox" type="checkbox" id="checkbox" />
        </div>
      </div>
    );
  });

  return <div>{todoComponents}</div>;
};


export default TodoListItems;
