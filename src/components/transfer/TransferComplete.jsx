import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoIosArrowBack, IoMdMenu } from "react-icons/io";

export const TransferComplete = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!location.state || !location.state.contact) {
      navigate("/transfer"); // Redirigir al usuario si no hay contacto
    }
  }, [location, navigate]);
  if (!location.state) {
    return <div>Loading...</div>; // Mostrar un mensaje mientras redirige o carga
  }
  const { contact, amount, user, res } = location.state;

  return (
    <div className="transferComplete authTransfer">
      <nav className="navTransfer">
        <IoIosArrowBack />
        <Link to={"/transfer"}>Transferencias</Link>
        <IoMdMenu />
      </nav>
      <div className="nose">
        <FaRegCircleCheck />
        <p> La transferencia se ha realizado con éxito</p>
      </div>
      <div className="nose2">
        <p>Monto transferido</p>
        <p className="price">${amount}.000</p>
        <p>A la cuenta corriente</p>
        <p className="number">Nº de cuenta {contact.cbu.slice(-10)}</p>
      </div>
      <div className="destino">
        <div>
          <p>Nombre</p>
          <p>{contact.alias}</p>
        </div>
        <div>
          <p>Rut</p>
          <p>16.888.999-1</p>
        </div>
        <div>
          <p>Operacion</p>
          <p>Transferencia a terceros</p>
        </div>
        <div>
          <p>Banco destinatario</p>
          <p>BBVA</p>
        </div>
      </div>
      <Link to={"/transfer"}>
        <button>Hacer otra transferencia</button>
      </Link>
    </div>
  );
};
