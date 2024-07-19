import { useState, useEffect } from "react";
import './TodoListItem.css';
import { BiSolidTrash } from "react-icons/bi";
import { api } from "./api";

var trashCanStyle = {
  color: '#633B48',
  position: 'absolute',
  right: 0
}

const TodoListItem = () => {
  const [todoComponents, setTodoComponents] = useState([]);

  useEffect(() => {
    api.get(process.env.TODO_API_BACKEND_ENDPOINT)
      .then(r => r.json())
      .then(r => Array.from(r))
      .then(r => r.map((todo) => {
        return (
          <div
            style={{
              display: "flex",
              direction: "row",
              backgroundColor: "#2C3137",
            }}
          >
            <p style={{ color: "white", fontSize: "10px" }}>{todo.Title}</p>
            <BiSolidTrash
              style={trashCanStyle}
            />
            <CheckBox />
          </div>
        );
      }))
      .then(r => setTodoComponents(r))
  }, []);

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
