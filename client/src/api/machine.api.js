
export async function fetchMachine() {
    const res = await fetch("http://localhost:5000/api/machines");
    if (!res.ok) throw new Error("Erreur API machine");
    return res.json();
}
