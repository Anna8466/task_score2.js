
let studentName = "Oksana"
let studentSurname = "Melnikova"

let shortName = studentName.slice(0, 1)

let introModuleScore = 50
let gitModuleScore = 70
let jsModuleScore = 3

let averageScore = (introModuleScore+gitModuleScore+jsModuleScore)/3

console.log(`The average score for ${shortName}. ${studentSurname} is ${averageScore}`)