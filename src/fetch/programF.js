export default async function programF() {
    const response = await fetch("/api/programF")
    const res = await response.json()
    return res;
}