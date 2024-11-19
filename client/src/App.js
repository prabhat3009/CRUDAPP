import './App.css';
import axios from 'axios';

//Components
import NavBar from './components/NavBar.jsx';
import CurdApp from './components/CurdApp.jsx';
import AllUsers from './components/AllUsers.jsx';
import AddUser from './components/AddUser.jsx';
import EditUser from './components/EditUser.jsx';


import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

axios.default.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://crudapp-api-nine.vercel.app/?vercelToolbarCode=SjKY5TOImvtGea2')
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<CurdApp />} />
        <Route path='/all' element={<AllUsers />} />
        <Route path='/add' element={<AddUser/>} />
        <Route path='/edit/:id' element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;  
