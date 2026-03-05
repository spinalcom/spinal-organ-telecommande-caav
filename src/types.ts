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

export type RoomDataLight = {
    room: SpinalNodeRef;
    CP_light: SpinalNodeRef | undefined;
    LightINFO: LightInfo[];
};
export type RoomDataBlind = {
    room: SpinalNodeRef;
    CP: SpinalNodeRef | undefined;
    CP_Rotation: SpinalNodeRef | undefined;
    storeINFO: InfoStore[];
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
export type RoomTempData={
    room: SpinalNodeRef;
    CP_temp : SpinalNodeRef | undefined;
    TempEndpoint: SpinalNodeRef;
}

export type RoomData = {
    room: SpinalNodeRef;
    CP: SpinalNodeRef | undefined;
    endpointList: SpinalNodeRef[];
};