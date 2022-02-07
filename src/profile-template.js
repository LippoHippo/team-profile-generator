const generateHeader = headerText => {
    return `
        <header>
             
    `
}

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

    <body>

    ${generateHeader}

    `

}

module.exports = templateData;