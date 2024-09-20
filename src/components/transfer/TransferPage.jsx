import { Footer } from "../Footer";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { ContactList } from "./ContactList";

export const TransferPage = () => {
  return (
    <div className="transferPage authPage">
      <nav className="navTransfer">
        <IoIosArrowBack />
        <p>Transferencias</p>
        <IoMdMenu />
      </nav>
      <div>
        <Link to={"/transfer/newcontact"}>
          Transferir a nuevo contacto
          <IoIosArrowForward />
        </Link>
        <div className="contact">
          <h1>Mis contactos</h1>
          <h2>Selecciona a quien deseas transferirle</h2>
          <input type="text" placeholder="Buscar" />
        </div>
        <ContactList />
      </div>
      <Footer />
    </div>
  );
};

// <h1>¿A dónde queres transferir?</h1>

// <div className="options-container">
//   <Link
//     to={{
//       pathname: "/transfer/form",
//       state: { contactType: "third-party" },
//     }}
//     className="option-button"
//   >
//     <div className="terceros">
//       <h3>A terceros</h3>
//       <span className="arrow"></span>
//     </div>
//   </Link>

//   <Link
//     to={{
//       pathname: "/transfer/form",
//       state: { contactType: "own-accounts" },
//     }}
//     className="option-button"
//   >
//     <div className="ecuentas">
//       <h3>Entre tus cuentas</h3>
//       <span className="arrow"></span>
//     </div>
//   </Link>

//   <Link
//     to={{
//       pathname: "/transfer/form",
//       state: { contactType: "new-recipient" },
//     }}
//     className="option-button"
//   >
//     <div className="ndestinatario">
//       <h3>A un nuevo destinatario</h3>
//       <span className="arrow"></span>
//     </div>
//   </Link>
// </div>
