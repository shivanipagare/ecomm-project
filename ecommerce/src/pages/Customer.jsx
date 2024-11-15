import React from 'react'
//import { Table, Button, Form, Modal } from 'react-bootstrap';
import { MDBDataTable } from 'mdbreact';
//import { useState } from 'react';
//import { Button } from 'react-bootstrap';
const Customer = () => {




    const data = {
      columns: [
        {
          label: 'Customer Id',
          field: 'id',
         
          width: 150
        },
        {
          label: 'customer Name',
          field: 'cname',
         
          width: 270
        },
        {
          label: 'Mobile',
          field: 'mobile',
        
          width: 200
        },
        {
          label: 'City',
          field: 'city',
          
          width: 100
        },
        {
          label: 'Action',
          field: 'action',
         
          width: 150
        },
        {
          label: 'Status',
          field: 'status',
        
          width: 100
        }
      ],
      rows: [
        {
          id: "e01",
         cname: 'shivani pagare',
          mobile: 123456,
          city:"Bhopal",
          action:"",
          status: '$320'
        },
        {
            id: "e02",
            cname: 'sakshi pagare',
             mobile: 123456,
             city:"Bhopal",
             action:"",
             status: '$320'
        },
        {
            id: "e03",
            cname: 'gourav pagare',
             mobile: 123456,
             city:"Bhopal",
             action:"",
             status: '$320'
        },
        {
            id: "e04",
            cname: 'shreya singh',
             mobile: 123456,
             city:"Bhopal",
             action:"",
             status: '$320'
        },
        {
            id: "e05",
            cname: 'vansh',
             mobile: 123456,
             city:"Bhopal",
             action:"",
             status: '$320'
        },
        {
            id: "e01",
            cname: 'harshit',
             mobile: 123456,
             city:"Bhopal",
             action:"",
             status: '$320'
        },
        {
            id: "e05",
            cname: 'abhi ',
             mobile: 123456,
             city:"Bhopal",
             action:"",
             status: '$320'
        },
        {
            id: "e06",
            cname: 'shivani pagare',
             mobile: 123456,
             city:"Bhopal",
             action:"",
             status: '$320'
        },
        {
            id: "e01",
            cname: 'shivani pagare',
             mobile: 123456,
             city:"Bhopal",
             action:"",
             status: '$320'
        },
        {
            id: "e01",
            cname: 'shivani pagare',
             mobile: 123456,
             city:"Bhopal",
             action:"",
             status: '$320'
        },
        {
            id: "e01",
            cname: 'shivani pagare',
             mobile: 123456,
             city:"Bhopal",
             action:"",
             status: '$320'
        },
        {
            id: "e01",
            cname: 'shivani pagare',
             mobile: 123456,
             city:"Bhopal",
             action:"",
             status: '$320'
        },
        {
            id: "e01",
            cname: 'shivani pagare',
             mobile: 123456,
             city:"Bhopal",
             action:"",
             status: '$320'
        }
      ]
    }
    return (
<div className=' container h-auto'>

<MDBDataTable
striped
bordered
small
data={data}
/>

</div>

    )
}
export default Customer;