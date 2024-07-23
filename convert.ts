/**
 * A Map containing vulgar fractions as keys and their corresponding decimal representations as values.
 * Each value is an array of decimal approximations with increasing precision.
 * @type {Map<string, number[]>}
 */
const VULGAR_MAP = new Map([
  ['¼', [0.25]],
  ['½', [0.5]],
  ['¾', [0.75]],
  [
    '⅐',
    [
      0.142,
      0.1428,
      0.14285,
      0.142857,
      0.1428571,
      0.14285714,
      0.142857142,
      0.1428571428,
      0.14285714285,
      0.142857142857,
      0.1428571428571,
      0.14285714285714,
      0.142857142857142,
      0.1428571428571428,
      0.14285714285714285,
      1 / 7,
    ],
  ],
  [
    '⅑',
    [
      0.111,
      0.1111,
      0.11111,
      0.11111,
      0.111111,
      0.1111111,
      0.11111111,
      0.111111111,
      0.1111111111,
      0.11111111111,
      0.111111111111,
      0.1111111111111,
      0.11111111111111,
      0.111111111111111,
      0.1111111111111111,
      1 / 9,
    ],
  ],
  ['⅒', [0.1]],
  [
    '⅓',
    [
      0.333,
      0.3333,
      0.33333,
      0.33333,
      0.333333,
      0.3333333,
      0.33333333,
      0.333333333,
      0.3333333333,
      0.33333333333,
      0.333333333333,
      0.3333333333333,
      0.33333333333333,
      0.333333333333333,
      0.3333333333333333,
      1 / 3,
    ],
  ],
  [
    '⅔',
    [
      0.666,
      0.6666,
      0.66666,
      0.66666,
      0.666666,
      0.6666666,
      0.66666666,
      0.666666666,
      0.6666666666,
      0.66666666666,
      0.666666666666,
      0.6666666666666,
      0.66666666666666,
      0.666666666666666,
      0.6666666666666666,
      2 / 3,
    ],
  ],
  ['⅕', [0.2]],
  ['⅖', [0.4]],
  ['⅗', [0.6]],
  ['⅘', [0.8]],
  [
    '⅙',
    [
      0.166,
      0.1666,
      0.16666,
      0.16666,
      0.166666,
      0.1666666,
      0.16666666,
      0.166666666,
      0.1666666666,
      0.16666666666,
      0.166666666666,
      0.1666666666666,
      0.16666666666666,
      0.166666666666666,
      0.1666666666666666,
      1 / 6,
    ],
  ],
  [
    '⅚',
    [
      0.833,
      0.8333,
      0.83333,
      0.83333,
      0.833333,
      0.8333333,
      0.83333333,
      0.833333333,
      0.8333333333,
      0.83333333333,
      0.833333333333,
      0.8333333333333,
      0.83333333333333,
      0.833333333333333,
      0.8333333333333333,
      5 / 6,
    ],
  ],
  ['⅛', [0.125]],
  ['⅜', [0.375]],
  ['⅝', [0.625]],
  ['⅞', [0.875]],
]);

/**
 * Regular expression to match vulgar fraction characters.
 * @type {RegExp}
 */
const vulgarToDecimalRegex = /[¼½¾⅐⅑⅒⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞]/g;

/**
 * Converts a vulgar fraction character to its decimal representation.
 * @param {string} match - The vulgar fraction character to convert.
 * @returns {string} The decimal representation of the vulgar fraction.
 */
function toDecimal(match) {
  const values = VULGAR_MAP.get(match)
  return values[0].toString()
}

/**
 * Converts all vulgar fractions in a text to their decimal representations.
 * @param {string} text - The input text containing vulgar fractions.
 * @returns {string} The text with vulgar fractions replaced by their decimal representations.
 */
function convertVulgarToDecimal(text) {
  return text.replace(vulgarToDecimalRegex, toDecimal)
}


/**
 * Converts a fraction represented by numerator and denominator to its decimal value.
 * @param {string|number} numerator - The numerator of the fraction.
 * @param {string|number} denominator - The denominator of the fraction.
 * @returns {number} The decimal value of the fraction.
 */
function getFractionValue(numerator, denominator) {
  return Number(numerator) / Number(denominator);
}

/**
 * Finds the vulgar fraction character for a given decimal fraction value.
 * @param {number} fraction - The decimal fraction to find a vulgar character for.
 * @returns {string|null} The vulgar fraction character if found, null otherwise.
 */
