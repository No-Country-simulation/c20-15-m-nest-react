import { Link } from "react-router-dom";
import { ContactList } from "./ContactList";

export const TransferPage = () => {
  return (
    <div className="tcontact">
      <Link to={"/transfer/newcontact"}>transferir a nuevo contacto</Link>
      <ContactList />
      <h1>¿A donde queres transferir?</h1>
    </div>
  );
};