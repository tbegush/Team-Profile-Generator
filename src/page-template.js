// create the about section
const generateTeam = (team) => {
  const teamCard = [];

  team.forEach((member) => {
    teamCard.push(`
        <section class="my-3" id="about">
          <h2 class="text-dark bg-primary p-2 display-inline-block">Human Title: </h2>
          <p>${member.getName()}</p>
          <p>${member.getRole()}</p>
          <p>${member.getId()}</p>
          <p>${member.getEmail()}</p>
          ${generateField(member)}
        </section>
      `);
  });
  return teamCard.join(" ");
};

function generateField(member) {
  if (member.getRole() === "Manager") {
    return `<p>${member.getofficeNumber()}</p>`;
  } else if (member.getRole() === "Engineer") {
    return `<p>${member.getGithub()}</p>`;
  }
  return `<p>${member.getSchool()}</p>`;
}

// create the projects section
const generateProjects = (projectsArr) => {
  return `
      <section class="my-3" id="portfolio">
        <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
        <div class="flex-row justify-space-between">
        ${projectsArr
          .filter(({ feature }) => feature)
          .map(({ name, description, languages, link }) => {
            return `
            <div class="col-12 mb-2 bg-dark text-light p-3">
              <h3 class="portfolio-item-title text-light">${name}</h3>
              <h5 class="portfolio-languages">
                Built With:
                ${languages.map((language) => language).join(",")}
              </h5>
              <p>${description}</p>
              <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
            </div>
          `;
          })
          .join("")}
        ${projectsArr
          .filter(({ feature }) => !feature)
          .map(({ name, description, languages, link }) => {
            console.log(languages);
            return `
            <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
              <h3 class="portfolio-item-title text-light">${name}</h3>
              <h5 class="portfolio-languages">
                Built With:
                ${languages.join(", ")}
              </h5>
              <p>${description}</p>
              <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
            </div>
          `;
          })
          .join("")}
      
        </div>
      </section>
    `;
};

// export function to generate entire page
module.exports = (team) => {
  // destructure page data by section
  // const { projects, about, ...header } = templateData;

  return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Generator!</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3"> Header??? </h1>
          <nav class="flex-row">
            <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/tbegush">GitHub</a>
          </nav>
        </div>
      </header>
      <main class="container my-5">
        ${generateTeam(team)}
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy;2021 by Thomas Begush </h3>
      </footer>
    </body>
    </html>
    `;
};
