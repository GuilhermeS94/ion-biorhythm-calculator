import React from "react";
import { 
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle
} from "@ionic/react";
import dayjs from "dayjs";

function formatarData(isoStringData){
    return dayjs(isoStringData).format("DD/MM/YYYY");
}

function BiorhythmCard({ dataAlvo }){
    return (
        <IonCard className="ion-text-center">
          <IonCardHeader>
            <IonCardTitle>{formatarData(dataAlvo)}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Físico: XX%</p>
            <p>Emocional: XX%</p>
            <p>Intelectual: XX%</p>
          </IonCardContent>
        </IonCard>
    );
}

export default BiorhythmCard;