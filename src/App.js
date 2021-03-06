import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import AddEmployee from "./component/addEmployee/AddEmployee";
import EditEmployee from "./component/editEmployee/EditEmployee";

function App() {
    return (
        <div className="container">
            <Router>
                <div className="col-md-12">
                    <h1 className="text-center" style={style}></h1>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/add-employee" component={AddEmployee} />
                        <Route path="/edit-employee" component={EditEmployee} />
                        <Route path="/delete-employee" component={Home} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

const style = {
    color: "red",
    margin: "10px",
};

export default App;
