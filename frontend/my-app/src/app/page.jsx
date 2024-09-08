'use client';

import Link from "next/link";

import LabelForm from "./components/labelForm";
import Button from "./components/button";

export default function Home() {
   
  function clique(){
    console.log('oi');
  }
  
  return (
    <div className="mainContent">
      <h1>Bem-vindo!</h1>
      <LabelForm title={"Usuario"} name={"user"} placeholder={""} type={"text"} classe="formUser"/>
      <LabelForm title={"Senha"} name={"password"} placeholder={""} type={"password"} classe="formUser"/>
      <Button type={"button"} name={"Acessar"} classe={"buttonLogin"} handleOnClick={clique}/>

      <Link href="/pages/user/register">Registre aqui!</Link>
    </div>
  );
}
