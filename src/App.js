import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime
} from '@ionic/react';
import React, { useState } from 'react';
import BiorhythmCard from "./componentes/BiorhythmCard";

function App() {
  const [nascimento, setNascimento] = useState("");
  const dataAlvo = new Date().toISOString();
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythm</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
        <IonLabel position="floating">
            Nascimento:
          </IonLabel>
          <IonDatetime
            displayFormat="DD/MM/YYYY"
            value={nascimento}
            onIonChange={(event) => setNascimento(event.detail.value)}
          />
        </IonItem>
        <BiorhythmCard dataAlvo={dataAlvo} />
      </IonContent>
    </IonApp>
  );
}

export default App;
