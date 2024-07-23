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

const FRACTION_REGEXP = new RegExp(/^\d+\/\d+/);

const DECIMAL_REGEXP = new RegExp(/^\d*\.+\d*$/);

/**
 * Checks if a given decimal number has a corresponding vulgar fraction mapping.
 *
 * @param {number} value - The decimal number to check.
 * @returns {boolean} True if there is a mapping, otherwise false.
 */
const existsInVulgarMap = (value: number): boolean => {
  // Iterate over the values (arrays of decimals) in the VULGAR_MAP
  for (const decimals of VULGAR_MAP.values()) {
    // Check if the value is included in any of the arrays
    if (decimals.includes(value)) {
      return true;
    }
  }
  return false;
};


/**
 * Converts a decimal number to its corresponding vulgar fraction string.
 *
 * @param {number} decimal - The decimal number to convert.
 * @returns {string} The corresponding vulgar fraction if found, otherwise the decimal number as a string.
 */
export const toVulgar = (decimal: number): string => {
  for (const [vulgar, decimals] of VULGAR_MAP.entries()) {
    if (decimals.includes(decimal)) {
      return vulgar;
    }
  }
  return String(decimal);
};


/**
 * Converts a vulgar fraction string to its corresponding decimal number as a string.
 *
 * @param {string} value - The vulgar fraction string to convert.
 * @returns {string} The corresponding decimal number as a string, or the original string if no mapping is found.
 */
export const toDecimal = (value: string): string => {
  const decimalValues = VULGAR_MAP.get(value);

  if (decimalValues) {
    // Return the last value in the array, which is always the exact decimal representation
    return String(decimalValues[decimalValues.length - 1]);
  }

  return value;
};


/**
 * Converts a fraction string (e.g., "1/2") to a decimal number.
 *
 * @param {string} fraction - The fraction string to convert.
 * @returns {number} The resulting decimal number.
 */
const fractionToDecimal = (fraction: string): number => {
  const [numerator, denominator] = fraction.split('/').map(Number);
  return numerator / denominator;
};

/**
 * Converts a decimal string (e.g., "0.5") to a vulgar fraction if possible.
 *
 * @param {string} decimalStr - The decimal string to convert.
 * @returns {string} The corresponding vulgar fraction or the original string if no mapping is found.
 */
const decimalStringToVulgar = (decimalStr: string): string => {
  const [whole, fraction] = decimalStr.split('.');
  const decimal = parseFloat(`.${fraction}`);
  const vulgar = toVulgar(decimal);
  return parseInt(whole, 10) ? `${whole} ${vulgar}` : vulgar;
};

/**
 * Parses a string and converts any fractions or decimal numbers to their corresponding vulgar fractions.
 *
 * @param {string} str - The input string to parse.
 * @returns {string} The resulting string with vulgar fractions.
 */
export const parseVulgars = (str: string): string => {
  return str.split(' ').map((substr) => {
    if (FRACTION_REGEXP.test(substr)) {
      const decimal = fractionToDecimal(substr);
      return existsInVulgarMap(decimal) ? toVulgar(decimal) : substr;
    }

    if (DECIMAL_REGEXP.test(substr)) {
      return decimalStringToVulgar(substr);
    }

    return substr;
  }).join(' ');
};
