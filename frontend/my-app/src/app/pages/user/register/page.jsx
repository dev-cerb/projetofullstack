'use client';

import axios from "axios";
import { url } from "@/config/database";

import Button from "@/app/components/button"
import LabelForm from "@/app/components/labelForm"

export default function Login(){

    const api = axios.create({baseURL: url})
    
    function Teste(){
        api.post(`/user/register/`)
        .then((response) => {
            console.log(response);
        })
        .catch((e) => {
            console.log(e);
        })
    }

    return (
        <div className="mainContent">
        <h1>Registro</h1>
        <LabelForm title={"Nome"} name={"nome"} placeholder={""} type={"text"} classe="formUser"/>
        <LabelForm title={"Usuario"} name={"user"} placeholder={""} type={"text"} classe="formUser"/>
        <LabelForm title={"Senha"} name={"password"} placeholder={""} type={"password"} classe="formUser"/>
        <LabelForm title={"Confirmar Senha"} name={"confirmpass"} placeholder={""} type={"password"} classe="formUser"/>
        <LabelForm title={"Email"} name={"email"} placeholder={""} type={"email"} classe="formUser"/>
        <Button type={"button"} name={"Criar conta"} classe={"buttonLogin"} handleOnClick={Teste}/>
    </div>
    )
}