import dayjs from "dayjs";

function calcularBiorhythm(dataNascimento, dataAlvo, ciclo){
    const dataNasc = dayjs(dataNascimento).startOf("day");
    const dataAl = dayjs(dataAlvo).startOf("day");
    const diferencaEmDias = dataAl.diff(dataNasc, "days");
    return Math.sin(2 * Math.PI * diferencaEmDias / ciclo);
}

export function calcularBiorhythms(dataNascimento, dataAlvo){
    return {
        fisico: calcularBiorhythm(dataNascimento, dataAlvo, 23),
        emocional: calcularBiorhythm(dataNascimento, dataAlvo, 28),
        intelectual: calcularBiorhythm(dataNascimento, dataAlvo, 33)
    };
}