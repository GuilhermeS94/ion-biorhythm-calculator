import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonInput,
  IonDatetime,
} from '@ionic/react';
import React, { useState } from 'react';

function App() {
  const [nome, setNome] = useState("");
  const [nascimento, setNascimento] = useState("");
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
            Nome:
          </IonLabel>
          <IonInput
            value={nome}
            onIonChange={(event) => setNome(event.detail.value)}
          />
        </IonItem>
        <p>Nome: {nome}</p>
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
        <p>Nascimento: {nascimento}</p>
      </IonContent>
    </IonApp>
  );
}

export default App;
