import { useAuth } from "./../hooks";
import { VscAccount } from "react-icons/vsc";
import NavBar from "./NavBar";
import { Footer } from "./Footer";

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
      <Footer />
    </div>
  );
};
