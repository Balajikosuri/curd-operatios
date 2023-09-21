import { Component } from "react";
import "./index.css";

export class Form extends Component {
  state = {
    initialUserData: this.props.data,
    nameInput: "",
    emailInput: "",
    numberInput: "",
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    // this.onClickSave();
  };

  // onChangeName = (e) => {
  //   this.setState({ nameInput: e.target.value });
  // };

  // onChangeEmail = (e) => {
  //   this.setState({ emailInput: e.target.value });
  // };

  // onChangeNumber = (e) => {
  //   this.setState({ numberInput: e.target.value });
  // };

  onClickSave = async () => {
    const { initialUserData } = this.state;
    const { editUserData } = this.props;
    const { name, email, number } = initialUserData;
    if (!!name && !!email && !!number) {
      await editUserData(initialUserData);
    } else {
    }
  };

  changeFormData = (event) => {
    const { name, value } = event.target;
    // const { initialUserData } = this.state;
    this.setState((prevState) => ({
      initialUserData: { ...prevState.initialUserData, [name]: value },
    }));
  };

  render() {
    const { closeForm } = this.props;

    const { initialUserData } = this.state;
    const { name, email, number } = initialUserData;
    return (
      <div className="form-overlay">
        <form
          onSubmit={(e) => {
            this.onSubmitForm(e);
          }}
          className="form"
        >
          <div className="form-group mb-2">
            <label>Name</label>
            <input
              onChange={this.changeFormData}
              id="formName"
              placeholder="Enter Name"
              className="form-control"
              type="text"
              value={name}
              name="name"
            />
            {!name && <span className="text-danger">*Required</span>}
          </div>
          <div className="form-group mb-2">
            <label>Email</label>
            <input
              onChange={this.changeFormData}
              id="formEmail"
              placeholder="Enter Email"
              className="form-control"
              type="text"
              value={email}
              name="email"
            />
            {!email && <span className="text-danger">*Required</span>}
          </div>
          <div className="form-group mb-2">
            <label>Number</label>
            <input
              id="formNumber"
              onChange={this.changeFormData}
              placeholder="+91 7894561230"
              className="form-control"
              type="text"
              value={number}
              name="number"
            />
            {!number && <span className="text-danger">*Required</span>}
          </div>
          <div className="form-group mb-2 buttons">
            <button onClick={this.onClickSave} className="btn btn-success">
              Save
            </button>
            <button onClick={closeForm} className="btn btn-danger">
              cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}
