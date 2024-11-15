import React from 'react';
import './styles/Roles.css';
import { Table, Button, Form, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md'
import axios from 'axios';

function Roles() {
    const [data, setData] = useState([])
    const [roleid, setRoleId] = useState()
    const [rolename, setRoleName] = useState("")
    const [affectedrows, setAffectRow] = useState()
    const [showupdate, setShowUpdate] = useState(false);


    const getData = async () => {
        const api = await axios.get("http://localhost:5500/adminrole")
        setData(api.data.response)
    }
    useEffect(() => {
        getData()
    }, [])



    ////add new data///

    async function postData() {
        let newData = {
            "roleid": roleid,
            "rolename": rolename
        }
        let response = await axios.post('http://localhost:5500/adminrole', newData)
        setAffectRow(response.data.affectedRows)
        console.log('newData', newData)
        getData()
    }

    ////////////////////////FOR  UPDATE DATA////////////////////////////////

    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = () => setShowUpdate(true);

    //update any data
    async function updateData(roleid, rolename) {
        console.log(roleid, rolename)
        setRoleId(roleid);
        setRoleName(rolename);
        handleShowUpdate();
    }
    //to save the update data
    const saveUpdateData = async () => {
        const config = {
            'Content-Type': 'application/json'
        }
        const data = { roleid, rolename }
        let response = await axios.put(`http://localhost:5500/adminrole/${roleid}`, data, config)
        console.log(response)
        getData();
    }

    ////delete data////
    async function deleteRoleData(roleid) {
        let response = await axios.delete(`http://localhost:5500/adminrole/${roleid}`)
        // console.log(response.data, "deleted")
        getData()
    }

    return (
        <div style={{ marginLeft: "40px", marginRight: "40px", justifyContent: "center" }}>
            <h1 style={{ textAlign: "center", margin: "5px 20px", color: "#00308F" }}>Roles</h1>
            <section className='roles'>
                <Form className='add-new'>
                    <h3 className='heading'>Add New Roles</h3><hr />
                    <Form.Label>RoleId:</Form.Label><br />
                    <Form.Control value={roleid} onChange={(e) => setRoleId(e.target.value)} /><br />
                    <Form.Label>Role name:</Form.Label><br />
                    <Form.Control value={rolename} onChange={(e) => setRoleName(e.target.value)} /><br />
                    <div className="text-center"> 
                        <Button variant="primary" onClick={() => postData()}>
                            Save
                        </Button>
                    </div>
                </Form>
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
                                            <Button variant="primary" style={{ padding: "15px 20px" }} onClick={() => updateData(item.roleid, item.rolename)} ><div style={{ fontSize: "20px" }}><FaEdit /></div></Button>
                                            <Button variant="primary" style={{ padding: "15px 20px" }} onClick={() => deleteRoleData(item.roleid)} ><div style={{ fontSize: "20px" }}><MdDelete /></div></Button>
                                        </td>

                                    </tr>
                                )
                            })}



                        </tbody>
                    </Table>
                </div>
            </section>



            <Modal show={showupdate} onHide={handleCloseUpdate}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>RoleId:</Form.Label><br />
                        <Form.Control type="text" value={roleid} onChange={(e) => setRoleId(e.target.value)} disabled='true' /><br />
                        <Form.Label>Role:</Form.Label><br />
                        <Form.Control type="text" value={rolename} onChange={(e) => setRoleName(e.target.value)} /><br />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseUpdate}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveUpdateData}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Roles;