import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../hooks";
import "../../styles/index.css";
import NavBar from "../NavBar";

export const Login = () => {
  const { login, loading, error, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await login(email, password);
  };

  useEffect(() => {
    if (user && isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, user, navigate]);

  return (
    <div className="login">
      <NavBar />
      <>
        <h2>
          <strong>Ingresa a tu banca en linea</strong>
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input name="email" type="email" required />
          </div>
          <div>
            <label>Password:</label>
            <input name="password" type="password" required />
          </div>
          <button className="button2" type="submit" disabled={loading}>
            {loading ? "Cargando..." : "Login"}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
        <h3>
          <strong>Problemas con tu clave?</strong>
        </h3>
        <div className="loginline"> </div>
        <Link className="loginregistrer" to={"/auth/register"}>
          <h4>Registrate</h4>
        </Link>
      </>
    </div>
  );
};
