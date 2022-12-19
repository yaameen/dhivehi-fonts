// loop all the files in the folder
// for each file, check if it is a .js file
const fs =  require('fs')
const files = fs.readdirSync("./fonts");
const db = files.map(file => ({
    font: `/fonts/${file}`,
    name: file.split(".")[0]
}))


console.log(`Fonts: ${db.length}`);

// make db to json and save into public folder
fs.writeFileSync("./fonts.json", JSON.stringify(db, null, 2));