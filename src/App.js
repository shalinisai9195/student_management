import './App.css';
import Navbar from './Componentes/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Students from './Componentes/Students';
import Mentors from './Componentes/Mentors';
import { Navigate } from 'react-router-dom';
import Edit from './Componentes/Edit';


function App() {
   return <div className='fluid container'>
  <h1>Student Management</h1>
  <br/>
  <BrowserRouter>
    <Routes>
      <Route path='/nav-bar' element={<Navbar />}/>
      <Route path='/student-list' element={<Students/>}/>
      <Route path='/Mentors-list' element={<Mentors/>}/>
      <Route path='/edit' element={<Edit/>}/>
      <Route path='*' element={<Navigate to ={'/nav-bar'}/>}/>
    </Routes>
  </BrowserRouter>
  </div>
}

export default App;
