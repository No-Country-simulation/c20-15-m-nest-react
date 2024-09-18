import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import { useEffect } from "react";

export const TransferForm = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.state || !location.state.contact) {
      console.log("Contact is null, redirecting...");
      navigate("/transfer"); // Redirigir al usuario si no hay contacto
    }
  }, [location, navigate]);

  // Verificación segura para extraer el contacto
  const contact = location.state?.contact;

  const onsubmit = (e) => {
    e.preventDefault();
    const amount = e.target.amount.value;
    navigate("/transfer/form/confirm", { state: { contact, amount, user } });
  };

  // Manejo de casos de carga o ausencia de contacto
  if (loading || !contact) {
    return <div>Loading...</div>; // Mostrar un mensaje mientras redirige o carga
  }

  return (
    <div>
      <div>
        <h1>Contacto seleccionado</h1>
        <h2>{contact.alias}</h2>
        <p>CBU: {contact.cbu}</p>
      </div>
      <form onSubmit={onsubmit}>
        <h1>Monto disponible</h1>
        <p>{user?.accounts[0]?.balance ?? "No disponible"}</p>{" "}
        {/* Manejo de cuentas indefinidas */}
        <h1>Monto a transferir</h1>
        <input type="number" name="amount" required />
        <button type="submit">Continuar</button>
      </form>
    </div>
  );
};