'use client';

import axios from "axios";
import { redirect } from "next/navigation";
import { url } from "@/config/config";


import Button from "@/app/components/button"
import LabelForm from "@/app/components/labelForm"


export default function Login(){

    function Teste(){
        axios.post(`http://localhost:3001/pages/user/register`, {
                nome: 'TesteFinal',
                user: 'y',
                password: '200',
                confirmpass: '200',
                email: 'a@a.com',
        }).then((response) => {
            alert(response.data.message);
        }).catch((e) => {
            console.log(e);
        })
    }

    return (
        <div className="mainContent">
        <h1>Registro</h1>
        <div className="newUser">
            <LabelForm title={"Nome"} name={"nome"} placeholder={""} type={"text"} classe="formUser"/>
            <LabelForm title={"Usuario"} name={"user"} placeholder={""} type={"text"} classe="formUser"/>
            <LabelForm title={"Senha"} name={"password"} placeholder={""} type={"password"} classe="formUser"/>
            <LabelForm title={"Confirmar Senha"} name={"confirmpass"} placeholder={""} type={"password"} classe="formUser"/>
            <LabelForm title={"Email"} name={"email"} placeholder={""} type={"email"} classe="formUser"/>
            <Button type={"button"} name={"Criar conta"} classe={"buttonLogin"} handleOnClick={Teste}/>
        </div>
    </div>
    )
}