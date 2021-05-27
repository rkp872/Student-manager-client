import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.location.message,
    };
  }

  render() {
    return (
      <div style={{ backgroundColor: "#e1f5fe", height: "100vh" }}>
        <div className="row">
          <div className="col-md-6 offset-3">
            {this.state.message ? (
              <div
                className="container mt-5 text-center"
                style={{ fontFamily: "Arial Black", fontWeight: "bold" }}
              >
                <h5 className={`alert alert-${this.state.message.type}`}>
                  {this.state.message.message}
                </h5>
              </div>
            ) : (
              ""
            )}
            <div className="card shadow-lg mt-4">
              <div className="card-body">
                <h1 className="text-center">Welcome to Student Manager</h1>
                <hr />
                <div className="container">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tenetur rerum consectetur natus eaque, similique aut libero
                  ipsam, debitis inventore neque ad blanditiis quidem asperiores
                  temporibus adipisci recusandae laborum sit architecto.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
