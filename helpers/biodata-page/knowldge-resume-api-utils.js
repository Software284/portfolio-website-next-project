export async function getAllKnowldgeResume() {
  const response = await fetch(
    "http://localhost:8080/portfolio/knowldge_resume"
  );
  const data = await response.json();

  const knowldge_resume = [];
  for (const key in data) {
    knowldge_resume.push({
      ...data[key],
    });
  }
  return knowldge_resume;
}
