import React,{useState} from "react";
import {Form,Button} from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'
//import {v4 as uuid} from 'uuid';
import StudentList from "./StudentList";


function Students(){

  let navigate = useNavigate('');

  const[id,setId] = useState('');
  const[name,setName] = useState('');
  const[batch,setBatch] = useState('');
  const[email,setEmail] = useState('');
  const[mobile,setMobile] = useState('');

  const addStudent = (e) => {
    
   // e.preventDefault()

    // const ids = uuid();
    // console.log(ids)
    // let uniqueId = ids.slice(0,3);
    // console.log(uniqueId);

    let dd = id;
    let a = name;
    let b =batch;
    let c = email;
    let d = mobile;
   
    StudentList.push({id:dd,name:a,batch:b,email:c,mobile:d})
    navigate('/nav-bar');

  }

    return<>
      <h1>Students</h1>
      <div className="fluid container">
      <Form className="d-grid gap-2">
      <Form.Group className="mb-3" controlId="formId">
        <Form.Label>Id</Form.Label>
        <Form.Control type="text" placeholder="Enter Id" style={{width:"50%"}}  onChange={(e)=>setId(e.target.value)} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" style={{width:"50%"}} onChange={(e)=>setName(e.target.value)} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBatch">
        <Form.Label> Batch</Form.Label>
        <Form.Control type="text" placeholder="Enter batch" style={{width:"50%"}} onChange={(e)=>setBatch(e.target.value)} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label> Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" style={{width:"50%"}} onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMobile">
        <Form.Label> Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter mobile" style={{width:"50%"}} onChange={(e)=>setMobile(e.target.value)} required/>
      </Form.Group> 

      <Button variant="primary" type="submit" style={{width:"50%"}} onClick={(e) => addStudent(e) }>
        Submit
      </Button>
     </Form>
    </div>
    </>
}
export default Students;