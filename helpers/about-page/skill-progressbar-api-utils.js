export async function getAllSkillProgressbarData() {
  const response = await fetch(
    "http://localhost:8080/portfolio/skill_progressbar"
  );
  const data = await response.json();

  const skill_progressbar = [];
  for (const key in data) {
    skill_progressbar.push({
      ...data[key],
    });
  }
  return skill_progressbar;
}
