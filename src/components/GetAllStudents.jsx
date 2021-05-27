import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import axios from "axios";
import handleUpdate from "./AddStudent";
import api from "./../../const";

export default class GetAllStydents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 2,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  handleDelete(id) {
    axios
      .delete(`${api}/student/${id}`)
      .then((result) => {
        this.props.history.push({
          pathname: "/",
          message: result.data,
        });
      })
      .catch((err) => console.log(err));
  }
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.loadMoreData();
      }
    );
  };

  loadMoreData() {
    const data = this.state.orgtableData;

    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      tableData: slice,
    });
  }

  componentDidMount() {
    this.getData();
  }
  getData() {
    axios
      .get(`${api}/student/`)
      .then((res) => {
        console.log(res);
        var data = res.data;

        var slice = data.slice(
          this.state.offset,
          this.state.offset + this.state.perPage
        );

        this.setState({
          pageCount: Math.ceil(data.length / this.state.perPage),
          orgtableData: res.data,
          tableData: slice,
        });
      })
      .catch((error) => {
        this.props.history.push("/internal-server-error");
      });
  }

  render() {
    return (
      <>
        <div style={{ backgroundColor: "#e6ffff", height: "600px" }}>
          <div className="row">
            <div className="col-md-8 offset-2">
              <div className="card shadow-lg  bg-white rounded mt-5">
                <div className="card-body">
                  <h1
                    className="text-center"
                    style={{ fontFamily: "Arial Black", color: "#757575" }}
                  >
                    Students
                  </h1>
                  <table className="styled-table ">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Stream</th>
                        <th>Roll</th>
                        <th>Reg</th>
                        <th>Picture</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.tableData.map((tdata, i) => (
                        <tr>
                          <td>{tdata.name}</td>
                          <td>{tdata.email}</td>
                          <td>{tdata.phone}</td>
                          <td>{tdata.stream}</td>
                          <td>{tdata.roll}</td>
                          <td>{tdata.regNumber}</td>
                          <td>
                            <img
                              src={tdata.pic}
                              alt=""
                              style={{ width: "100px", height: "100px" }}
                            />
                          </td>
                          <td>
                            <Link
                              className="btn btn-sm btn-outline-secondary"
                              to={{
                                pathname: "/update",
                                data: tdata,
                              }}
                            >
                              <i class="fa fa-edit"></i>
                            </Link>
                            <button
                              className="btn btn-sm btn-outline-danger mt-2"
                              onClick={() => {
                                this.handleDelete(tdata.id);
                              }}
                            >
                              <i class="fa fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="container " style={{ marginLeft: "225px" }}>
                    <ReactPaginate
                      previousLabel={"prev"}
                      nextLabel={"next"}
                      breakLabel={"..."}
                      breakClassName={"break-me"}
                      pageCount={this.state.pageCount}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      onPageChange={this.handlePageClick}
                      containerClassName={"pagination"}
                      subContainerClassName={"pages pagination"}
                      activeClassName={"active"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
