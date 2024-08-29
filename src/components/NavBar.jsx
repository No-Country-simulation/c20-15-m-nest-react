import React from "react";

//

function NavBar() {

    //const isLoggedIn = props.isAuthenticated;
    //hasta tener login.
    const isLoggedIn = false;

    

    return(

        <header>

                <h1>Banca Digital</h1>

                <nav>

                   
                   <a href="/">Home Page</a>
                 
                   <a href="/login">Login</a>
                   
                   <a href="/register">Register</a>

                   {isLoggedIn && (<><a href="/historial">Historial de Transacciones</a><a href="/">Transferencias</a></>)}

                </nav>

        </header>
    )
}
export default NavBar;