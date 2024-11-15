import React from 'react'
import { useState,useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import {FaEye,FaEdit} from 'react-icons/fa';
import {ImCross} from 'react-icons/im'
function Offer(){
    
    ////////////FOR SHOW DATA//////////////
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    ////////////FOR UPDATE DATA//////////////
    const [showupdate, setShowUpdate] = useState(false);

    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = () => setShowUpdate(true);


      //get data//
      const [offerData, setOfferData] = useState([])

      const getOffer = async()=>{
        let offerapi =await axios.get('http://localhost:5500/offer')
        setOfferData(offerapi.data.response)
        console.log(offerapi.data.response)
    }
    
    useEffect(()=>{
        getOffer()
    },[])


    //Post data{add new}/////
const [offercode, setOffercode] = useState()
const [offername, setOfferName] = useState()
const [validfrom, setValidity] = useState()
const [validto, setValidto] = useState()
const [discount, setDiscount] = useState()
const [flatdiscount, setDiscountFlat] = useState()


const [affectedrows, setAffectRow] = useState()

async function postData(){
    let newData = {
        "offercode":offercode,
        "offername":offername,
        "valid_from":validfrom,
        "valid_to":validto,
        "discount":discount,
        "flat_discount":flatdiscount

    }
    let response = await axios.post('http://localhost:5500/offer',newData)
    setAffectRow(response.data.affectedRows)
    console.log(response.data.affectedRows)
}



    return(
        <div>
            <div className="container p-2">
                <Tabs
                    id="controlled-tab-example"
                    defaultActiveKey="view"

                    className="mb-3"
                >
                    <Tab eventKey="view" title="View">
                        <Table striped bordered hover className='table-data' style={{marginLeft:"40px"}}>
                            <thead style={{  backgroundColor: "#7CB9E8" }} >
                                <tr>
                                    <th>OfferCode</th>
                                    <th>Offer Name</th>
                                    <th>valid_from</th>
                                    <th>valid_to</th>
                                    <th>discount</th>
                                    <th>flatdiscount</th>
                                    <th>Action</th>
                                    <th>status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    offerData.map((item,index)=>{
                                        return(
                                <tr key={index}>
                                    <td className='py-5'>{item.offercode}</td>
                                    <td className='py-5'>{item.offername}</td>
                                    <td className='py-5'>{item.valid_from}</td>
                                    <td className='py-5'>{item.valid_to}</td>
                                    <td className='py-5'>{item.discount}</td>
                                    <td className='py-5'>{item.flat_discount}</td>
                                    <td >
                                        <Button style={{padding:"5px 20px"}} variant="primary" onClick={handleShow} ><div style={{fontSize:"20px",padding:"0"}}><FaEye/></div></Button>{"  "}
                                        <Button style={{padding:"5px 20px"}} variant="primary" onClick={handleShowUpdate} ><div style={{fontSize:"20px",padding:"0"}}><FaEdit/></div></Button>
                                        <Button style={{padding:"5px 20px"}} variant="primary" ><div style={{fontSize:"20px",padding:"0"}}><ImCross/></div></Button>
                                    </td>
                                    {/* <td style={{ padding: "15px" }}><Form> <Form.Check
                                        type="switch"
                                        id="custom-switch"

                                    /></Form></td> */}
                                    <td>{item.status}</td>


                                </tr>
                                        )
                                    }
                                    )
                                }
                                
                            </tbody>
                        </Table>

                    </Tab>
                    <Tab eventKey="add" title="Add" className='form-data'>
                    <h3 className='heading'>Add New Offers</h3>
                    <hr/>
                        <Form>
                            <Row>
                                <Col>
                            <Form.Group className="mb-2 d-flex">
                                <Form.Label className='px-2 mt-2' style={{width:"130px"}} value={offercode} onChange={(e)=>setOffercode(e.target.value)}>Offer code</Form.Label>
                                <Form.Control type="text"  />

                            </Form.Group>
                            </Col>
                            <Col>
                            <Form.Group className="mb-2 d-flex" >
                                <Form.Label  className= ' px-2 mt-2' style={{width:"160px"}} value={offername} onChange={(e)=>setOfferName(e.target.value)}>Offer name</Form.Label>
                                <Form.Control type="text" />

                            </Form.Group>
                            </Col>
                            </Row>
                            <Form.Group className="py-2 mb-2 d-flex">
                                <Form.Label className='px-2 mt-2' style={{width:"130px"}} value={validfrom} onChange={(e)=>setValidity(e.target.value)}>valid_from</Form.Label>
                                <Form.Control type="text" />

                            </Form.Group>
                            <Form.Group className="py-2 mb-2 d-flex">
                                <Form.Label className='px-2 mt-2' style={{width:"130px"}} value={validto} onChange={(e)=>setValidto(e.target.value)} >valid_to</Form.Label>
                                <Form.Control type="text" />

                            </Form.Group>
                            <Form.Group className="py-2 mb-2 d-flex">
                                <Form.Label className='px-2 mt-2' style={{width:"130px"}} value={discount} onChange={(e)=>setDiscount(e.target.value)}>discount</Form.Label>
                                <Form.Control type="text" />

                            </Form.Group>
                            <Form.Group className="py-2 mb-2 d-flex">
                                <Form.Label className='px-2 mt-2' style={{width:"130px"}} value={flatdiscount} onChange={(e)=>setDiscountFlat(e.target.value)}>flat_discount</Form.Label>
                                <Form.Control type="text" />

                            </Form.Group>

                            
                            {/* <Form.Group className="py-2 d-flex" >
                                <Form.Check type="checkbox" label="Agree for terms and Condition" />
                            </Form.Group> */}
                            <hr/>
                            <Button variant="primary" type="submit" onClick={()=>postData()} aria-required>
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
export default  Offer;