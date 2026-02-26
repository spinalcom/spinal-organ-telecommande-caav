import { SpinalNodeRef } from "spinal-env-viewer-graph-service";

export type LightInfo = {
    updateEndpoint: SpinalNodeRef;
    pourcEndpoint: SpinalNodeRef;
};

export type PositionDataLight = {
    position: SpinalNodeRef;
    CP_light: SpinalNodeRef | undefined;
    LightINFO: LightInfo[];
};

export type PositionsDataStore={
    position: SpinalNodeRef;
    CP: SpinalNodeRef | undefined;
    CP_Rotation: SpinalNodeRef | undefined;
    storeINFO: InfoStore[];
}
export type InfoStore={
    bso: SpinalNodeRef;
    posBsoEndpoint: SpinalNodeRef;
    posLamelleEndpoint: SpinalNodeRef;
}
export type PositionTempData={
    position: SpinalNodeRef;
    CP_temp : SpinalNodeRef | undefined;
    TempEndpoint: SpinalNodeRef;
}
