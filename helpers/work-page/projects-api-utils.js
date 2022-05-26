export async function getAllProjects() {
  const response = await fetch("http://localhost:8080/portfolio/projects");
  const data = await response.json();

  const projects = [];
  for (const key in data) {
    projects.push({
      ...data[key],
    });
  }
  return projects;
}
