import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Table,Button} from 'react-bootstrap';
import StudentList from './StudentList';


function Navbar() {
 
  let navigate = useNavigate('');

  const handleEdit = (id,name,batch,email,mobile) =>{
    localStorage.setItem('id',id);
    localStorage.setItem('name',name);
    localStorage.setItem('batch',batch);
    localStorage.setItem('email',email);
    localStorage.setItem('mobile',mobile);
}

  const handleDelete = (id)=>{
   
    const index = StudentList.map((e)=>{
      return e.id
  }).indexOf(id);
    StudentList.splice(index,1);

      navigate('/nav-bar');
  }
  

  return <div className='fluid container'>
    <Dropdown as={NavItem}>
      <Dropdown.Toggle as={NavLink} style={{fontSize:"2rem"}}>Add new <i class="fa-solid fa-user"></i></Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item></Dropdown.Item>
        <Dropdown.Item onClick={()=>{navigate('/student-list')}}>Students</Dropdown.Item>
        {/* <Dropdown.Item onClick={()=>{navigate('/Mentors-list')}} >Mentors</Dropdown.Item> */}
      </Dropdown.Menu>
      </Dropdown>
      <br/>
      <br/>
      <br/>
      <Table striped bordered hover>
      <thead>
        <tr style={{fontSize:"2rem",textAlign:"center"}}>
          <th>#</th>
          <th>Id</th>
          <th>Name</th>
          <th>Batch</th>
          <th>E-mail</th>
          <th>Mobile</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody >
        { 
        StudentList && StudentList.length > 0
        ?
        StudentList.map((item,i)=>{
            return <tr key={i} >
                <td>{i+1}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.batch}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>
                <Link to={'/edit'}>
                 <Button variant="primary" onClick={()=> handleEdit(item.id,item.name,item.batch,item.email,item.mobile)}><i className="fas fa-user-pen"></i> Edit </Button>
                 </Link>
                 &nbsp;&nbsp;
                 <Button variant="danger" onClick={()=>handleDelete(item.id)}><i className="fas fa-user-minus"></i> Delete </Button>
               </td>
            </tr>
           })
          :
          "NO records"
        }
      </tbody>
      </Table>
    </div>   
  }

export default Navbar;