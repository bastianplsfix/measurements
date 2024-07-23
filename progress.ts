import {toDecimal} from "./vulgar.ts";
import {replaceUnitNamesWithAbbreviations} from "./replaceUnitNamesWIthAbbreviations.ts";
import {parseMeasurement} from "./parseMeasurement.ts";



// Input into DB
let str = "3/4 teaspoon Dijon mustard"
str = replaceUnitNamesWithAbbreviations(str)
console.log(str) // 3/4 tsp Dijon mustard
let ingredient = parseMeasurement(str)
console.log(ingredient)


// Clientside render from DB
str = str.replace(ingredient.amount, toDecimal(ingredient.amount))
console.log(str)
