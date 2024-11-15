import React from 'react';
// import './styles/Roles.css';
import { Table, Button, Form, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md'
import axios from 'axios';
import Updaterole from './Updaterole';

function Roles() {

    /////get data///

    const [data, setData] = useState([])

    const getData = async () => {
        const api = await axios.get("http://localhost:5500/adminrole")
        setData(api.data.response)
    }
    useEffect(() => {
        getData()
    }, [])

///update role modal open//
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  ////delete data////
  async function deleteRoleData(roleid) {
    let response = await axios.delete(`http://localhost:5500/adminrole/${roleid}`)
     console.log(response.data, "deleted")
    getData()
    }



    return (
        <div style={{ marginLeft: "40px", marginRight: "40px", justifyContent: "center" }}>
            {/* <h1 style={{ textAlign: "center", margin: "5px 20px", color: "#00308F" }}>Roles</h1> */}
            <section className='roles'>


              
                <div className='rolestable'  >
                    <Table striped bordered hover className='table' style={{ alignItems: "center", width: "80%" }}>

                        <thead style={{ backgroundColor: "#7CB9E8" }}>
                            <tr style={{ width: "500px" }}>
                                <th style={{ padding: "15px" }} >Role Id</th>
                                <th style={{ padding: "15px" }} >Role Name</th>

                                <th style={{ padding: "15px" }} >Action</th>


                            </tr>
                        </thead>

                        <tbody>

                            {data && data.map((item, index) => {
                                return (
                                    <tr key={index} style={{ width: "500px" }}>
                                        <td style={{ padding: "15px" }}>{item.roleid}</td>
                                        <td style={{ padding: "15px" }}>{item.rolename}</td>

                                        <td style={{ padding: "10px" }}>
                                        
                                            {/* <Button variant="primary" onClick={()=>handleShow()}  style={{ padding: "15px 20px" }} ><div style={{ fontSize: "20px" }}> 
                                            <FaEdit /></div></Button> */}
                                            <Updaterole/>
                                            
                                            <Button variant="primary" style={{ padding: "15px 20px" }} onClick={() => deleteRoleData(item.roleid)} ><div style={{ fontSize: "20px" }} ><MdDelete /></div></Button>
                                        </td>

                                    </tr>
                                )
                            })}



                        </tbody>
                    </Table>
                </div>
            </section>

            <Updaterole show={show} handleClose={handleClose} handleShow={handleShow} />
        </div>
    )
}

export default Roles;