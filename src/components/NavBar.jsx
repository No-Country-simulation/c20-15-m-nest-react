//import React from "react";
import { useState } from "react";
import axios from "axios";
//import { FaBell } from "react-icons/fa";

import { IoMdMenu } from "react-icons/io";
import { PiBankBold } from "react-icons/pi";

//


function NavBar() {

    
    const [DropDownListActive,setDropDownListActiveState] = useState(false)

    
    const authenticateLogin = async () => {

        const data = await axios.post("https://c20-15-m-nest-react.onrender.com/api/auth/login",{email:"admin@gmail.com",password:"mateo123"})
        console.log(data.Token)
    }
   
    const Dirs = [
        {direccion:'/',titulo:'Home',requireLogin:false},
        {direccion:'/login',titulo:'Login',requireLogin:false},
        {direccion:'/register',titulo:'Register',requireLogin:false},
        // {direccion:'/historial',titulo:'Historial',requireLogin:true},
        {direccion:'/transferencia',titulo:'Transferencia',requireLogin:true}
    ]

 
    const isLoggedIn = true;

    // Dropdown links visible/not

    const openCloseMenu = () => {
        setDropDownListActiveState(!DropDownListActive);
  
    }

    return(

        <header>
            
          
             
            {/* <Notification></Notification> */}
           

                <div className="bar">

               <h1><PiBankBold />eBanca</h1>
                
                <div></div>
                    <button className="menu" onClick={openCloseMenu}><IoMdMenu /></button>
                    {/* <button className="button1" onClick={authenticateLogin}>Ingresar</button> */}
                     <div className="DropdownNotifications"> 
                    {DropDownListActive && (
                         <nav>

                            {
                                Dirs.filter((dir) => (!dir.requireLogin || isLoggedIn)).map((Dir,index) => (
                                    <a key={index} href={Dir.direccion}>{Dir.titulo}</a>
                                ))
                            }


 
                     </nav>
                    )}
                        </div>


                </div>


        </header>
    )
}
export default NavBar;