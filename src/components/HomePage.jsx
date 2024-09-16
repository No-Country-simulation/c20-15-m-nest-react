import { Link } from "react-router-dom";
import { useAuth } from "./../hooks";

export const HomePage = () => {
  const { user } = useAuth();
  if (!user) {
    return <div>loading....</div>;
  }
  return (
    <div>
      <h1>HOLA, {user.name}!</h1>
      <div>
        <h2>Cuenta corriente</h2>
        <hr />
        <p>{user.cbu}</p>
        <hr />
        <p>Disponible</p>
        <hr />
        <p>${user.accounts[0].balance}</p>
      </div>
      <Link to={"/transfer"}>transferencia</Link>
    </div>
  );
};
