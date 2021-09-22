import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import employees from "../../data/employees";
import queryString from "query-string";

export default function EditEmployee(props) {
    let { id } = queryString.parse(props.location.search);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [designation, setDesignation] = useState("");
    const [dob, setDob] = useState("");
    const [profilePhotoLink, setProfilePhotoLink] = useState("");
    const [experience, setExperience] = useState();

    useEffect(() => {
        let employee = employees.find((employee) => employee.id == id);
        setFirstName(employee.firstName);
        setLastName(employee.lastName);
        setDesignation(employee.designation);
        setDob(employee.dob);
        setProfilePhotoLink(employee.profilePhotoLink);
        setExperience(employee.experience);
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.editedData(
            id,
            firstName,
            lastName,
            designation,
            dob,
            profilePhotoLink,
            experience
        );
        // props.onEdit();
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    };
    const handleLastName = (e) => {
        setLastName(e.target.value);
    };
    const handleDesignationName = (e) => {
        setDesignation(e.target.value);
    };
    const handleDobName = (e) => {
        setDob(e.target.value);
    };
    const handleProfilePhotoLink = (e) => {
        setProfilePhotoLink(e.target.value);
    };
    const handleExperience = (e) => {
        setExperience(e.target.value);
    };

    return (
        <div>
            <h1 className="text-center">Edit Employee</h1>
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
                onSubmit={handleSubmit}
            >
                <label>
                    First Name:
                    <input
                        type="text"
                        name="name"
                        value={firstName}
                        onChange={handleFirstName}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="name"
                        value={lastName}
                        onChange={handleLastName}
                    />
                </label>
                <label>
                    Date of Birth:
                    <input
                        type="date"
                        name="name"
                        value={dob}
                        onChange={handleDobName}
                    />
                </label>
                <label>
                    Designation:
                    <input
                        type="text"
                        name="name"
                        value={designation}
                        onChange={handleDesignationName}
                    />
                </label>
                <label>
                    Profile URL:
                    <input
                        type="text"
                        name="name"
                        value={profilePhotoLink}
                        onChange={handleProfilePhotoLink}
                    />
                </label>
                <label>
                    Experience:
                    <input
                        type="text"
                        name="name"
                        value={experience}
                        onChange={handleExperience}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
