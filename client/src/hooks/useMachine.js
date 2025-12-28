import { useContext } from "react";
import { MachineContext } from "../context/MachineContext.js";

export function useMachine() {
    return useContext(MachineContext);
}
