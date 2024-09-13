import { useState,useEffect } from "react"

import axios from "axios"

function useRegister(){
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [registered,setRegistered] = useState(false);

    const Api = axios.create({
        baseURL: `${import.meta.env.VITE_PUBLIC_DATABASE_URL}/`,
      });


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
            setRegistered(false);
            console.log(err);
        }
        finally{
            setLoading(false);
        }



        
        
    };

    return {loading,error,register};

}
export default useRegister;