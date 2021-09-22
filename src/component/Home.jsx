import React from "react";
import { Link } from "react-router-dom";
import employees from "../data/employees";
import Employees from "./employeeList/EmployeeList";

const Home = () => {
    return (
        <div>
            <h1 className="text-center">Home</h1>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    border: "1px solid black",
                }}
            >
                <h2 className="text-center">Employee List</h2>
                <Link
                    style={{
                        alignSelf: "center",
                    }}
                    to="/add-employee"
                >
                    Add new Employee
                </Link>
            </div>

            <Employees employees={employees} />
        </div>
    );
};

export default Home;
