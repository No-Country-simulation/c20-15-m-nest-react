import { Link } from "react-router-dom";
import { ContactList } from "./ContactList";

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
    </div>
  );
};