import { Component } from "react";

class BootstrapForm extends Component {
  constructor() {
    super();

    this.state = {
      fname: "",
      email: "",
      password: "",
      dateData: "",
      language: "",
      slecOption: "",
    };
  }

  nameChangeHandler = (event) => {
    this.setState({
      fname: event.target.value,
    });
  };

  dateChangeHandler = (event) => {
    this.setState({
      dateData: event.target.value,
    });
  };

  submitForm = (e) => {
    console.log(this.state);
    e.preventDefault();
  };

  radioHandler = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  pwdHandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  emailHandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  selectHandler = (event) => {
    this.setState({
      slecOption: event.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="row m-0">
          <div className="col-sm-12 text-center">
            <h4>Bootstrap Form</h4>
          </div>
          <form className="row" onSubmit={this.submitForm}>
            <div className="col-sm-2 "></div>
            <div className="col-sm-4 ">
              <div className="form-group mb-2">
                <label className="mb-2">Input name</label>

                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  value={this.state.fname}
                  onChange={this.nameChangeHandler}
                  placeholder="Input Name"
                  required
                />
              </div>

              <div className="form-group mb-2">
                <label className="mb-2">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  onChange={this.emailHandler}
                  placeholder="Input Email"
                />
              </div>

              <div className="form-group mb-2">
                <label className="mb-2">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPwd"
                  onChange={this.pwdHandler}
                  placeholder="Input Password"
                />
              </div>
            </div>

            <div className="col-sm-4">
              <div className="form-group mb-2">
                <label className="mb-2">Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="inputDate"
                  value={this.state.dateData}
                  onChange={this.dateChangeHandler}
                  placeholder="Input Date"
                  required
                />
              </div>

              <div className="form-group mb-2">
                <label>Select Lanugage</label>
                <br />
                <label className="mb-2">ABC &ensp;</label>
                <input
                  type="radio"
                  id="inputRadio1"
                  name="fav_language"
                  value="ABC"
                  onChange={this.radioHandler}
                />{" "}
                <br />
                <label className="mb-2">HTML &ensp;</label>
                <input
                  type="radio"
                  id="inputRadio2"
                  name="fav_language"
                  value="HTML"
                  onChange={this.radioHandler}
                />{" "}
                <br />
                <label className="mb-2">JS &ensp;</label>
                <input
                  type="radio"
                  id="inputRadio3"
                  name="fav_language"
                  value="JS"
                  onChange={this.radioHandler}
                />{" "}
                <br />
              </div>

              <div className="form-group mb-2">
                <label className="mb-2">Select Option</label>

                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={this.selectHandler}
                >
                  <option defaultValue>Open this select menu</option>
                  <option value="One">One</option>
                  <option value="Two">Two</option>
                  <option value="Three">Three</option>
                </select>
              </div>
            </div>
            <div className="col-sm-12 text-center">
              <button type="submit" className="btn btn-primary mt-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default BootstrapForm;
