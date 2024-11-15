import React,{useState} from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';

const Addcategory = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [category_id, setCategoryId] = useState('')
    const [category_name, setCategoryName] = useState('')
    const [category_image, setCategoryImage] = useState('')
    const [gst, setGst] = useState('')

    const handleImage = (e) => {
        setCategoryImage(e.target.files[0])
    }

    const submitData = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('category_id', category_id);
        formData.append('category_name', category_name);
        formData.append('category_image', category_image);
        formData.append('gst', gst);

        const configs = {
            "content-Type": "multiple/form-data"
        }
        const apiData = await axios.post("http://localhost:5500/product", formData, configs)
       // console.log(apiData, 'apidata')
        setCategoryId('')
        setCategoryName('')
        setCategoryImage('')
        setGst('')
        handleClose()
    }

  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
       Add category
      </Button>
      <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Add New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>Category Id:</Form.Label><br />
                        <Form.Control type="text" value={category_id} onChange={(e) => setCategoryId(e.target.value)} /><br />
                        <Form.Label>Category name:</Form.Label><br />
                        <Form.Control type="text" value={category_name} onChange={(e) => setCategoryName(e.target.value)} /><br />
                        <Form.Label>Category image:</Form.Label><br />
                        <Form.Control type="file" onChange={handleImage} /><br />
                        <Form.Label>GST:</Form.Label><br />
                        <Form.Control type="text" value={gst} onChange={(e) => setGst(e.target.value)} /><br />
                    </Form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={submitData}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

    </div>
  )
}

export default Addcategory
