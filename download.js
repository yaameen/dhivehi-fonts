const fonts = [
    // .... paste font links here
    // example link: https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2
]

const http = require('https'); 
const fs = require('fs');

fonts.forEach(i => {
    let fileName = i.split("/").pop();
    fileName = fileName.split("?")[0];
    const file = fs.createWriteStream('fonts/' + fileName);
    const request = http.get(i, function (response) {
        response.pipe(file);
        file.on("finish", () => {
            file.close();
            console.log("Download Completed");
        });
    });
})