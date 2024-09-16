import { Link } from "react-router-dom";

export const AuthPage = () => {
  return (
    <div>
      <h1>AuthPage</h1>
      <Link to={"/auth/register"}>register</Link>
      <hr />
      <Link to={"/auth/login"}>login</Link>
    </div>
  );
};
