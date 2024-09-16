import { Link } from "react-router-dom";
<link rel="index" href="index.css"></link>

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
