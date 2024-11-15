import React from 'react'
import Addrole from './Addrole'
import Viewrole from './Viewrole'
import './Role.css'
import {Routes, Route } from 'react-router-dom';
import Updaterole from './Updaterole';

const Index = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "5px 20px", color: "#00308F" }}>Roles</h1>

     <section className="row">
  <div className='col-4 w-100'><Addrole /></div>
  <div className='col-8 w-100'><Viewrole /></div>
</section>

<Routes>
  
  <Route path='/' element={<Updaterole />} />
</Routes>

    </div>
  )
}

export default Index;
