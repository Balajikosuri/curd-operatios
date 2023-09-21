import "./index.css";

export const ListOfUsers = (props) => {
  const { initialData, onClickEdit, onClickDelete } = props;

  return (
    <div className="w-100 usersList">
      <table className="table m-2">
        <thead>
          <tr className="border">
            <th className="border">S.No</th>
            <th className="border">Id</th>
            <th className="border">Name</th>
            <th className="border">Email</th>
            <th className="border">Phone Number</th>
            <th className="text-right">Operations</th>
          </tr>
        </thead>
        <tbody>
          {initialData &&
            initialData.map((userData, i) => (
              <tr key={userData.id} className="border">
                <th className="border p-2 text-center">{i + 1}</th>
                <td className="border p-2 text-center">{userData.id}</td>
                <td className="border p-2 text-left">{userData.name}</td>
                <td className="border p-2 text-left">{userData.email}</td>
                <td className="border p-2 text-left">{userData.number}</td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => onClickEdit(userData)}
                    className="btn btn-success"
                    type="button"
                  >
                    Edit
                  </button>
                </td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => {
                      onClickDelete(userData.id);
                    }}
                    className="btn btn-danger"
                    type="button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
