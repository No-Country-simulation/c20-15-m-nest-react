import useAuth from "../hooks/useAuth";
import useRegister from"../hooks/useRegister";

export const Register = () => {
  const { isAuthenticated,user,register,loading,error } = useAuth();
  // const { register,loading,error } = useRegister();

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    console.log(e.target);
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;

    await register(email, password,name);
  };

  return (
    <div>
      {isAuthenticated && user ? (
        <p>Bienvenido, {user.name}</p>
        //hacer un redirect a homepage
        
      ) : (
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
              {loading ? "Cargando..." : "Bienvenido a Ebanca! " }
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </>
      )}
    </div>
  );
};
