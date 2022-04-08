import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './App.css';


const TableShow = () => {
  const [data, setData] = useState([]);

  // using axios to get Data
  const getData = () => {
     axios.get("http://localhost:3002/show")
          .then((res)=> {
            console.log(res);
            setData(res.data);
          });
        }
useEffect(() => {
  getData();
}, [])

  return (
    <>
      <h2>Show Login</h2>
      <table>
        <thead>
          <tr>
          <th>Full name</th>
          <th>Email</th>
          <th>Role</th>
          </tr>
        </thead>
        <tbody>
          
            {
            data.map((e, key) => {
              return (
                <tr key={key}>
                  <td>{e.fullname}</td>
                  <td>{e.email}</td>
                  <td>{e.role}</td>
                </tr>
              );
            })
            }
        </tbody>
      </table>
      <Link className="btn" to='/'>Back To Login</Link>
    </>
  );
};

export default TableShow;
