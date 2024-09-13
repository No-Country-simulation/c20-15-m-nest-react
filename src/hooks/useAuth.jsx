import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Nuevo estado para almacenar el usuario

  const Api = axios.create({
    baseURL: `${import.meta.env.VITE_PUBLIC_DATABASE_URL}/`,
  });

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      // Realiza la petición HTTP para autenticar el usuario
      const response = await Api.post(`/api/auth/login`, {
        email,
        password,
      });

      // Supongamos que la respuesta contiene un token JWT
      const token = response.data.token;
      // Almacenar el token en localStorage o cookies
      localStorage.setItem("token", token);

      // Actualizar el estado de autenticación
      setIsAuthenticated(true);
    } catch (err) {
      // Manejar el error
      setError(err.response?.data?.message || "Error en la autenticación");
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const getUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found");

      // Enviar el token en el encabezado Authorization
      const response = await Api.get(`/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Guardar los datos del usuario en el estado
      setUser(response.data);
      setIsAuthenticated(true);
    } catch (err) {
      setError(err.response?.data?.message || "Error al obtener el usuario");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };
  const register = async(name,email,password) => {
    setLoading(true);
    setError(null);

    
    try{
        const response = await Api.post(('/api/auth/register',{
            name,
            email,
            password
        }))
        console.log(response);
        
    }catch(err){
        setError(err.response?.data?.message || "Error en el Registro.");
        // setRegistered(false);
        console.log(err);
    }
    finally{
        setLoading(false);
    }



    
    
};
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUser(); // Verifica el token y obtiene el usuario si es válido
    }
  }, []);
  return { login, getUser, loading, error, isAuthenticated, user,register };
};

export default useAuth;
