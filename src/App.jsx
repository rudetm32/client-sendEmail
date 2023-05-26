import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from "./componets/home/Home";

import Notify from './componets/notify/Notify';
import NavBar from './componets/navBar/NavBar';

import axios from "axios"
axios.defaults.baseURL= "https://server-send.onrender.com"

function App() {

  return (
    <>
   <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/notify' element={<Notify/>}></Route>
      </Routes>
    </>
  )
}

export default App
