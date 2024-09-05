import React from "react";
import NavBar from "./navBar";

function HomePage(props){
    
    const adquirirBalCuentaVigente = () => {
        
        let usuario;
        let cuentaVigente = "a";
        let bal = 0;


    }

    return(
        <div>
            <NavBar></NavBar>

            <body>

                <div>
                    <h3>"Buenos dias," + {usuario.nombre}</h3>
                    <h4>Cuenta: + {cuenta.nombre}</h4>
                    <h2>Monto Disponible + {bal}</h2>
                </div>







            </body>
        </div>
    )
    

    
    


}

export default HomePage;