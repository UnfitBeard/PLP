document.addEventListener("DOMContentLoaded", async () => {
  const projects = document.querySelector(".projects");

  try {
    // const response = await fetch("http://localhost:5000/projects");
    const projects = projectsObj;

    projectsDiv.innerHTML += projects
      .map((project) => {
        return `<div class="project-card">
                  <img src="${project.image}" alt="">
                  <div class="content">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <p>${project.progress}</p>
                  </div>
                </div>`;
      })
      .join("");
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
});

const projectsObj = [
  {
    "name": "Personal Portfolio",
    "description": "A responsive website showcasing my web development projects.",
    "image": "https://via.placeholder.com/300x200?text=Portfolio",
    "progress": "Completed"
  },
  {
    "name": "Ecommerce Store",
    "description": "An online store built with HTML, CSS, and JavaScript.",
    "image": "https://via.placeholder.com/300x200?text=Ecommerce",
    "progress": "In Progress"
  },
  {
    "name": "Weather App",
    "description": "A JavaScript app that fetches weather data using an API.",
    "image": "https://via.placeholder.com/300x200?text=Weather+App",
    "progress": "Completed"
  }
]
