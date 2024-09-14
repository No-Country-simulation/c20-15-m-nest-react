import { useState } from "react";
import axios from "axios";
import Notification from "./Notification";
import "./../styles/NavBarStyles.css";
import { IoMdMenu } from "react-icons/io";

//

function NavBar() {
  const [DropDownListActive, setDropDownListActiveState] = useState(false);

  const authenticateLogin = async () => {
    const data = await axios.post(
      "https://c20-15-m-nest-react.onrender.com/api/auth/login",
      { email: "admin@gmail.com", password: "mateo123" }
    );
    console.log(data.Token);
  };

  const Dirs = [
    { direccion: "/", titulo: "Home", requireLogin: false },
    { direccion: "/login", titulo: "Login", requireLogin: false },
    { direccion: "/register", titulo: "Register", requireLogin: false },
    // {direccion:'/historial',titulo:'Historial',requireLogin:true},
    {
      direccion: "/transferencia",
      titulo: "Transferencia",
      requireLogin: true,
    },
  ];

  const isLoggedIn = true;

  // Dropdown links visible/not

  const openCloseMenu = () => {
    setDropDownListActiveState(!DropDownListActive);
  };

  return (
    <header>
      <h1>Banca Digital</h1>
      <Notification></Notification>

      <div className="bar">
        <button onClick={openCloseMenu}>
          <IoMdMenu />
        </button>
        <button onClick={authenticateLogin}>Authenticate Me</button>
        <div className="DropdownNotifications">
          {DropDownListActive && (
            <nav>
              {Dirs.filter((dir) => !dir.requireLogin || isLoggedIn).map(
                (Dir, index) => (
                  <a key={index} href={Dir.direccion}>
                    {Dir.titulo}
                  </a>
                )
              )}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
export default NavBar;
