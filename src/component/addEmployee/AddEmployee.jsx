import React from "react";

export default function AddEmployee() {
    const onSubmit = () => {};

    return (
        <div>
            <h1 className="text-center">Add Employee</h1>
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <label>
                    First Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Date of Birth:
                    <input type="date" name="name" />
                </label>
                <label>
                    Designation:
                    <input type="text" name="name" />
                </label>
                <label>
                    Profile URL:
                    <input type="text" name="name" />
                </label>
                <label>
                    Experience:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
