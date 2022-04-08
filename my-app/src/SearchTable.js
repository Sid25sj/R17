import React, { useEffect, useState } from 'react';
import axios from "axios";
import  { MDBDataTable, Row, Col, Card, CardBody }  from 'mdbreact';
import { Link } from "react-router-dom";

const SearchTable = () => {
    const [data, setData] = useState([]);

  // using axios to get Data
  const getData = () => {
     axios.get("http://localhost:3002/show")
          .then((res)=> {
            console.log(res);
            setData(res.data);
            console.log(" new d "+JSON.stringify(data));
          });
        }
useEffect(() => {
  getData();
  
}, [])

   const newData = {
       columns: [
        {
            label: 'ID',
            field: 'id',
  
          },
        {
          label: 'Full Name',
          field: 'fullname',

        }, {
            label: 'Email',
            field: 'email',
  
          },
          {
            label: 'Role',
            field: 'role',
  
          },
    ],
    rows: data
      //  JSON.stringify(data)
    
   }


    return (
//<Row className="mb-8">
<>
        <Col md="12">

          <Card>

            <CardBody>

              <MDBDataTable

                striped

                bordered

                hover

                data={newData}

              />

            </CardBody>

          </Card>

        </Col>

 
     <Link className="btn" to='/'>Back To Login</Link>
    </>     
    )
}

export default SearchTable
