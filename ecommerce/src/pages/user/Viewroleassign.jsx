import React, { useState, useEffect } from 'react'
import { FaEye } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
const Viewroleassign = (props) => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  ///get role assign to user
  const [viewData, getviewData] = useState([])

  const viewRoleASsign = async (userId) => {
    const api = await axios.get(
      `http://localhost:5500/adminroleassignview/${userId}`
    );

    getviewData(api.data.response)
    //console.log(api.data.response, "ho gya")
    //console.log(userId)
    handleShow();
  }

  ////delete data////
 async function deleteRoleAssignData(userId,roleid) {
  let response = await axios.delete(`http://localhost:5500/adminroleassign/${userId}/${roleid}`)
   //console.log(response.data, "deleted")
   handleClose()
}

  return (
    <>
      <div>
        <Button variant="primary" onClick={() => viewRoleASsign(props.userId)} style={{ padding: "8px 15px" }} ><div style={{ fontSize: "20px" }}><FaEye /> </div></Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Role assign to user</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='d-flex'>
              <div style={{ color: "red" }}>User Id : </div>
              <div style={{ color: "blue" }}>{props.userId}</div>
            </div><hr/>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Role Id : </th>
                  <th>Role Name : </th>
                  <th>Remove Role: </th>
                </tr>
              </thead>
              {
                viewData.map((item, index) => {
                  return (


                    <tbody key={index}>
                      <tr>
                        <td>{item.roleid}</td>
                        <td>{item.rolename}</td>
                        <td><Button variant='danger' onClick={() => deleteRoleAssignData(props.userId,item.roleid)} style={{ width: "10px",paddingLeft:"20px" }}><ImCross /></Button></td>
                      </tr>
                    </tbody>
                  )
                })
              }
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default Viewroleassign;

