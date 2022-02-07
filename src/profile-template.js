const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern   = require('../lib/Intern'  );
const Manager  = require('../lib/Manager' );

const generateHeader = headerText => {
    return `
        <header class="has-background-warning has-text-white has-text-centered">
            <h1>My Team</h1>
        </header>         
    `
};

function templateData(data) {
    console.log(templateData);

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <link rel="stylesheet" href="assets/css/style.css">
        <title>Concert Scout</title>
    </head>

    <body class="columns flex-wrap">

    ${generateHeader}

    </body>
    </html>
    `

}

module.exports = templateData;