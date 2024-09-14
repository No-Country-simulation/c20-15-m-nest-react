import React from "react";
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Inicio de Sesion</h1>
                <div className="input-box">
                    <input type="text" placeholder="Correo Electronico" required />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Contraseña" required />
                    <FaLock className="icon" />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Recuerdame</label>
                    <a href="#">Olvido su contraseña</a>
                </div>

                <button className="ingresando"  type="submit">Ingresar</button>

                <div className="register-link">
                    <p>¿No tiene cuenta? <a href="#">Registrarse</a></p>
                </div>
            </form>
        </div>
    )
};

export default LoginForm;