import { Link } from "react-router-dom";
import { useAuth } from "./../hooks";
import { FiHome } from "react-icons/fi";
import { TbTransferIn } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { IoHelpCircleOutline } from "react-icons/io5";
import {  VscAccount } from "react-icons/vsc";
import NavBar from "./NavBar";


export const HomePage = () => {
  const { user } = useAuth();
  if (!user) {
    return <div>loading....</div>;
  }
  return (
    <div>
     <NavBar></NavBar>

     <h1 className="title">HOLA, {user.name}!</h1>
        <div className="line"></div>
       
        {/* <i>persona icono</i> */}
        <section className="cuenta">
        <div><h2><VscAccount /></h2></div>
        <div><p className="cuentap">Cuenta Corriente<br></br>{user.cbu}</p></div> 
        <div><p className="cuentap2">Disponible<br></br>${user.accounts[0].balance}</p></div>
        </section>
         <select  className="option1">
        <option value="someOption">Movimiento</option> 
        <option value="someOption"> </option>
  
         </select> 
         <select  className="option2"> *
         <option value="otherOption">Tarjetas</option>  
         <option value="otherOption"></option> 
       
          </select> 
      <section className="footer">
     <FiHome /><Link className="none" to={"/transfer"}><p>Inicio</p></Link>
     <TbTransferIn/><Link className="none" to={"/transfer"}><p>Transf</p></Link>
     <MdOutlinePayment/><Link className="none"to={"/transfer"}><p>Pagar</p></Link>
     <IoHelpCircleOutline /><Link className="none" to={"/transfer"}><p>Ayuda</p></Link>
     </section>
    </div>
  );
};
