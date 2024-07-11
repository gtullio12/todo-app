import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


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

const TodoList = () => {
  return <div style={{backgroundColor: '#353A40'}}>
    <Dropdown data-bs-theme="dark" as={ButtonGroup}>
      <Button variant="dark">Workspace</Button>

      <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1">Personal</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Work</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </div>;
};

export default TodoList;
