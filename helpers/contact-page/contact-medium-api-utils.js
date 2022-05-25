export async function getAllContactMedium() {
  const response = await fetch(
    "http://localhost:8080/portfolio/contact_medium"
  );
  const data = await response.json();

  const contact_medium = [];
  for (const key in data) {
    contact_medium.push({
      ...data[key],
    });
  }
  return contact_medium;
}
