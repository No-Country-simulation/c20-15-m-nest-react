import useAuth from "../hooks/useAuth";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const { user } = useAuth();
  if (!user) {
    return <div>
      <NavBar></NavBar>
      <img className="imagen" src="./src/styles/young-couple-looking-cell-phone.jpg" alt="designed by Freepik"/>
      <div className="homeback">
         <ul className="homeli">
         <li>Envía dinero al instante</li>
         <li>Consulta tu saldo ahora</li>
         <li>Detalle de tus últimos movimientos</li>
         </ul>
         </div>
      <div className="homediv">
      <p className="homep">Te gustaria ser cliente de <br></br> eBanca?</p>
      <Link className="loginregistrer1"to={"/register"}><h4>Abre tu cuenta</h4></Link>
      </div>
  </div>
 
  }
  return <div>{user.name}
 

 </div>;


};



