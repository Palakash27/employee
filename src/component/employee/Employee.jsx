import React from "react";
import { Link } from "react-router-dom";

export default function Employee({ employee }) {
    const handleEditClick = () => {};
    const handleDeleteClick = () => {};

    return (
        <div
            style={{
                border: "1px solid black",
                display: "flex",
            }}
        >
            <div style={{ flex: 2 }}>
                <img
                    src={employee.profilePhotoLink}
                    alt={`${employee.firstName}`}
                />
            </div>
            <div style={{ flex: 3 }}>
                <h3>{employee.firstName}</h3>
                <h3>{employee.lastName}</h3>
                <h3>{employee.dob}</h3>
                <h3>{employee.designation}</h3>
                <h3>{employee.experience}</h3>
            </div>
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                }}
            >
                <Link to={`/edit-employee/?id=${employee.id}`}>Edit</Link>
                <Link to="/delete-employee">Delete</Link>
            </div>
        </div>
    );
}
