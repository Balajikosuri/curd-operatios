import "./index.css";

export const DeletePopUp = (props) => {
  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  const { onDeleteConfirm, onDeleteNo } = props;
  return (
    <div className="form-overlay">
      <form
        onSubmit={(e) => {
          onSubmitForm(e);
        }}
        className="form"
      >
        <div className="form-group mb-2">
          <h2 className="text-danger">Alert !</h2>
          <b className="text-primary font-weight-bold">
            Are Your Sure to Delete ?
          </b>
          <div className="delete-buttons">
            <button
              onClick={() => {
                onDeleteConfirm();
              }}
              className="btn btn-danger"
            >
              Confirm
            </button>
            <button
              onClick={() => {
                onDeleteNo();
              }}
              className="btn btn-success"
            >
              No
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
