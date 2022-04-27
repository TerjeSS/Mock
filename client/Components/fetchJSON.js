export default async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Error: " + res.statusText);
  }
  return await res.json();
}
