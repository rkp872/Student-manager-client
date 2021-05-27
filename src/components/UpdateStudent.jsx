import React, { Component } from "react";
import axios from "axios";
import { data } from "jquery";
import api from "./../../const";

export default class UpdateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      email: "",
      phone: "",
      stream: "",
      roll: "",
      regNumber: "",
      photo: "",
      pic: "",
    };
  }
  componentDidMount() {
    this.setState({
      id: this.props.location.data.id,
      name: this.props.location.data.name,
      email: this.props.location.data.email,
      phone: this.props.location.data.phone,
      stream: this.props.location.data.stream,
      roll: this.props.location.data.roll,
      regNumber: this.props.location.data.regNumber,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", this.state.photo);
    data.append("upload_preset", "student-manager-app");
    data.append("cloud_name", "rohit872cloud");

    fetch("https://api.cloudinary.com/v1_1/rohit872cloud/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ pic: data.url });
        var formData = new FormData();
        formData.append("name", this.state.name);
        formData.append("email", this.state.email);
        formData.append("phone", this.state.phone);
        formData.append("stream", this.state.stream);
        formData.append("roll", this.state.roll);
        formData.append("regNumber", this.state.regNumber);
        formData.append("pic", this.state.pic);

        axios
          .put(`${api}/student/${this.state.id}`, formData)
          .then((result) => {
            this.props.history.push({
              pathname: "/",
              message: result.data,
            });
          })
          .catch((err) => console.log(err));
      });
  };

  render() {
    return (
      <div style={{ backgroundColor: "#e1f5fe", height: "100vh" }}>
        <div className="row">
          <div className="col-md-4 offset-4">
            <div className="card shadow-lg mt-4">
              <div className="card-body">
                <h1 className="text-center">Add Student</h1>
                <hr />
                <form onSubmit={this.handleSubmit}>
                  <div className="container p-1 form-container">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="">
                          Name
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.name}
                        onChange={(e) =>
                          this.setState({ name: e.target.value })
                        }
                      />
                    </div>
                    <div className="input-group mt-2">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="">
                          Email
                        </span>
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                      />
                    </div>
                    <div className="input-group mt-2">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="">
                          Phone
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.phone}
                        onChange={(e) =>
                          this.setState({ phone: e.target.value })
                        }
                      />
                    </div>
                    <div className="p mt-2">
                      <select
                        className="form-select"
                        value={this.state.stream}
                        onChange={(e) =>
                          this.setState({ stream: e.target.value })
                        }
                      >
                        <option selected>Select Stream</option>
                        <option value="CSE">CSE</option>
                        <option value="ECE">ECE</option>
                        <option value="ME">ME</option>
                        <option value="CE">CE</option>
                        <option value="IT">IT</option>
                      </select>
                    </div>
                    <div className="input-group mt-2">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="">
                          Roll
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.roll}
                        onChange={(e) =>
                          this.setState({ roll: e.target.value })
                        }
                      />
                    </div>
                    <div className="input-group mt-2">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="">
                          Registration Number
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.regNumber}
                        onChange={(e) =>
                          this.setState({ regNumber: e.target.value })
                        }
                      />
                    </div>
                    <div className="mt-2">
                      <input
                        className="form-control"
                        type="file"
                        onChange={(e) =>
                          this.setState({ photo: e.target.files[0] })
                        }
                      />
                    </div>
                    <div className="container text-center mt-3">
                      <button className="btn btn-outline-primary" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
