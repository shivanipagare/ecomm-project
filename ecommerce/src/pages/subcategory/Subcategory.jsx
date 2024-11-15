import React from 'react'
import './Subcategory.css';
import { Table, Button, Form, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateSC from './UpdateSC';
function Subcategory() {
 
    //Get data
    const [subcategoryData, setSubcategoryData] = useState([])



    const getSubcategoryData = async () => {
        let subcategoryapi = await axios.get('http://localhost:5500/subcategory')
        setSubcategoryData(subcategoryapi.data.response)
        //console.log(subcategoryapi.data.response)

    }

    useEffect(() => {
        getSubcategoryData()
    }, [])

    // add new subcategory//
    const [category_id, setCategoryId] = useState('')
    const [subcategory_id, setsubCategoryId] = useState('')
    const [subcategory_name, setsubCategoryName] = useState('')
    const [subcategory_image, setsubCategoryImage] = useState('')


    const handleImage = (e) => {
        setsubCategoryImage(e.target.files[0])
    }

    const postData = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('category_id', category_id);
        formData.append('subcategory_id', subcategory_id);
        formData.append('subcategory_name', subcategory_name);
        formData.append('subcategory_image', subcategory_image);


        const configs = {
            "content-Type": "multiple/form-data"
        }
        const apiData = await axios.post("http://localhost:5500/subcategory", formData, configs)
        //console.log(apiData, 'apidata')
        // setCategoryId('')
        setsubCategoryId('')
        setsubCategoryName('')
        setsubCategoryImage('')
        getSubcategoryData()
    }

    const[subcategorydata, setData]=useState([])
    const getData = async ()=>{
        const api = await axios.get('http://localhost:5500/product')
        setData(api.data.response)
        console.log(api, 'apidata')
      }
      useEffect(()=>{
        getData()
      }, [])
    return (
        <div>

            <div style={{ marginLeft: "40px", marginRight: "40px", justifyContent: "center" }}>
                <h1 style={{ textAlign: "center", margin: "5px 20px", color: "#00308F" }}>SubCategory</h1>
                <section className='subcategory'>


                    <Form className='add-new'>
                        <h3 className='heading'>Add New subcategory</h3>
                        {/* <Form.Label for="category" >Category:</Form.Label>
                        <select id="category" name="category" style={{width:"100%"}}>
                            <option value="Electronics">Electronics</option>
                            <option value="cloth">Cloth</option>
                            <option value="grocery">Grocery</option>
                            <option value="kitchen">Kitchen</option>
                            <option value="kids">Kids</option>
                        </select>
                        <br /> */}

                        <hr />
                        <Form.Label > CategoryId:</Form.Label><br />
                        <select className='custom-select' onChange={(e) => setCategoryId(e.target.value)} > Select categoryid
                            {
                                subcategorydata && subcategorydata.map((item, index) => {
                                    return (

                                        <option placeholder='Select categoryid' value={item.category_id}  >
                                            {`${item.category_id}`}
                                        </option>

                                    )
                                })
                            }
                        </select>
                        {/* <Form.Control type="text" value={category_id} onChange={(e) => setCategoryId(e.target.value)}/><br /> */}
                        <Form.Label>SubCategoryId:</Form.Label><br />
                        <Form.Control type="text" value={subcategory_id} onChange={(e) => setsubCategoryId(e.target.value)} /><br />
                        <Form.Label>SubCategory name:</Form.Label><br />
                        <Form.Control type="text" value={subcategory_name} onChange={(e) => setsubCategoryName(e.target.value)} /><br />
                        <Form.Label >SubCategoryImage:</Form.Label><br />
                        <Form.Control type="file" onChange={handleImage} /><br />
                        <Button variant="primary" type="submit" onClick={postData}>
                            Save
                        </Button>

                    </Form>

                    <div className='sub-table mt-5'  >
                        <Table striped bordered hover className='table' style={{ alignItems: "center" }}>

                            <thead style={{ backgroundColor: "#7CB9E8" }}>
                                <tr style={{ width: "500px" }}>
                                    <th style={{ padding: "15px" }} > CategoryId</th>
                                    <th style={{ padding: "15px" }} >Sub Category Id</th>
                                    <th style={{ padding: "15px" }} >Sub-Category Name</th>
                                    <th style={{ padding: "15px" }} >Sub-category Image</th>
                                    <th style={{ padding: "15px" }} >Action</th>


                                </tr>
                            </thead>
                            <tbody>

                                {
                                    subcategoryData && subcategoryData.map((item, index) => {
                                        return (
                                            <tr key={index} style={{ width: "500px" }}>
                                                <td style={{ padding: "15px" }}>{item.category_id}</td>
                                                <td style={{ padding: "15px" }}>{item.subcategory_id}</td>
                                                <td style={{ padding: "15px" }}>{item.subcategory_name}</td>
                                                <td style={{ padding: "15px" }}><img src={item.subcategory_image} style={{ width: "100px", height: "100px" }} /></td>
                                                <td style={{ padding: "15px" }}>
                                                <UpdateSC categoryId={item.category_id} subcategoryId={item.subcategory_id} subcategoryName={item.subcategory_name} subcategoryImage={item.subcategory_image}/></td>

                                            </tr>
                                        )
                                    }
                                    )

                                }
                            </tbody>
                        </Table>
                    </div>
                </section>



                
            </div>
        </div>
    )
}
export default Subcategory;