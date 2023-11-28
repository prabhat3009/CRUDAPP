import './App.css';

//Components
import NavBar from './components/NavBar.jsx';
import CurdApp from './components/CurdApp.jsx';
import AllUsers from './components/AllUsers.jsx';
import AddUser from './components/AddUser.jsx';
import EditUser from './components/EditUser.jsx';


import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
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
