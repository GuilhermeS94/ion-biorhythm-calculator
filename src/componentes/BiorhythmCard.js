import { 
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle
} from "@ionic/react";
import React from "react";

function BiorhythmCard({ dataAlvo }){
    return (
        <IonCard className="ion-text-center">
          <IonCardHeader>
            <IonCardTitle>{dataAlvo}</IonCardTitle>
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