document.addEventListener("DOMContentLoaded", async () => {
  const projectsDiv = document.querySelector(".projects");

  try {
    const response = await fetch("http://localhost:5000/projects");
    const projects = await response.json();

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
