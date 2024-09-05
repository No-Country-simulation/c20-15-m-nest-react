import { useState } from "react";
import axios from "axios";

function useLoginHook(props){

    //
    const data = axios.post("https://c20-15-m-nest-react.onrender.com/api/auth/login",{email:"admin@gmail.com",password:"mateo123"}, {headers: {'Content-Type': 'application/json'}})



    return data;
}