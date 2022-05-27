export async function getAllBlogs() {
  const response = await fetch("http://localhost:8080/portfolio/blog_content");
  const data = await response.json();

  const blogs = [];
  for (const key in data) {
    blogs.push({
      ...data[key],
    });
  }
  return blogs;
}


export async function getBlogsById(id) {
  const blogs = await getAllBlogs();
  const data = blogs.find((blog) => blog.id.toString() === id);
  return data;
}


