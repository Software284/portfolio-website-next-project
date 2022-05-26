export async function getAllAwards() {
  const response = await fetch("http://localhost:8080/portfolio/awards");
  const data = await response.json();

  const awards = [];
  for (const key in data) {
    awards.push({
      ...data[key],
    });
  }
  return awards;
}
