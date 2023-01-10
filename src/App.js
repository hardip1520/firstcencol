import './App.css';
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import {Route, Routes} from 'react-router-dom'
import Signup from './Components/Signup'


function App() {
  return (
    <>
   <Navbar/>
  
   <Routes>
    <Route path ='/signup' element ={<Signup/>}/>
    <Route path ='/login' element ={<Login/>}/>  
   </Routes>
   </>
  );
}

export default App;
