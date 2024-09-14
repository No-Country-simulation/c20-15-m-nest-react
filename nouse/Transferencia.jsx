import { VscAccount } from "react-icons/vsc";
import { FiHome } from "react-icons/fi";
import { TbTransferIn } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { IoHelpCircleOutline } from "react-icons/io5";
import "./../styles/Transferencia.css";

function Transferencia() {
  return (
    <>
      <div>
        <h1>Hola!,{name} </h1>
        <div className="line"></div>

        {/* <i>persona icono</i> */}
        <section className="cuenta">
          <div>
            <h2>
              <VscAccount />
            </h2>
          </div>
          <div>
            <p>
              <strong>Cuenta</strong>
              <br></br>xxxx
            </p>
          </div>
          <div>
            <p>
              <strong>Disponible</strong>
              <br></br>$5676
            </p>
          </div>
        </section>
        <select className="option1">
          <option value="someOption"> Movimiento</option>
          <option value="someOption"> </option>
        </select>
        <select>
          {" "}
          *<option value="otherOption">Tarjetas</option>
          <option value="otherOption"></option>
        </select>

        {/*  */}
        {/* wireframe  */}
        {/* <div> */}
        {/* <h1>Origen y destino</h1> */}
        {/* <input type="text" placeholder="Banco Santander"  /> */}
        {/* <h2>Monto y transferencia </h2> */}
        {/* <input type="text" placeholder="$500"  /> */}
        {/* <input type="text" placeholder="Comentario Opcional"  /> */}
        {/* <select> */}
        {/*  */}
        {/* </select> */}
        {/* <button>Continuar</button> */}
        {/* </div>  */}

        {/* FOOTER FIXED */}
        <section className="footer">
          <FiHome />
          <button>
            <a href="">Inicio</a>{" "}
          </button>
          <TbTransferIn />{" "}
          <button>
            <a href="">Transferir</a>
          </button>
          <MdOutlinePayment />
          <button>
            <a href="#">Pagar</a>{" "}
          </button>
          <IoHelpCircleOutline />
          <button>
            <a href="#">Ayuda</a>
          </button>
        </section>
      </div>
    </>
  );
}

export default Transferencia;
