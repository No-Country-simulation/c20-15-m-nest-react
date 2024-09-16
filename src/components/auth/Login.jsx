import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../hooks";

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
    <div>
      <>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input name="email" type="email" required />
          </div>
          <div>
            <label>Password:</label>
            <input name="password" type="password" required />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Cargando..." : "Login"}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
        <Link to={"/auth/register"}>register</Link>
      </>
    </div>
  );
};
