import React from "react";
import { 
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle
} from "@ionic/react";
import dayjs from "dayjs";
import { calcularBiorhythms } from "../utils/biorhythmcalculos";

function formatarData(isoStringData){
    return dayjs(isoStringData).format("DD/MM/YYYY");
}

function BiorhythmCard({ dataNascimento, dataAlvo }){
    const { fisico, emocional, intelectual } = calcularBiorhythms(dataNascimento, dataAlvo);
    return (
        <IonCard className="ion-text-center">
          <IonCardHeader>
            <IonCardTitle>{formatarData(dataAlvo)}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Físico: {fisico.toFixed(4)}</p>
            <p>Emocional: {emocional.toFixed(4)}</p>
            <p>Intelectual: {intelectual.toFixed(4)}</p>
          </IonCardContent>
        </IonCard>
    );
}

export default BiorhythmCard;