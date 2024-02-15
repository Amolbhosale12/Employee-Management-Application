import React, { useEffect, useState } from "react";
import "./Style.css";
import { useNavigate } from "react-router-dom";
import EditButton from "../Assets/Images/Edit-Icon.png";
import DeleteIcon from "../Assets/Images/Delete-Icon.png";

function ListEmployee() {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();

  // call Rest API (fetch data all here.)

  useEffect(() => {
    fetch("http://localhost:8080/employee/getAllData")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEmployee(data);
      });
  }, []);

  const deleteEmployee = (id) => {
    alert("do you want to delete record");
    console.log(id);
    fetch(`http://localhost:8080/employee/${id}`, {
      method: "DELETE",
    }).then(() => {
      fetch("http://localhost:8080/employee/getAllData")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setEmployee(data);
        });
      console.log("successfully deleted.");
    });
  };

  return (
    <div className="container d-flex mt-5 flex-column gap-4">
      <div>
        <button className="btn btn-primary" onClick={() => navigate("/add")}>
          Add Employee
        </button>
        <button className="btn btn-danger ms-2">Delete All</button>
      </div>
      <div className="text-center label-header">Employee Details</div>
      <div>
        <table className="table  table-bordered table-light">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td
                    onClick={() => {
                      navigate(`/update/${item.id}`);
                    }}
                  >
                    <img
                      src={EditButton}
                      alt="editbutton"
                      className="edit-Image"
                    />
                  </td>
                  <td>
                    <img
                      onClick={() => {
                        deleteEmployee(item.id);
                      }}
                      src={DeleteIcon}
                      alt="delete-icon"
                      className="delete-icon"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListEmployee;
