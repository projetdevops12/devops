import { getAllMachines } from "../repositories/machine.repository.js";

export async function fetchMachines() {
    return await getAllMachines();
}
