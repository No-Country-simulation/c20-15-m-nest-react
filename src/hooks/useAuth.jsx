import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "./Api";

export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Nuevo estado para almacenar el usuario

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      // Realiza la petición HTTP para autenticar el usuario
      const response = await Api.post(`/auth/login`, {
        email,
        password,
      });

      // Supongamos que la respuesta contiene un token JWT
      const token = response.data.token;
      // Almacenar el token en localStorage o cookies
      localStorage.setItem("token", token);
      await getUser(); // Intentar obtener los datos del usuario
      navigate("/"); // Redirigir a la página principal
    } catch (err) {
      // Manejar el error
      setError(err.response?.data?.message || "Error en la autenticación");
      setIsAuthenticated(false); // Asegurar que la autenticación esté en falso si hay error
    } finally {
      setLoading(false);
    }
  };

  const getUser = async () => {
    setLoading(true); // Comienza el estado de carga
    setError(null);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }

      // Enviar el token en el encabezado Authorization
      const response = await Api.get(`/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Guardar los datos del usuario en el estado
      setUser(response.data);
      setIsAuthenticated(true); // Si obtiene los datos del usuario, está autenticado
    } catch (err) {
      // Manejar errores si el token es inválido o hay problemas de red
      setError(err.response?.data?.message || "Error al obtener el usuario");
      setUser(null);
      setIsAuthenticated(false); // Si no se puede obtener el usuario, no está autenticado
    } finally {
      // Asegurarse de que el loading solo se detenga cuando todo el proceso termine
      setLoading(false);
    }
  };

  const register = async ({ name, email, password }) => {
    setLoading(true);
    setError(null);
    try {
      const response = await Api.post("/auth/register", {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        navigate("/login");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Error en el Registro.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUser(); // Verifica el token y obtiene el usuario si es válido
    } else {
      setIsAuthenticated(false); // Si no hay token, no está autenticado
      setLoading(false); // Detener el loading si no hay token
    }
  }, []);

  return { login, getUser, loading, error, isAuthenticated, user, register };
};
