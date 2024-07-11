import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

/*
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
  ],
};
*/

const TodoList = () => {
  return <div style={{display: 'flex', direction: 'row'}} >
    <div className="highlight-dropdown" ></div>
    <Dropdown variant="dark" as={ButtonGroup}>
      <Dropdown.Toggle variant="dark" split id="dropdown-split-basic" >Workspace</Dropdown.Toggle>

      <Dropdown.Menu variant="dark">
        <Dropdown.Item href="#/action-1">Personal</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Work</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </div>;
};

export default TodoList;
