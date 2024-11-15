import React, {useState} from 'react'
import axios from 'axios';
import { Modal, Form, Button } from 'react-bootstrap';

const Updaterole = (props) => {

const {show, handleClose} = props;
const handleShow = () => setShow(true);

const [roleid, setRoleId] = useState()
const [rolename, setRoleName] = useState("")


    //update any data
    async function updateData(roleid, rolename) {
        console.log(roleid, rolename)
        setRoleId(roleid);
        setRoleName(rolename);
        handleShow();
    }
    //to save the update data
    const saveUpdateData = async () => {
        const config = {
            'Content-Type': 'application/json'
        }
        const data = { roleid, rolename }
        let response = await axios.put(`http://localhost:5500/adminrole/${roleid}`, data, config)
        console.log(response)
        // getData();
    }

 
  return (
    <div>
        <Button onClick={handleShow}> Edit role</Button>
              <Modal show={show} onHide={handleClose} >
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
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => saveUpdateData()}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
    </div>
  )
}

export default Updaterole;
