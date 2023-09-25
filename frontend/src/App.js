import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import NotFound from './NotFound';
import Navbar from './Navbar';
import EventHandling from './Components/EventHandling';
import  Chat  from './Components/Chat';

function App() {
  return (
    <div>
      

     <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route element={<Home  />} path="/" />
     <Route element={<Home  />} path="home" />
     <Route element={<Login  />} path="login" />
     <Route element={<EventHandling/>} path="event"/> 
     <Route element={<Chat/>} path="chat"/> 
     <Route element={<NotFound  />} path="*" />
     </Routes>


     </BrowserRouter>
    </div>
  );
}

export default App;
