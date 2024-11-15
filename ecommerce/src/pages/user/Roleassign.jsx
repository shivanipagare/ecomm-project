import React, {useEffect, useState} from 'react'
import {Button,  Modal, Form, Dropdown, DropdownButton} from 'react-bootstrap';
import axios from 'axios';
//import Viewroleassign from '/Viewroleassign';

function RoleAssigned(props) {
     /////////// STATES FOR GET ROLES ///////////
 
     const[roledata, setData]=useState([])

     //// STATES FOR POST ROLE ASSIGN DATA /////
     const [assignRoleId, setAssignRoleId] = useState('')

     ///////////////////////////////////////////////////
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /////////////////////////////   FUNCTION FOR GET ROLES     ///////////////////////////

  const getData = async ()=>{
    const api = await axios.get('http://localhost:5500/adminrole')
    setData(api.data.response)
    console.log(api, 'apidata')
  }
  useEffect(()=>{
    getData()
  }, [])
//console.log(roledata, 'roledata')


/////////// FUNCTION FOR POST ROLE ASSIGN ////////////

const postAssignRole = async()=>{
  let data = {
    "id": props.userId,
    "roleid": assignRoleId
  }

  const api = await axios.post(`http://localhost:5500/adminroleassign`, data)
  handleClose()
  //console.log(data, 'assign role to user')
}

  return (
    <>
      <Button  onClick={handleShow}>
        Role Assign
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Assign Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            

        <Form>
      <Form.Group className="mb-3">
        <Form.Label>User ID</Form.Label>
        <Form.Control value={props.userId} type="text"/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>User Name</Form.Label>
        <Form.Control value={props.userName} type="text" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Select Role</Form.Label>

<select className='custom-select' onChange={(e) =>setAssignRoleId(e.target.value)}> Select Role
{
  roledata && roledata.map((item, index)=>{
     return(
    
          <option placeholder='Select Role for user' value={item.roleid}  >
          {`${item.roleid}, ${item.rolename}`}
          </option>
       
     )
  })
}
</select>        
</Form.Group>
    </Form>
        
        
        </Modal.Body>
        <Modal.Footer>
         <Button variant="primary" onClick={()=>postAssignRole()}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
     
    </>
  );

}

export default RoleAssigned
