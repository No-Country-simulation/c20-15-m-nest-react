import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
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
    <div className="transferForm authPage">
      <nav className="navTransfer">
        <IoIosArrowBack />
        <Link to={"/transfer"}>Transferencias</Link>
        <IoMdMenu />
      </nav>
      <div className="accont">
        <h1>Contacto seleccionado</h1>
        <div>
          <FaUserCircle className="userLogo" />
          <div className="user">
            <h2>{contact.alias}</h2>
            <p>{contact.cbu}</p>
          </div>
        </div>
      </div>
      <form onSubmit={onsubmit}>
        <h1>Monto disponible</h1>
        <p className="price">
          ${user?.accounts[0]?.balance ?? "No disponible"}.00
        </p>{" "}
        <h1>Ingresa el monto que quieres transferir</h1>
        <input
          type="number"
          name="amount"
          placeholder="Monto a transferir "
          required
        />
        <button type="submit">Continuar</button>
      </form>
    </div>
  );
};
