document.addEventListener("DOMContentLoaded", function () {
  console.log("Projects filter loaded");

  const buttons = document.querySelectorAll(".filter-list li");
  const cards = document.querySelectorAll(".project-card");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");

      cards.forEach((card) => {
        if (filter === "all" || card.dataset.tags.includes(filter)) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  // --- Sidebar builder: collect project links and inject left-hand sidebar ---
  (function createProjectSidebar() {
    const mainSelector = '.projects-list, .projects, #projects';
    const projectLinkSelector = 'a[href*="/projects/"], a[href^="projects/"], a.project-link';

    const main = document.querySelector(mainSelector);
    if (!main) return;

    // Ensure the parent becomes a two-column wrapper
    const wrapper = main.parentNode;
    if (wrapper) wrapper.classList.add('projects-wrapper');

    // Find or create sidebar
    let sidebar = document.getElementById('project-sidebar');
    if (!sidebar) {
      sidebar = document.createElement('aside');
      sidebar.id = 'project-sidebar';
      sidebar.className = 'project-sidebar';
      wrapper.insertBefore(sidebar, main);
    }

    // Collect unique project links inside the main projects container
    const rawLinks = Array.from(main.querySelectorAll(projectLinkSelector));
    const links = rawLinks
      .filter(l => l.href)
      .filter((l, i, arr) => arr.findIndex(x => x.href === l.href) === i);

    if (!links.length) return;

    const ul = document.createElement('ul');
    ul.className = 'project-list';

    links.forEach(a => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = a.getAttribute('href');
      link.textContent = (a.textContent || a.getAttribute('title') || a.href.split('/').pop()).trim();
      link.className = 'project-sidebar-link';
      li.appendChild(link);
      ul.appendChild(li);
    });

    // Clear existing content and append list
    sidebar.innerHTML = '';
    sidebar.appendChild(ul);

    // Helpful body class for any global styling
    document.body.classList.add('has-projects-sidebar');
  })();
});
