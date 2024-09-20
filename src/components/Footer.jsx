import { FiHome } from "react-icons/fi";
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { TbTransferIn } from "react-icons/tb";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <section className="footerTP">
      <Link className="none" to={"/"}>
        <p>Inicio</p>
        <FiHome />
      </Link>
      <Link className="none" to={"/transfer"}>
        <p>Transf</p>
        <TbTransferIn />
      </Link>
      <Link className="none" to={"/transfer"}>
        <p>Pagar</p>
        <MdOutlinePayment />
      </Link>
      <Link className="none" to={"/transfer"}>
        <p>Ayuda</p>
        <IoHelpCircleOutline />
      </Link>
    </section>
  );
};
