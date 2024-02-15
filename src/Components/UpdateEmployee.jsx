import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateEmployee = () => {
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const params = useParams();
  const [Employee, setEmployee] = useState("");

  const UpdateData = (e) => {
    e.preventDefault();
    // data stored in javascript object.
    const employee = { firstName, lastName, email };
    console.log(employee);
    console.log("parameters =>" + params.id);

    fetch(`http://localhost:8080/employee/${params.id}`, {
      method: "PUT",
      headers: { "content-type": "Application/json" },
      body: JSON.stringify(employee),
    }).then(() => {
      window.history.back();
      console.log("employee data is updated");
    });
  };

  useEffect(() => {
    fetch(`http://localhost:8080/employee/${params.id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setId(data.id);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmail(data.email);
      });
  }, []);

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="col-6 d-flex flex-column gap-3 border p-5 rounded-4">
        <div>
          <label htmlFor="" className="bg-info rounded p-2 addEmployee">
            Update/Edit Employee
          </label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            value={firstName}
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
            value={lastName}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />
          <label htmlFor="email">email</label>
        </div>
        <div className="d-flex  justify-content-center gap-3">
          <button
            className="btn btn-danger"
            onClick={() => {
              window.history.back();
            }}
          >
            Back
          </button>

          <button
            className="btn btn-primary"
            onClick={(e) => {
              UpdateData(e);
            }}
          >
            Upate
          </button>
        </div>
      </div>
    </div>
  );
};
export default UpdateEmployee;
