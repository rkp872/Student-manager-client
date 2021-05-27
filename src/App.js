import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AddStudent from "./components/AddStudent";
import GetAllStydents from "./components/GetAllStudents";
import UpdateStudent from "./components/UpdateStudent";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add-student" exact component={AddStudent} />
          <Route path="/get-students" exact component={GetAllStydents} />
          <Route path="/update" exact component={UpdateStudent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
