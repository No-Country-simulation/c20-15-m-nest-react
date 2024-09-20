import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTransfer } from "../../hooks";
import { IoIosArrowBack, IoMdMenu } from "react-icons/io";

export const TransferConfirm = () => {
  const { createTransaction } = useTransfer();
  const location = useLocation();
  const navigate = useNavigate();
  const dialogRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [pin, setPin] = useState("");

  const openDialog = () => {
    dialogRef.current.showModal();
    setIsOpen(true);
  };

  const closeDialog = () => {
    dialogRef.current.close();
    setIsOpen(false);
    setPin(""); // Reinicia el PIN al cerrar el diálogo
  };

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
      console.log(res);
      closeDialog();
      navigate("/transfer/complete", { state: { contact, amount, user, res } });
    } catch (error) {
      console.log(error);
    }
  };

  const handlePinChange = (e) => {
    const value = e.target.value;
    if (value.length <= 6) {
      setPin(value);
    }
  };

  return (
    <div className="confirmPage authPage">
      <nav className="navTransfer">
        <IoIosArrowBack />
        <Link to={"/transfer"}>Transferencias</Link>
        <IoMdMenu />
      </nav>
      <div className="top">
        <p>Monto a transferir</p>
        <p>${amount}</p>
      </div>
      <div className="nose">
        <div className="origin">
          <h1>Origen</h1>
          <p>Cuenta corriente 0 000 94 83947 4</p>
        </div>
        <div className="destino">
          <h1>Datos de destino</h1>
          <div>
            <p>Nombre</p>
            <p>{contact.alias}</p>
          </div>
          <div>
            <p>Rut</p>
            <p>16.888.999-1</p>
          </div>
          <div>
            <p>Tipo de cuenta</p>
            <p>Cuenta Corriente</p>
          </div>
          <div>
            <p>N de cuenta</p>
            <p>{contact.cbu}</p>
          </div>
        </div>
      </div>
      <div className="selec">
        <h1>Selecciona como autorizar:</h1>
        <div onClick={openDialog}>
          <p>Autorizar con SuperClave</p>
        </div>
      </div>
      {isOpen && <div className="dialog-backdrop"></div>}

      <dialog ref={dialogRef} className="custom-dialog">
        <button className="close-dialog-btn" onClick={closeDialog}>
          &times;
        </button>
        <h1>CLAVE DE AUTENTIFICACIÓN</h1>
        <p>Utiliza tu clave personal para autorizar esta transferencia</p>

        <form onSubmit={onClick}>
          <input
            type="text"
            value={pin}
            onChange={handlePinChange}
            name="value"
            maxLength={6}
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              textShadow: "0 0 0 #fff",
              color: "transparent", // Ocultar el texto
              letterSpacing: "0.5em",
              fontSize: "24px",
            }}
          />
        </form>

        <div style={{ marginTop: "10px", fontSize: "24px" }}>
          {Array(6)
            .fill("_")
            .map((_, index) => (
              <span key={index} style={{ padding: "0 5px" }}>
                {index < pin.length ? pin[index] : "_"}
              </span>
            ))}
        </div>
      </dialog>
    </div>
  );
};
