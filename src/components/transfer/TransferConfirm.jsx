import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTransfer } from "../../hooks";

export const TransferConfirm = () => {
  const { createTransaction } = useTransfer();
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
  const { contact, amount, user } = location.state;

  const onClick = async (e) => {
    e.preventDefault();
    try {
      const res = await createTransaction({
        amount,
        toAccountId: contact.id,
        fromAccountId: user?.accounts[0]?.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //   console.log(state);
  return (
    <div>
      <div>
        <h1>Monto a transferir</h1>
        <p>${amount}</p>
      </div>
      <div>
        <h1>Origen</h1>
        <p>${amount}</p>
      </div>
      <div>
        <h1>Destino</h1>
        <p>{contact.alias}</p>
      </div>
      <button onClick={onClick}>Autorizar</button>
    </div>
  );
};
