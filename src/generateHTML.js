const generateManager = function (manager) {
    return `
    <div class="card cards" style="width: 18rem;">
        <div class="card-body">
            <div class="profile-header">
                <div class="profile-header-text">
                    <h4 class="card-title">${manager.name}</h4>
                    <h5>Manager</h5>
                </div>
            </div>
            <div class="profile-body">
                <div class="profile-body-text">
                    <ul class="list-group">
                        <li class="list-group-item id">ID: ${manager.id}</li>
                        <li class="list-group-item email">Email: <a href="malito: ${manager.email}">${manager.email}</a></li>
                        <li class="list-group-item officeNumber">Office number: ${manager.officeNumber}</li>
                    </ul>
                </div>                     
            </div>
        </div>
    </div>
    `;
}

const generateEngineer = function (engineer) {
    return `
    <div class="card cards" style="width: 18rem;">
        <div class="card-body">
            <div class="profile-header">
                <div class="profile-header-text">
                    <h4 class="card-title">${engineer.name}</h4>
                    <h5>Engineer</h5>
                </div>
            </div>
            <div class="profile-body">
                <div class="profile-body-text">
                    <ul class="list-group">
                        <li class="list-group-item id">ID: ${engineer.id}</li>
                        <li class="list-group-item email">Email: <a href="malito:${engineer.email}">${engineer.email}</a></li>
                        <li class="list-group-item github">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                    </ul>
                </div>                     
            </div>
        </div>
    </div>
    `
}

const generateIntern = function (intern) {
    return `
    <div class="card cards" style="width: 18rem;">
        <div class="card-body">
            <div class="profile-header">
                <div class="profile-header-text">
                    <h4 class="card-title">${intern.name}</h4>
                    <h5>Intern</h5>
                </div>
            </div>
            <div class="profile-body">
                <div class="profile-body-text">
                    <ul class="list-group">
                        <li class="list-group-item id">ID: ${intern.id}</li>
                        <li class="list-group-item email">Email: <a href="malito:${intern.email}">${intern.email}</a></li>
                        <li class="list-group-item school">School: ${intern.school}</li>
                    </ul> 
                </div>                     
            </div>     
        </div>
    </div>
    `
}

// Pushes generated cards to page
const generateHTML = (data) => {

    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === "Manager") {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }
    
        if (role === "Engineer") {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        if (role === "Intern") {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
    }

    const employeeCards = pageArray.join("")

    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
}

const generateTeamPage = function (employeeCards) {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <nav id="nav-bar">
                <h1 id="title">My Team Profile</h1>
            </nav>
        </header>

        <main>
            <div class="card-container">
                ${employeeCards}
            </div>
        </main>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    </body>
</html>
`
}

module.exports = generateHTML;