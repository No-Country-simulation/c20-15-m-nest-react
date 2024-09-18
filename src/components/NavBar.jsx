//import React from "react";
import { useState } from "react";
import { useAuth } from "../hooks";
import axios from "axios";
<link rel="index" href="index.css"></link>;

//import { FaBell } from "react-icons/fa";

import { IoMdMenu } from "react-icons/io";
import { PiBankBold } from "react-icons/pi";

//

function NavBar() {
  const [DropDownListActive, setDropDownListActiveState] = useState(false);
  const { isAuthenticated } = useAuth();
  

  const authenticateLogin = async () => {
    const data = await axios.post(
      "https://c20-15-m-nest-react.onrender.com/api/auth/login",
      { email: "admin@gmail.com", password: "mateo123" }
    );
    console.log(data.Token);
  };

  const Dirs = [
    { direccion: "/", titulo: "Home", requireLogin: false },
    { direccion: "/auth/login", titulo: "Login", requireLogin: false },
    { direccion: "/auth/register", titulo: "Register", requireLogin: false },
    // {direccion:'/historial',titulo:'Historial',requireLogin:true},
    {
      direccion: "/transfer",
      titulo: "Transferencia",
      requireLogin: true,
    },
  ];



  // Dropdown links visible/not

  const openCloseMenu = () => {
    setDropDownListActiveState(!DropDownListActive);
  };

  return (
    <header>
      {/* <Notification></Notification> */}

      <div className="bar">
        <h1>
          <PiBankBold />
          eBanca
        </h1>

        <div>
          <button className="button1NavBar" hidden={isAuthenticated}>Login</button>
        </div>
        <button className="menu" onClick={openCloseMenu}>
          <IoMdMenu />
        </button>
        {/* <button className="button1" onClick={authenticateLogin}>Ingresar</button> */}
        <div className="DropdownLinks">
          {DropDownListActive && (
            <nav>
              {Dirs.filter((dir) => !dir.requireLogin || isAuthenticated).map(
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