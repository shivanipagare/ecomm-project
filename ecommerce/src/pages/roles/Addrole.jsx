import React from 'react'
import './Role.css'
import { Table, Button, Form, Modal } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

const Addrole = () => {
    const [roleid, setRoleId] = useState()
    const [rolename, setRoleName] = useState("")

    const [affectedrows, setAffectRow] = useState()

    async function postData() {
        let newData = {
            "roleid": roleid,
            "rolename": rolename

        }
        let response = await axios.post('http://localhost:5500/adminrole', newData)
        setAffectRow(response.data.affectedRows)
       
    }



  return (
    <div>

  

         <Form className='add-new'>
                    <h3 className='heading'>Add New Roles</h3><hr />
                    <Form.Label>RoleId:</Form.Label><br />
                    <Form.Control value={roleid} onChange={(e) => setRoleId(e.target.value)} /><br />
                    <Form.Label>Role name:</Form.Label><br />
                    <Form.Control value={rolename} onChange={(e) => setRoleName(e.target.value)} /><br />
                    <Button variant="primary" onClick={() => postData()}>
                        Save
                    </Button>

                </Form>
    </div>
  )
}

export default Addrole
