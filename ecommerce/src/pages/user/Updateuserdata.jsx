import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa';
import { Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';

const Updateuserdata = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //state for update
    const [userid, setUserId] = useState()
    const [username, setUserName] = useState("")
    const [userpassword, setUserPassword] = useState("")
    const [status, setStatus] = useState("")
    const [createdon, setCreatedOn] = useState("")
    //update user data
    async function updateData(userId,userName,userPassword,userStatus,userCreatedon) {
        setUserId(userId);
        setUserName(userName);
        setUserPassword(userPassword);
        setStatus(userStatus);
        setCreatedOn(userCreatedon);
        handleShow();
    }
    //to save the update data
    const saveUpdateData = async (userid) => {
        
        
        const data={
            "id" : userid,
            "name" : username,
            "password": userpassword,
            "status": status,
            "createdon": createdon
            
        }
        let response = await axios.put(`http://localhost:5500/adminlogin/${userid}`, data)
        console.log(response)
    }

    return (
        <div>
            <Button variant="primary" onClick={()=>updateData(props.userId,props.userName,props.userPassword,props.userStatus,props.userCreatedon)}><div style={{ fontSize: "20px" }}><FaEdit /> </div></Button>

            {/* modal for update */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>UserId:</Form.Label><br />
                        <Form.Control value={userid} onChange={(e) => setUserId(e.target.value)} disabled='true' /><br />
                        <Form.Label>User name:</Form.Label><br />
                        <Form.Control value={username} onChange={(e) =>setUserName(e.target.value)} /><br />
                        <Form.Label>Password</Form.Label><br />
                        <Form.Control value={userpassword} onChange={(e) => setUserPassword(e.target.value)} /><br />
                        <Form.Label>status</Form.Label><br />
                        <Form.Control value={status} onChange={(e) => setStatus(e.target.value)} /><br />
                        <Form.Label>Created On</Form.Label><br />
                        <Form.Control type="date" value={createdon} onChange={(e) => setCreatedOn(e.target.value)} /><br />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => saveUpdateData(userid)}>
                        Update changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Updateuserdata
