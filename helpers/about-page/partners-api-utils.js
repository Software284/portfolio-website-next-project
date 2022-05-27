export async function getAllPartners() {
  const response = await fetch("http://localhost:8080/portfolio/partners");
  const data = await response.json();

  const partners = [];
  for (const key in data) {
    partners.push({
      ...data[key],
    });
  }
  return partners;
}