function findVulgarFraction(fraction) {
  for (const [vulgar, values] of VULGAR_MAP) {
    if (values.includes(fraction)) {
      return vulgar;
    }
  }
  return null;
}

/**
 * Replaces a fraction string with its vulgar fraction character if available.
 * @param {string} match - The full matched fraction string.
 * @param {string} numerator - The numerator of the fraction.
 * @param {string} denominator - The denominator of the fraction.
 * @returns {string} The vulgar fraction character if available, otherwise the original match.
 */
function replaceFraction(match, numerator, denominator) {
  const fraction = getFractionValue(numerator, denominator);
  const vulgar = findVulgarFraction(fraction);
  return vulgar || match;
}

/**
 * Parses a text and replaces fraction strings with their vulgar fraction characters.
 * @param {string} text - The input text containing fractions to be parsed.
 * @returns {string} The text with fractions replaced by vulgar fraction characters where possible.
 */
function parseVulgars(text) {
  const fractionRegex = /(\d+)\s*\/\s*(\d+)/g;
  return text.replace(fractionRegex, replaceFraction);
}

// Test the function
console.log(parseVulgars('1/2 cup'));
// Output: '½ cup'

console.log(parseVulgars('It takes 1/2 cup chocolate chips and 1/4 cup sugar. Additionally it takes 4 3/4 cups flour.'));
// Output: 'It takes ½ cup chocolate chips and ¼ cup sugar. Additionally it takes 4 ¾ cups flour.'

/**
 * Converts a fraction string to its decimal representation.
 *
 * @param {string} fraction - The fraction string to convert (e.g., "1/2", "3/4").
 * @returns {number} The decimal representation of the fraction.
 * @throws {Error} If the input is not a valid fraction string.
 */
function convertFractionToDecimal(fraction) {
  // Regular expression to match fraction strings
  const fractionRegex = /^(\d+)\s*\/\s*(\d+)$/;

  // Test if the input matches the fraction pattern
  const match = fraction.match(fractionRegex);

  if (!match) {
    throw new Error(`Invalid fraction format: ${fraction}`);
  }

  const [, numerator, denominator] = match;

  // Convert numerator and denominator to numbers
  const num = Number(numerator);
  const den = Number(denominator);

  if (den === 0) {
    throw new Error("Denominator cannot be zero");
  }

  // Perform the division and return the result
  return num / den;
}

// Example usage:
//try {
//  console.log(convertFractionToDecimal("1/2")); // Output: 0.5
//  console.log(convertFractionToDecimal("3/4")); // Output: 0.75
//  console.log(convertFractionToDecimal("2 / 3")); // Output: 0.6666666666666666
//  console.log(convertFractionToDecimal("5/0")); // Throws an error
//  console.log(convertFractionToDecimal("not a fraction")); // Throws an error
//} catch (error) {
//  console.error(error.message);
//}

/**
 * Converts a decimal number to its closest vulgar fraction representation.
 *
 * @param {number} decimal - The decimal number to convert.
 * @param {number} [tolerance=1e-6] - The tolerance for considering a match (default is 1e-6).
 * @returns {string|null} The vulgar fraction character if a close match is found, or null if no match.
 */
function convertDecimalToVulgar(decimal, tolerance = 1e-6) {
  for (const [vulgar, values] of VULGAR_MAP) {
    for (const value of values) {
      if (Math.abs(decimal - value) < tolerance) {
        return vulgar;
      }
    }
  }
  return null;
}

/**
 * Converts a decimal number to a vulgar fraction or its original string representation.
 *
 * @param {number} decimal - The decimal number to convert.
 * @returns {string} The vulgar fraction character if available, or the original number as a string.
 */
function convertDecimalToVulgarOrString(decimal) {
  const vulgar = convertDecimalToVulgar(decimal);
  return vulgar !== null ? vulgar : decimal.toString();
}

// Example usage:
//console.log(convertDecimalToVulgar(0.5));  // Output: '½'
//console.log(convertDecimalToVulgar(0.333333333));  // Output: '⅓'
console.log(convertDecimalToVulgar(0.1428571428571428));  // Output: '⅐'
//console.log(convertDecimalToVulgar(0.7));  // Output: null
//
//console.log(convertDecimalToVulgarOrString(0.25));  // Output: '¼'
//console.log(convertDecimalToVulgarOrString(0.8));  // Output: '⅘'
//console.log(convertDecimalToVulgarOrString(0.7));  // Output: '0.7'

