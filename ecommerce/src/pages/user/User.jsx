import React from 'react'
import './User.css';
import { Table, Button, Form, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { FaEdit, FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md'
import axios from 'axios';
import Roleassign from './Roleassign'
import Viewroleassign from './Viewroleassign';
import Updateuserdata from './Updateuserdata';
function User() {


    ////////////////////////FOR ADD NEW DATA////////////////////////////////


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    ////////////////////////FOR  UPDATE DATA////////////////////////////////
    const [showupdate, setShowUpdate] = useState(false);

    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = () => setShowUpdate(true);


    //Get data of user

    const [userData, setUserData] = useState([])

    const getUserData = async () => {
        let userapi = await axios.get('http://localhost:5500/adminlogin')
        setUserData(userapi.data.response)

        //console.log(userapi.data.response)
    }
    useEffect(() => {
        getUserData()
    }, [])



    //Post data{add new}/////
    const [userid, setUserId] = useState()
    const [username, setUserName] = useState("")
    const [userpassword, setUserPassword] = useState("")
    const [userstatus, setUserStatus] = useState()
    const [usercreatedon, setUserCreateon] = useState()

    const [affectedrows, setAffectRow] = useState()

    async function postData() {
        let newData = {
            "id": userid,
            "name": username,
            // "password":userpassword,
            "status": userstatus,
            "createdon": usercreatedon
        }
        let response = await axios.post('http://localhost:5500/adminlogin', newData)
        setAffectRow(response.data.affectedRows)
        getUserData()
        handleClose()
    }

    async function deleteData(userId) {
        console.log(userId)
     let response =  await axios.delete(`http://localhost:5500/adminlogin/${userId}`)
         //console.log(response.data, "deleted")
         getUserData()
      }

    return (
        <div>
            <h1 style={{ textAlign: "center", margin: "5px 20px" }}>User Data</h1>
            <section className='user'>

                <Button variant="primary" className='add-button' style={{ width: "200px", marginLeft: "50px" }} onClick={handleShow}>+Add New</Button>

                <div className="usertable">
                    <Table striped bordered hover className='table' >

                        <thead style={{ padding: "20px ", backgroundColor: "#7CB9E8" }}>
                            <tr>

                                <th style={{ padding: "15px" }} >id</th>
                                <th style={{ padding: "15px" }} >name</th>
                                {/* <th style={{ padding: "15px" }} >password</th> */}
                                <th style={{ padding: "15px" }} >status</th>
                                <th style={{ padding: "15px" }} >View</th>
                                <th style={{ padding: "15px" }} >createdon</th>
                                <th style={{ padding: "15px" }} >Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td >{item.id}</td>
                                            <td >{item.name}</td>
                                            {/* <td >{item.password}</td> */}
                                            <td >{item.status}</td>
                                            <td className='d-flex ' style={{padding:"29px"}}>
                                                <div >
                                                    <Roleassign userId={item.id} userName={item.name} /></div>


                                                <div><Viewroleassign userId={item.id} /></div>
                                            </td>

                                            <td >{item.createdon}</td>
                                            <td className='d-flex' style={{padding:"24px"}}>
                                                <div>
                                                    <Updateuserdata userId={item.id} userName={item.name} userPassword={item.password} userStatus={item.status} userCreatedon={item.createdon} /></div>
                                                <Button variant="primary" onClick={() => deleteData(item.id)}  ><div style={{ fontSize: "20px" }}><MdDelete /></div></Button>
                                            </td>
                                        </tr>
                                    )
                                }
                                )
                            }

                        </tbody>
                    </Table>
                </div>
            </section>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New User Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>UserId:</Form.Label><br />
                        <Form.Control value={userid} onChange={(e) => setUserId(e.target.value)} /><br />
                        <Form.Label>User name:</Form.Label><br />
                        <Form.Control value={username} onChange={(e) => setUserName(e.target.value)} /><br />
                        <Form.Label>Password:</Form.Label><br />
                        <Form.Control value={userpassword} onChange={(e) => setUserPassword(e.target.value)} /><br />
                        <Form.Label>Status:</Form.Label><br />
                        <Form.Control value={userstatus} onChange={(e) => setUserStatus(e.target.value)} /><br />
                        <Form.Label>CreatedOn:</Form.Label><br />
                        <Form.Control type='date' value={usercreatedon} onChange={(e) => setUserCreateon(e.target.value)} /><br />
                    </Form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => postData()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
export default User;