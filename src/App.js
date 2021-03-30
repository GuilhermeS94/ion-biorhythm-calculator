import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonInput,
} from '@ionic/react';
import React, { useState } from 'react';

function App() {
  const [nome, setNome] = useState("");
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythm</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel>
            Nome:
          </IonLabel>
          <IonInput
            value={nome}
            onIonChange={(event) => setNome(event.detail.value)}
          />
        </IonItem>
        <p>Nome: {nome}</p>
      </IonContent>
    </IonApp>
  );
}

export default App;
