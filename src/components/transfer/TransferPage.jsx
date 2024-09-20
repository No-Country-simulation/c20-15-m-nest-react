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
      <h1>¿A dónde queres transferir?</h1>

      <div className="options-container">
        <Link to={{ pathname: "/transfer/form", state: { contactType: "third-party" } }} className="option-button">
          <div className="terceros">
            <h3>A terceros</h3>
            <span className="arrow">></span>
          </div>
        </Link>

        <Link to={{ pathname: "/transfer/form", state: { contactType: "own-accounts" } }} className="option-button">
          <div className="ecuentas">
            <h3>Entre tus cuentas</h3>
            <span className="arrow">></span>
          </div>
        </Link>

        <Link to={{ pathname: "/transfer/form", state: { contactType: "new-recipient" } }} className="option-button">
          <div className="ndestinatario">
            <h3>A un nuevo destinatario</h3>
            <span className="arrow">></span>
          </div>
        </Link>
      </div>

      {/* Pie de página existente */}
      <section className="footerTP">
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
