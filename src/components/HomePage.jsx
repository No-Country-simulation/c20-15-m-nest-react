import { Link } from "react-router-dom";
import { useAuth } from "./../hooks";
import { FiHome } from "react-icons/fi";
import { TbTransferIn } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { IoHelpCircleOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import NavBar from "./NavBar";

export const HomePage = () => {
  const { user } = useAuth();
  if (!user) {
    return <div>loading....</div>;
  }
  return (
    <div className="homePage authPage">
      <NavBar />

      <h1 className="title">HOLA, {user.name}!</h1>
      <div className="line"></div>

      {/* <i>persona icono</i> */}
      <section className="cuenta">
        <VscAccount className="logoPerson" />
        <div>
          <p className="cuentap">Cuenta Corriente</p>
          {/* <p>{user.cbu}</p> */}
        </div>
        <div>
          <p className="cuentap2">
            Disponible<br></br>${user.accounts[0].balance}
          </p>
        </div>
      </section>
      <div>
        <select className="option1">
          <option value="someOption">Movimiento</option>
          <option value="someOption"> </option>
        </select>
        <select className="option2">
          {" "}
          *<option value="otherOption">Tarjetas</option>
          <option value="otherOption"></option>
        </select>
      </div>
      <section className="footer">
        <Link className="none" to={"/transfer"}>
          <p>Inicio</p>
          <FiHome />
        </Link>
        <Link className="none" to={"/transfer"}>
          <p>Transf</p>
          <TbTransferIn />
        </Link>
        <Link className="none" to={"/transfer"}>
          <p>Pagar</p>
          <MdOutlinePayment />
        </Link>
        <Link className="none" to={"/transfer"}>
          <p>Ayuda</p>
          <IoHelpCircleOutline />
        </Link>
      </section>
    </div>
  );
};
