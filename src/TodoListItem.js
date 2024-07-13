import { useState, useRef, useEffect } from "react";
import './TodoListItem.css';
import { BiSolidTrash } from "react-icons/bi";

const TODOS = {
  todos: [
    {
      title: "Update Documentation",
      content: "some content",
    },
    {
      title: "Add GET API",
      content: "some content",
    },
    {
      title: "Update POST API",
      content: "some content",
    },
    {
      title: "Add method headers for post",
      content: "some content",
    },
    {
      title: "Add .gitignore file",
      content: "some content",
    },
    {
      title: "Deploy into production",
      content: "some content",
    },
    {
      title: "Deploy into alpha and beta",
      content: "some content",
    },
    {
      title: "Deploy to pipeline",
      content: "some content",
    },
{
      title: "Deploy to pipeline",
      content: "some content",
    },
{
      title: "Deploy to pipeline",
      content: "some content",
    },
{
      title: "Deploy to pipeline",
      content: "some content",
    },
{
      title: "Deploy to pipeline",
      content: "some content",
    },
{
      title: "Deploy to pipeline",
      content: "some content",
    },
{
      title: "Deploy to pipeline",
      content: "some content",
    },
  ],
};

var trashCanStyle = {
 color: '#633B48',
 display: "block", 
 marginLeft: "auto", 
 marginRight: "0px" 
}

const TodoListItem = () => {
  const [deleteStyle, setDeleteStyle] = useState(trashCanStyle);

  const todos = TODOS.todos.map((todo) => {
    return (
      <div
        style={{
          display: "flex",
          direction: "row",
          backgroundColor: "#2C3137",
        }}
      >
        <p style={{ color: "white", fontSize: "10px" }}>{todo.title}</p>
        <BiSolidTrash
          style={deleteStyle}
        />
        <CheckBox />
      </div>
    );
  });
  return <div>{todos}</div>;
};

const CheckBox = () => {
  const checkBoxRef = useRef();

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
