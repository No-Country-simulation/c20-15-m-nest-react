import { Link } from "react-router-dom";
import { ContactList } from "./ContactList";
import { FiHome } from "react-icons/fi";
import { TbTransferIn } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { IoHelpCircleOutline } from "react-icons/io5";

export const TransferPage = () => {
  return (
    <div className="tcontact">
      <Link to={"/transfer/newcontact"}>transferir a nuevo contacto</Link>
      <ContactList />
      <h1>¿A donde queres transferir?</h1>
      <div className="terceros"> {/* Opcion: A terceros */}
        <h3>A terceros </h3>
      </div>
      <div className="ecuentas"> {/* Opcion: entre tus cuentas */}
        <h3>Entre tus cuentas</h3>
      </div>
      <div className="ndestinatario"> {/* Opcion: A un nuevo destinatario */}
        <h3>A un nuevo destinatario</h3>
      </div>
      <section className="footerTP"> {/*classname modificado para la pagina de transferencia*/}
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