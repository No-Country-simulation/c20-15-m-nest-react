import useAuth from "../hooks/useAuth";

export const Login = () => {
  const { login, loading, error, isAuthenticated, user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await login(email, password);
  };

  return (
    <div>
      {isAuthenticated && user ? (
        <p>Bienvenido, {user.name}</p>
      ) : (
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
        </>
      )}
    </div>
  );
};
