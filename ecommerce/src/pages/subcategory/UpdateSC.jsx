import React,{useState} from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import axios from 'axios';

const UpdateSC = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [categoryid, setCategoryId] = useState("")
  const [subcategoryid, setsubCategoryId] = useState("")
  const [subcategoryname, setsubCategoryName] = useState("")
  const [subcategoryimage, setsubCategoryImage] = useState("")
  

  const handleImage = (e) => {
    setsubCategoryImage(e.target.files[0])
  }

  const updateData = async (categoryId,subcategoryId, subcategoryName, subcategoryImage) => {
   
    setCategoryId(categoryId)
    setsubCategoryId(subcategoryId)
    setsubCategoryName(subcategoryName)
    setsubCategoryImage(subcategoryImage)
    handleShow()
  }

  const saveUpdateData = async () => {
    //e.preventDefault();
    const formData = new FormData()
    formData.append("category_id", categoryid)
    formData.append("subcategory_id", subcategoryid)
    formData.append("subcategory_name", subcategoryname)
    formData.append("subcategory_image", subcategoryimage)
    
    const headers = {
      "Content-Type": "multipart/form-data"
    }
    // console.log(categoryid)
    // console.log(subcategoryid)
    // console.log(subcategoryname)
    // console.log(subcategoryimage)
   
    console.log(formData)
    
    const apiData = await axios.put(`http://localhost:5500/subcategoryupdate/${categoryid}/${subcategoryid}`, formData, headers)
    console.log('api data', apiData)
    handleClose()
  }


  return (
    <div>
      <Button variant="primary" onClick={() => updateData(props.categoryId, props.subcategoryId, props.subcategoryName, props.subcategoryImage)} >Update</Button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update subCategory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Label>Category Id:</Form.Label><br />
            <Form.Control type="text" value={categoryid} onChange={(e) => setCategoryId(e.target.value)} disabled /><br />
            <Form.Label>subCategory Id:</Form.Label><br />
            <Form.Control type="text" value={subcategoryid} onChange={(e) => setsubCategoryId(e.target.value)} disabled /><br />
            <Form.Label>subCategory name:</Form.Label><br />
            <Form.Control type="text" value={subcategoryname} onChange={(e) => setsubCategoryName(e.target.value)} /><br />
            <Form.Label>subCategory image:</Form.Label><br />
            <Form.Control type="file" onChange={handleImage} />{"   "}
            <img src={props.subcategoryImage} style={{ height: "50px", width: "50px" }} alt='' />
            <br />
            <hr />
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveUpdateData} >
            Update changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default UpdateSC
