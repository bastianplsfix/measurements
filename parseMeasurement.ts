const units = [
    'teaspoon', 'teaspoons', 'tsp', 'tablespoon', 'tablespoons', 'tbsp',
    'cup', 'cups', 'ounce', 'ounces', 'oz', 'pint', 'pints', 'quart', 'quarts',
    'gallon', 'gallons', 'ml', 'milliliter', 'milliliters', 'liter', 'liters',
    'g', 'gram', 'grams', 'kg', 'kilogram', 'kilograms', 'lb', 'lbs', 'pound', 'pounds',
    'mg', 'milligram', 'milligrams', 'cl', 'centiliter', 'centiliters', 'dl', 'deciliter', 'deciliters'
].join('|');

const regexString = [
   '(?<amount>\\d+(\\.\\d+)?|\\d+/\\d+)',  // Group 1: Matches the number, which can be an integer, a decimal, or a fraction
  '(\\s*|-)?',         // Group 2: Matches zero or more spaces or a hyphen
  `(?<unit>${units})`  // Group 3: Matches the measurement units
].join('');

const regex = new RegExp(regexString, 'i');

export function parseMeasurement(input: string) {
    const match = input.match(regex);
    if (match) {
        return {
            amount: match.groups?.amount,
            unit: match.groups?.unit
        };
    } else {
        return null;
    }
}
