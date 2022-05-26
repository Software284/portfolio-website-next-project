export async function getAllTestimonials() {
  const response = await fetch("http://localhost:8080/portfolio/testimonial");
  const data = await response.json();

  const testimonials = [];
  for (const key in data) {
    testimonials.push({
      ...data[key],
    });
  }
  return testimonials;
}
