import React, { useEffect, useState } from "react";
import Employee from "../employee/Employee";

export default function Employees(props) {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        setEmployees(props.employees);
    }, [props.employees]);
    const editedData = (
        id,
        firstName,
        lastName,
        designation,
        dob,
        profilePhotoLink,
        experience
    ) => {
        let newEmployee = {
            id,
            firstName,
            lastName,
            designation,
            dob,
            profilePhotoLink,
            experience,
        };
        setEmployees((employees) => {
            let employee = employees.find((employee) => employee.id == id);
            employee = { ...newEmployee };
            return employees;
        });
    };
    return (
        <div>
            {employees &&
                employees.map((employee) => {
                    return <Employee key={employee.id} employee={employee} />;
                })}
        </div>
    );
}
