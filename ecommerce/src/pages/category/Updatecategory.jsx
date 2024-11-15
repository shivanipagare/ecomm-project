import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import axios from 'axios';
const Updatecategory = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //////for update category////////////

  const [categoryid, setCategoryId] = useState("")
  const [categoryname, setCategoryName] = useState("")
  const [categoryimage, setCategoryImage] = useState("")
  const [gst, setGst] = useState("")

  const handleImage = (e) => {
    setCategoryImage(e.target.files[0])
  }

  const updateData = async (categoryId, categoryName, categoryImage, gst) => {
    setCategoryId(categoryId)
    setCategoryName(categoryName)
    setCategoryImage(categoryImage)
    setGst(gst)
    handleShow()
  }

  const saveUpdateCategory = async () => {
    //e.preventDefault();
    const formData = new FormData()
    formData.append("category_id", categoryid)
    formData.append("category_name", categoryname)
    formData.append("category_image", categoryimage)
    formData.append("gst", gst)
    const headers = {
      "Content-Type": "multipart/form-data"
    }
    // console.log(categoryid)
    // console.log(categoryname)
    // console.log(categoryimage)
    // console.log(gst)
    // console.log(formData)
    const apiData = await axios.put(`http://localhost:5500/productupdate/${categoryid}`, formData, headers)
    console.log('api data', apiData)
    handleClose()
  }

  return (
    <div>
      <Button variant="primary" onClick={() => updateData(props.categoryId, props.categoryName, props.categoryImage, props.gst)} >Update</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Category Id:</Form.Label><br />
            <Form.Control type="text" value={categoryid} onChange={(e) => setCategoryId(e.target.value)} disabled /><br />
            <Form.Label>Category name:</Form.Label><br />
            <Form.Control type="text" value={categoryname} onChange={(e) => setCategoryName(e.target.value)} /><br />
            <Form.Label>Category image:</Form.Label><br />
            <Form.Control type="file" onChange={handleImage} />{"   "}
            <img src={props.categoryImage} style={{ height: "50px", width: "50px" }} alt='' />
            <br />
            <hr />
            <Form.Label>GST</Form.Label><br />
            <Form.Control type="text" value={gst} onChange={(e) => setGst(e.target.value)} /><br />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveUpdateCategory}>
            Update changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Updatecategory;
