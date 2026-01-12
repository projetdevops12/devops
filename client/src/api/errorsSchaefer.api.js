export async function fetchErrorsSchaefer() {
    const res = await fetch("http://localhost:5000/api/errors-schaefer");
    return res.json();
}
