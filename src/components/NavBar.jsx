import React from "react";
import { useState } from "react";
//

function NavBar() {
    const [DropDownListActive,setDropDownListActiveState] = useState(false)
    
   
    const Dirs = [
        {direccion:'/',titulo:'Home',requireLogin:false},
        {direccion:'login',titulo:'Login',requireLogin:false},
        {direccion:'register',titulo:'Register',requireLogin:false},
        {direccion:'historial',titulo:'Historial',requireLogin:true},
        {direccion:'transferencias',titulo:'Transferencia',requireLogin:true}
    ]

    //const isLoggedIn = props.isAuthenticated;
    //reworkear con conexion db
    const isLoggedIn = true;

    // Dropdown links visible/not

    const openCloseMenu = () => {
        setDropDownListActiveState(!DropDownListActive);
        console.log("hi");
    }

    return(

        <header>

                <h1>Banca Digital</h1>
                <div>
                    <button onClick={openCloseMenu}>Menu</button>

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


        </header>
    )
}
export default NavBar;