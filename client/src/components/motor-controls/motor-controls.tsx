import { IonButton, IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react";
import { MotorService } from "../../services/motor-service";
import { useEffect, useState } from "react";
import {
  MotorDirection,
  MotorMoveButton,
} from "../motor-move-button/motor-move-button";
import { arrowDownCircleOutline, arrowUpCircleOutline } from "ionicons/icons";

export interface MotorControlsProps {
  deviceId: string;
}

export const MotorControls = (props: MotorControlsProps) => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <MotorMoveButton
            deviceId={props.deviceId}
            direction={MotorDirection.Up}
          >
            <IonIcon icon={arrowUpCircleOutline}></IonIcon>
          </MotorMoveButton>
        </IonCol>
        <IonCol>
          <MotorMoveButton
            deviceId={props.deviceId}
            direction={MotorDirection.Down}
          >
            <IonIcon icon={arrowDownCircleOutline}></IonIcon>
          </MotorMoveButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
