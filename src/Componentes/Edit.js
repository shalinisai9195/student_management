import React,{useState,useEffect} from "react";
import {Form,Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
//import {v4 as uuid} from 'uuid';
import StudentList from "./StudentList";


function Edit(){

  const[id,setId] = useState('');
  const[name,setName] = useState('');
  const[batch,setBatch] = useState('');
  const[email,setEmail] = useState('');
  const[mobile,setMobile] = useState('');

  let navigate = useNavigate('');

  const index = StudentList.map((e)=>{
       return e.id
   }).indexOf(id);

   const handleSubmit = () => {
    
    let res = StudentList[index];

    res.id = id;
    res.name = name;
    res.batch = batch;
    res.email = email;
    res.mobile = mobile
   
    navigate('/nav-bar');

  }

  useEffect(()=>{
    setId(localStorage.getItem('Id'))
    setName(localStorage.getItem('Name'))
    setBatch(localStorage.getItem('Batch'))
    setEmail(localStorage.getItem('Email'))
    setMobile(localStorage.getItem('Mobile'))

  },[])

   return <div className="fluid container">
       <Form className="d-grid gap-2">
      <Form.Group className="mb-3" controlId="formId">
        <Form.Label>Id</Form.Label>
        <Form.Control type="text" placeholder="Enter Id" value={id} style={{width:"50%"}}  onChange={(e)=>setId(e.target.value)} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={name} style={{width:"50%"}} onChange={(e)=>setName(e.target.value)} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBatch">
        <Form.Label> Batch</Form.Label>
        <Form.Control type="text" placeholder="Enter batch" value={batch} style={{width:"50%"}} onChange={(e)=>setBatch(e.target.value)} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label> Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" value={email} style={{width:"50%"}} onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMobile">
        <Form.Label> Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter mobile" value={mobile} style={{width:"50%"}} onChange={(e)=>setMobile(e.target.value)} required/>
      </Form.Group> 

      <Button variant="primary" type="submit" style={{width:"50%"}} onClick={() => handleSubmit() }>
        Update
      </Button>
     </Form>

   </div>
    
   
}

export default Edit;