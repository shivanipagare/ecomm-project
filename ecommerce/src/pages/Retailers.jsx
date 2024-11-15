import React from 'react';
import './styles/Retailers.css';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Retailers() {



    ////////////FOR SHOW DATA//////////////
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    ////////////FOR UPDATE DATA//////////////
    const [showupdate, setShowUpdate] = useState(false);

    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = () => setShowUpdate(true);

    return (
        <div>
            <div className="container">
                <Tabs
                    id="controlled-tab-example"
                    defaultActiveKey="view"

                    className="mb-3"
                >
                    <Tab eventKey="view" title="View">
                        <Table striped bordered hover className='table-data'>
                            <thead style={{  backgroundColor: "#7CB9E8" }} >
                                <tr>
                                    <th>Shop Id</th>
                                    <th>Shop  Name</th>
                                    <th>Mobile</th>
                                    <th>Action</th>
                                    <th>State</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>e003</td>
                                    <td>shivani pagare</td>
                                    <td>12345623</td>
                                    <td >
                                        <Button variant="primary" onClick={handleShow} >show</Button>{"    "}
                                        <Button variant="primary" onClick={handleShowUpdate} >Update</Button>
                                    </td>
                                    <td style={{ padding: "15px" }}><Form> <Form.Check
                                        type="switch"
                                        id="custom-switch"

                                    /></Form></td>


                                </tr>
                                <tr>
                                    <td>e002</td>
                                    <td>shreya singh</td>
                                    <td>98765423</td>
                                    <td>
                                        <Button variant="primary" onClick={handleShow} >show</Button>{"    "}
                                        <Button variant="primary" onClick={handleShowUpdate} >Update</Button></td>
                                    <td style={{ padding: "15px" }}><Form> <Form.Check
                                        type="switch"
                                        id="custom-switch"

                                    /></Form></td>
                                </tr>
                                <tr>
                                    <td>e004</td>
                                    <td >Nidhi</td>
                                    <td>54682245</td>
                                    <td> <Button variant="primary" onClick={handleShow} >show</Button>{"    "}
                                        <Button variant="primary" onClick={handleShowUpdate} >Update</Button></td>
                                    <td style={{ padding: "15px" }}><Form> <Form.Check
                                        type="switch"
                                        id="custom-switch"

                                    /></Form></td>
                                </tr>
                                <tr>
                                    <td>e008</td>
                                    <td >sakshi</td>
                                    <td>98736923</td>
                                    <td> <Button variant="primary" onClick={handleShow} >show</Button>{"    "}
                                        <Button variant="primary" onClick={handleShowUpdate} >Update</Button></td>
                                    <td style={{ padding: "15px" }}><Form> <Form.Check
                                        type="switch"
                                        id="custom-switch"

                                    /></Form></td>
                                </tr>
                                <tr>
                                    <td>e004</td>
                                    <td >gourav</td>
                                    <td>85246972</td>
                                    <td> <Button variant="primary" onClick={handleShow} >show</Button>{"    "}
                                        <Button variant="primary" onClick={handleShowUpdate} >Update</Button></td>
                                    <td style={{ padding: "15px" }}><Form> <Form.Check
                                        type="switch"
                                        id="custom-switch"

                                    /></Form></td>
                                </tr>
                            </tbody>
                        </Table>

                    </Tab>
                    <Tab eventKey="add" title="Add" className='form-data'>
                        <Form>
                            <Row>
                                <Col>
                            <Form.Group className="mb-2 d-flex">
                                <Form.Label className='px-2 mt-2' style={{width:"130px"}}>Shop Id</Form.Label>
                                <Form.Control type="text"  />

                            </Form.Group>
                            </Col>
                            <Col>
                            <Form.Group className="mb-2 d-flex" >
                                <Form.Label  className= ' px-2 mt-2' style={{width:"160px"}}>Shop Name</Form.Label>
                                <Form.Control type="text" />

                            </Form.Group>
                            </Col>
                            </Row>
                            <Form.Group className="py-2 mb-2 d-flex">
                                <Form.Label className='px-2 mt-2' style={{width:"130px"}}>Contact</Form.Label>
                                <Form.Control type="text" />

                            </Form.Group>
                            <Form.Group className="py-2 mb-2 d-flex">
                                <Form.Label className='px-2 mt-2' style={{width:"130px"}} >Address</Form.Label>
                                <Form.Control type="text" />

                            </Form.Group>
                            <Form.Group className="py-2 mb-2 d-flex">
                                <Form.Label className='px-2 mt-2' style={{width:"130px"}}>State</Form.Label>
                                <Form.Control type="text" />

                            </Form.Group>
                            <Form.Group className="py-2 mb-2 d-flex">
                                <Form.Label className='px-2 mt-2' style={{width:"130px"}}>City</Form.Label>
                                <Form.Control type="text" />

                            </Form.Group>

                            
                            <Form.Group className="py-2 d-flex" >
                                <Form.Check type="checkbox" label="Agree for terms and Condition" />
                            </Form.Group>
                            <hr/>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Tab>

                </Tabs>
            </div>

            <Modal show={showupdate} onHide={handleCloseUpdate}>
                <Modal.Header closeButton>
                    <Modal.Title>Update SubCategory</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>SubCategory Id:</Form.Label><br />
                        <Form.Control type="text" /><br />
                        <Form.Label>SubCategory name:</Form.Label><br />
                        <Form.Control type="text" /><br />

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseUpdate}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseUpdate}>
                        Update changes
                    </Button>
                </Modal.Footer>
            </Modal>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>SubCategory Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>SubCategory Id:</Form.Label><br />
                        <Form.Control type="text" /><br />
                        <Form.Label>SubCategory name:</Form.Label><br />
                        <Form.Control type="text" /><br />

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default Retailers;