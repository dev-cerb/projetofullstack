'use client';

export default function Button({name, type, classe, handleOnClick}){

    return(
        <button type={type} className={classe} onClick={handleOnClick}>{name}</button>
    );

}