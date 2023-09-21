import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { deleteUser, getUsers, postUser, putUser } from "./Api/api.js";
import { Form } from "./components/Form";
import { ListOfUsers } from "./components/ListOfUsers";
import { DeletePopUp } from "./components/DeletePopUp";

const userFields = {
  name: "",
  email: "",
  number: "",
};

class App extends Component {
  state = {
    initialData: null,
    isFormOpen: false,
    isdeletePop: false,
    deleteUserId: null,
    isEditForm: false,
    currentUserData: null,
  };
  // retrive data from backend
  componentDidMount() {
    this.getDataFromAPi();
  }

  //add new user to data base
  addUser = async (userData) => {
    const { name, email, number } = userData;
    const data = {
      name,
      email,
      number,
    };
    await postUser(data);
    this.getDataFromAPi();
  };

  // edit existing user data
  editUserData = async (data) => {
    const { isEditForm } = this.state;
    const userId = data.id;
    if (isEditForm) {
      await putUser(data, userId);
      setTimeout(() => alert("User Updated"), 2000);
    } else {
      try {
        await postUser(data);
        setTimeout(() => alert("User Added"), 2000);
      } catch (error) {
        alert("Error While fetching", error);
      }
    }

    this.getDataFromAPi();
    this.setState({ isFormOpen: false });
  };

  // delete existing user data
  deleteUser = async (userId) => {
    await deleteUser(userId);
    this.getDataFromAPi();
  };

  //
  onClickCancel = () => {
    this.setState({ isFormOpen: false });
  };

  onClickSave = () => {
    this.setState({ isFormOpen: true });
  };

  onClickAdd = () => {
    this.setState({
      isFormOpen: true,
      isEditForm: false,
      currentUserData: userFields,
    });
  };

  onClickEdit = (userData) => {
    this.setState({
      isFormOpen: true,
      isEditForm: true,
      currentUserData: userData,
    });
  };

  getDataFromAPi = async () => {
    try {
      const response = await getUsers();
      const data = await response.data;
      this.setState({ initialData: data });
    } catch (error) {
      console.log("Error while Fetching:", error);
    }
  };

  onClickDelete = (id) => {
    this.setState({ isdeletePop: true, deleteUserId: id });
  };

  onDeleteNo = () => {
    this.setState({ isdeletePop: false }, this.getDataFromAPi);
  };

  onDeleteConfirm = async () => {
    const { deleteUserId } = this.state;
    this.setState({ isdeletePop: false });
    this.deleteUser(deleteUserId);
  };

  render() {
    const {
      initialData,
      isFormOpen,
      isdeletePop,

      currentUserData,
    } = this.state;
    // initialData && console.log(initialData);
    return (
      <div className="wrapper p-5">
        <ol className="d-flex flex-column flex-grow-0 w-100">
          <h2>CRUD OPERATIOSN</h2>
          <details>
            <summary>About</summary>
            <li>
              <b>Create</b>
            </li>
            <li>
              <b>Read</b>
            </li>
            <li>
              <b>Update</b>
            </li>
            <li>
              <b>Delete</b>
            </li>
          </details>
        </ol>
        {/*  */}
        <div className="add-btn-container">
          <p className="mr-3">Add New user Here </p>
          <button
            onClick={this.onClickAdd}
            className="btn btn-primary ml-2"
            type="button"
          >
            + Add
          </button>
        </div>
        {/*  */}

        <ListOfUsers
          initialData={initialData}
          onClickEdit={this.onClickEdit}
          onClickDelete={this.onClickDelete}
        />

        {isFormOpen && (
          <Form
            closeForm={this.onClickCancel}
            data={currentUserData}
            onClickCancel={this.onClickCancel}
            editUserData={this.editUserData}
          />
        )}
        {isdeletePop && (
          <DeletePopUp
            onDeleteNo={this.onDeleteNo}
            onDeleteConfirm={this.onDeleteConfirm}
          />
        )}
      </div>
    );
  }
}

export default App;
