// React Libraries-------------------------
import React from "react";
import { Route, Routes } from "react-router-dom";

//Component--------------------------------
import MainApp from "./components/MainApp/";
import Landing from "./pages/LandingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PrivateRoute from './PrivateRoute';
import LogOut from "./components/LogOut";
import About from "./pages/About";
import NotFound from "./pages/NotFound";




const App = () => {
  return ( 
    <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route element={<PrivateRoute/>}>
        <Route path="/app" element={<MainApp/>}></Route>
        </Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/log-out' element={<LogOut/>}></Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
    
   );
}
 
export default App;