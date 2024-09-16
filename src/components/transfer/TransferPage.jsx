import { Link } from "react-router-dom";
import { ContactList } from "./ContactList";

export const TransferPage = () => {
  return (
    <div>
      <Link to={"/transfer/newcontact"}>transferir a nuevo contacto</Link>
      <ContactList />
    </div>
  );
};
