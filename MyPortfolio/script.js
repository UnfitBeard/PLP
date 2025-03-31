const projects = [
    {
      name: "AI Website Blocker",
      image: "./assets/images/Projects/anete-lusina-zwsHjakE_iI-unsplash.jpg",
      description: "A browser extension and DNS-based blocker to filter inappropriate websites using AI.",
      progress: "In Development"
    },
    {
      name: "E-Commerce Cart",
      image: "./assets/images/Projects/arnold-francisca-f77Bh3inUpE-unsplash.jpg",
      description: "An 'Add to Cart' feature with a modal for an online shopping platform.",
      progress: "Completed"
    },
    {
      name: "Parental Monitoring App",
      image: "./assets/images/Projects/arseny-togulev-MECKPoKJYjM-unsplash.jpg",
      description: "A mobile and web app that allows parents to track and manage their child's activity.",
      progress: "Planning"
    },
    {
      name: "Machine Learning Image Filter",
      image: "./assets/images/Projects/h-heyerlein-ndja2LJ4IcM-unsplash.jpg",
      description: "An AI model that detects and blocks inappropriate images in real-time.",
      progress: "Research Phase"
    },
    {
      name: "Personal Finance Tracker",
      image: "./assets/images/Projects/nick-chong-N__BnvQ_w18-unsplash.jpg",
      description: "A web app to track expenses and manage monthly budgets.",
      progress: "In Development"
    }
  ];

  
  const projectsDiv = document.querySelector(".projects");
  projectsDiv.innerHTML += projects.map((project)=>{
    return `<div class = "project-card"><img src="${project.image}" alt="">
            <div class = "content"><h3>${project.name}</h3>
            <p>${project.description}</p>
            <p>${project.progress}</p></div></div>`
  })