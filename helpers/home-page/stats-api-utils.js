export async function getAllStats() {
  const response = await fetch("http://localhost:8080/portfolio/stats");
  const data = await response.json();

  const stats = [];
  for (const key in data) {
    stats.push({
      ...data[key],
    });
  }
  return stats;
}
