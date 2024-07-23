import {unitMapping} from "./units.ts";

/**
 * Replaces full unit names in a string with their corresponding abbreviations.
 *
 * This function takes a string as input and replaces occurrences of full unit names
 * (e.g., "teaspoon", "cups", "fluid ounces") with their corresponding abbreviations
 * (e.g., "tsp", "c", "fl oz") as defined in the `unitMapping` object.
 *
 * @param {string} input - The input string containing full unit names.
 * @returns {string} The modified string with unit names replaced by abbreviations.
 *
 * @example
 * const text = "Add 2 teaspoons of sugar and 1 cup of flour. Mix well.";
 * const replacedText = replaceUnitNamesWithAbbreviations(text);
 * console.log(replacedText); // Output: "Add 2 tsp of sugar and 1 c of flour. Mix well."
 */
export function replaceUnitNamesWithAbbreviations(input: string) {
    let result = input;

    for (const [key, value] of Object.entries(unitMapping)) {
        const regex = new RegExp(`\\b(${value.split(' | ').join('|')})\\b`, 'gi');
        result = result.replace(regex, key);
    }

    return result;
}