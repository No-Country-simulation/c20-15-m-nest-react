import { useNavigate } from "react-router-dom";
import { Api } from "./Api";

export const useTransfer = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const findTransfer = async () => {
    const response = await Api.get(`/tranfer-contact`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };
  const saveContact = async (accountId) => {
    const response = await Api.post(
      `/tranfer-contact`,
      { accountId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    navigate("/transfer");
    return response.data;
  };
  const findAlias = async (value) => {
    const response = await Api.get(`/account/${value}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };
  const createTransaction = async ({ amount, toAccountId, fromAccountId }) => {
    console.log({ amount: Number(amount), toAccountId, fromAccountId });
    try {
      const response = await Api.post(
        `/transaction`,
        { amount: Number(amount), toAccountId, fromAccountId, currency: "ARS" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }

    // TODO:seguir aca aun no funciona
  };

  return { findTransfer, findAlias, saveContact, createTransaction };
};
