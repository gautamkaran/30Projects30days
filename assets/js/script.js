const projects = document.querySelector(".projects");

(function () {
  if (!projectsData || projectsData.length === 0) {
    const message = document.createElement("div");
    message.classList.add("no-projects");
    message.innerHTML = `
      <p>No projects are available right now. Please check back soon</p>
    `;
    projects.appendChild(message);
    return;
  }

  projectsData.forEach(({ img, title, description, liveLink, githubLink }) => {
    // Create project item container
    const div = document.createElement("div");
    div.classList.add("project-item");

    // Populate project item HTML
    div.innerHTML = `
      <div class="img">
        <a href="${liveLink}" target="_blank" rel="noopener noreferrer">
          <img src="${img}" alt="${title}">
        </a>
      </div>
      <div class="project-data">
        <h2>${title}</h2>
        <p>${description}</p>
        <div class="flex">
          <a href="${liveLink}" target="_blank" rel="noopener noreferrer" class="btn live-preview">Live Preview</a>
          <a href="${githubLink}" target="_blank" rel="noopener noreferrer" class="btn github-link">GitHub Link</a>
        </div>
      </div>
    `;

    // Append the project item to the projects container
    projects.appendChild(div);
  });
})();
