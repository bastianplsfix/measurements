import { unitMapping } from './units.ts';

// Generate the regex pattern string using the unitMapping
const unitsPattern = Object.entries(unitMapping).map(([key, value]) => `${key}|${value}`).join('|');

// Construct the full regex string
const regexString = [
    '(?<amount>\\d+(\\.\\d+)?|\\d+/\\d+)',  // Group 1: Matches the number, which can be an integer, a decimal, or a fraction
    '(\\s*|-)?',         // Group 2: Matches zero or more spaces or a hyphen
    `(?<unit>${unitsPattern})`,  // Group 3: Matches the measurement units
    '\\s*(?<ingredient>.*)'    // Group 4: Matches the ingredient of the string after the measurement
].join('');

const regex = new RegExp(regexString, 'i');

/**
 * Parses a measurement string into its components: amount, unit, and ingredient.
 *
 * @param {string} input - The input string containing the measurement.
 * @returns {Object|null} An object with the parsed components or null if the input doesn't match the expected format.
 * @returns {string} return.input - The original input string.
 * @returns {string} return.amount - The amount of the measurement.
 * @returns {string} return.unit - The unit of the measurement.
 * @returns {string} return.ingredient - The ingredient following the measurement.
 *
 * @example
 * // returns { input: '1 tsp sugar', amount: '1', unit: 'tsp', ingredient: 'sugar' }
 * parseMeasurement('1 tsp sugar');
 *
 * @example
 * // returns { input: '2.5 teaspoons flour', amount: '2.5', unit: 'teaspoons', ingredient: 'flour' }
 * parseMeasurement('2.5 teaspoons flour');
 *
 * @example
 * // returns null
 * parseMeasurement('no measurement here');
 */
export function parseMeasurement(input: string) {
    const match = input.match(regex);
    if (match) {
        return {
            input: match.input,
            amount: match.groups?.amount,
            unit: match.groups?.unit,
            ingredient: match.groups?.ingredient
        };
    } else {
        return null;
    }
}
