import React from 'react'
//import './styles/Category.css';
import { Table, Button, Form, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Addcategory from './Addcategory';
import Updatecategory from './Updatecategory';
const Viewcategory = () => {

    //Get data
    const [categoryData, setCategoryData] = useState([])



    //get data
    const getCategory = async () => {
        let categoryapi = await axios.get('http://localhost:5500/product')
        setCategoryData(categoryapi.data.response)
        // console.log(categoryapi.data.response)
    }

    useEffect(() => {
        getCategory()
    }, [])



    return (
        <div>
            <h1 style={{ textAlign: "center", margin: "5px 20px", color: "#00308F" }}>Category</h1>
            <div style={{ marginLeft: "20px" }}><Addcategory /></div>
            <section className='user'>


                <div className="usertable">
                    <Table striped bordered hover size="sm" className='table' style={{ alignItems: "center" }}>

                        <thead style={{ padding: "20px", backgroundColor: "#7CB9E8" }}>
                            <tr>
                                <th style={{ padding: "15px" }} >Category Id</th>
                                <th style={{ padding: "15px" }} >Category Name</th>
                                <th style={{ padding: "15px" }} >category image</th>
                                <th style={{ padding: "15px" }} >GST</th>
                                <th style={{ padding: "15px" }} >Action</th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                                categoryData && categoryData.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td style={{ padding: "15px" }}>{item.category_id}</td>
                                            <td style={{ padding: "15px" }}>{item.category_name}</td>
                                            <td style={{ padding: "15px" }}><img src={item.category_image} style={{ width: "50px", height: "50px" }} /></td>
                                            <td style={{ padding: "15px" }}>{item.gst}</td>
                                            <td style={{ padding: "15px" }}>
                                                
                                            <Updatecategory categoryId={item.category_id} categoryName={item.category_name} categoryImage={item.category_image} gst={item.gst}/>
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



            {/* <Modal show={showupdate} onHide={handleCloseUpdate}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>Category Id:</Form.Label><br />
                        <Form.Control type="text" /><br />
                        <Form.Label>Category name:</Form.Label><br />
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
            </Modal> */}
        </div>
    )
}
export default Viewcategory;