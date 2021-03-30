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
import { useCustomLocalStorage } from "./utils/customhooks";

function App() {
  const [nascimento, setNascimento] = useCustomLocalStorage("nascimento", "");
  const [dataAlvo, setAlvo] = useState("");
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythm</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        { nascimento && dataAlvo &&
          <BiorhythmCard dataNascimento={nascimento} dataAlvo={dataAlvo} />
        }
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
        <IonItem>
        <IonLabel position="floating">
            Data Alvo:
          </IonLabel>
          <IonDatetime
            displayFormat="DD/MM/YYYY"
            value={dataAlvo}
            onIonChange={(event) => setAlvo(event.detail.value)}
          />
        </IonItem>
      </IonContent>
    </IonApp>
  );
}

export default App;
