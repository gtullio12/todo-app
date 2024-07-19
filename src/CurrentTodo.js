import EasyEdit, { Types } from "react-easy-edit";

const CurrentTodo = ({ todo }) => {
  const save = (value) => {
    // Do something
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
        name="editTodo"
        rows={4}
        cols={40}
      />
    </div>
  );
};

export default CurrentTodo;
