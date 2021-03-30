import { useState } from "react";

export function useCustomLocalStorage(chave, valorPadrao){
    const getValorInicial = () => localStorage.getItem(chave) ?? valorPadrao;
    const [valor, setValor] = useState(getValorInicial);
    const setarEGuardarValor = (novoValor) => {
        setValor(novoValor);
        localStorage.setItem(chave, novoValor);
    };
    return [valor, setarEGuardarValor];
}