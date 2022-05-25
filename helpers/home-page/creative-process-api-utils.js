export async function getAllCreativeProcess() {
  const response = await fetch(
    "http://localhost:8080/portfolio/creative_process"
  );
  const data = await response.json();

  const creative_process = [];
  for (const key in data) {
    creative_process.push({
      ...data[key],
    });
  }
  return creative_process;
}
