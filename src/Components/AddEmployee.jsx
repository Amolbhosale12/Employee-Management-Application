import React, { useEffect, useState } from "react";

const AddEmployee = () => {
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");

const submitData = (e) => {
e.preventDefault();
const listEmployee = { firstName, lastName, email };
fetch("http://localhost:8080/employee/add", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(listEmployee),
}).then(() => {
    window.history.back();
    console.log("data stored");

});
};

return (
<div className="container mt-5 d-flex justify-content-center">
    <div className="col-6 d-flex flex-column gap-3 border p-5 rounded-4">
    <div>
        <label htmlFor="" className="bg-primary rounded p-2 addEmployee">
        Add Empployee
        </label>
    </div>
    <div className="form-floating">
        <input
        type="text"
        className="form-control"
        placeholder="First Name"
        onChange={(e) => setFirstName(e.target.value)}
        id="firstName"
        />
        <label htmlFor="firstName">First Name</label>
    </div>
    <div className="form-floating">
        <input
        type="text"
        className="form-control"
        placeholder="Last Name"
        onChange={(e) => setLastName(e.target.value)}
        id="lastName"
        />
        <label htmlFor="lastName">Last Name</label>
    </div>
    <div className="form-floating">
        <input
        type="email"
        className="form-control"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        />
        <label htmlFor="email">email</label>
    </div>
    <div className="d-flex  justify-content-center gap-3">
        <button
        className="btn btn-primary"
        onClick={(e) => {
            submitData(e);
        }}
        >
        Submit
        </button>
        <button
        className="btn btn-danger"
        onClick={() => {
            window.history.back();
        }}
        >
        Cancel
        </button>
    </div>
    </div>
</div>
);
};
export default AddEmployee;
