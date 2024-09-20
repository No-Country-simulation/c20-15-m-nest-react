import { useEffect, useState } from "react";
import { useTransfer } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export const ContactList = () => {
  const { findTransfer } = useTransfer();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Hook para navegar
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await findTransfer();
        setData(result);
      } catch (error) {
        console.error("Error fetching transfer data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSelectContact = (contact) => {
    // Navegar a la página de transferencia con el contacto en el state
    navigate("/transfer/form", { state: { contact } });
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="agenda">
      <h2>Agenda</h2>
      {data.length > 0 ? (
        <ul>
          {data.map(({ account }) => (
            <li key={account.id} onClick={() => handleSelectContact(account)}>
              <FaUserCircle className="userLogo" />
              <div>
                <p className="alias">{account.alias}</p>
                <p>{account.cbu}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No transfers found.</p>
      )}
    </div>
  );
};
