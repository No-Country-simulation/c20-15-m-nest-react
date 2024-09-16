import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../hooks";

export const Register = () => {
  const { register, loading, error, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;

    await register({ email, password, name });
  };

  useEffect(() => {
    if (user && isAuthenticated) {
      navigate("/");
    }
  }, [user, navigate, isAuthenticated]);

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input name="name" type="text" required />
        </div>

        <div>
          <label>Email:</label>
          <input name="email" type="email" required />
        </div>

        <div>
          <label>Password:</label>
          <input name="password" type="password" required />
        </div>

        <button type="submit" disabled={loading}>
          register
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      <Link to={"/auth/login"}>login</Link>
    </>
  );
};
