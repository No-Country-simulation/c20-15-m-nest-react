import { useState } from "react";
import { useTransfer } from "../../hooks";

export const ContactForm = () => {
  const [contact, setContact] = useState(null);
  const { findAlias, saveContact } = useTransfer();
  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await findAlias(e.target.alias.value);
    setContact(res);
  };
  const saveAccont = (e) => {
    e.preventDefault();
    saveContact(contact.id);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>Agrega una cuenta</h2>
        <input type="text" name="alias" placeholder="Ingresa el CBU o alias" />
        <button type="submit">buscar</button>
      </form>
      {contact && (
        <div>
          <p>{contact.alias}</p>
          {/* <Link to="/tranfer">guardar</Link> */}
          <button onClick={saveAccont}>agregar a contacto</button>
        </div>
      )}
    </div>
  );
};