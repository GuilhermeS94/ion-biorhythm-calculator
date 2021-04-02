import React from "react";
import { 
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle
} from "@ionic/react";
import dayjs from "dayjs";
import { calcularBiorhythms } from "../utils/biorhythmcalculos";
import BiorhythmGrafico from "./BiorhythmGrafico";
import "./BiorhythmCard.css";

function formatarData(isoStringData){
    return dayjs(isoStringData).format("DD/MM/YYYY");
}

function BiorhythmCard({ dataNascimento, dataAlvo }){
    const { fisico, emocional, intelectual } = calcularBiorhythms(dataNascimento, dataAlvo);
    return (
        <IonCard className="biorhythm-card ion-text-center">
          <IonCardHeader>
            <IonCardTitle>{formatarData(dataAlvo)}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <BiorhythmGrafico dataNascimento={dataNascimento} dataAlvo={dataAlvo} />
            <p className="fisico">Físico: {fisico.toFixed(4)}</p>
            <p className="emocional">Emocional: {emocional.toFixed(4)}</p>
            <p className="intelectual">Intelectual: {intelectual.toFixed(4)}</p>
          </IonCardContent>
        </IonCard>
    );
}

export default BiorhythmCard;