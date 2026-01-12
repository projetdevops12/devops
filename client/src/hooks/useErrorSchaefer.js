import { useContext } from "react";
import { ErrorSchaeferContext } from "../context/ErrorSchaeferContext.js";

export function useErrorSchaefer() {
    return useContext(ErrorSchaeferContext);
}
