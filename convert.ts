import {Unit} from "./units.ts"

/**
 * Converts a value from one unit of measurement to another.
 *
 * @param {number} value - The numerical value to be converted.
 * @param {Unit} fromUnit - The unit of the input value.
 * @param {Unit} toUnit - The unit to which the value should be converted.
 * @returns {number} - The converted value.
 * @throws {Error} - Throws an error if the conversion is invalid or unsupported.
 */
export function convert(value: number, fromUnit: Unit, toUnit: Unit): number {
  // Dictionary of conversion ratios between units
  const conversions: Record<string, number> = {
    // Volume conversions
    "tsp_tbsp": 1 / 3,
    "tbsp_tsp": 3,
    "tbsp_fl oz": 1 / 2,
    "fl oz_tbsp": 2,
    "fl oz_c": 1 / 8,
    "c_fl oz": 8,
    "c_pt": 1 / 2,
    "pt_c": 2,
    "pt_qt": 1 / 2,
    "qt_pt": 2,
    "qt_gal": 1 / 4,
    "gal_qt": 4,
    "ml_l": 1 / 1000,
    "l_ml": 1000,
    "dl_l": 1 / 10,
    "l_dl": 10,
    "ml_fl oz": 1 / 29.5735,
    "fl oz_ml": 29.5735,
    "l_gal": 1 / 3.78541,
    "gal_l": 3.78541,

    // Weight conversions
    "oz_lb": 1 / 16,
    "lb_oz": 16,
    "g_kg": 1 / 1000,
    "kg_g": 1000,
    "g_oz": 1 / 28.3495,
    "oz_g": 28.3495,
    "g_lb": 1 / 453.592,
    "lb_g": 453.592,
    "kg_lb": 0.45359237,
    "lb_kg": 1 / 0.45359237,

    // Length conversions
    "m_ft": 3.28084,
    "ft_m": 1 / 3.28084,
    "cm_in": 1 / 2.54,
    "in_cm": 2.54,

    // Miscellaneous conversions
    "pinch_tsp": 1 / 8,
    "dash_tsp": 1 / 6,
    "smidgen_tsp": 1 / 32,
  };

  // Handle temperature conversion separately
  if (fromUnit === "C" && toUnit === "F") {
    return (value * 9 / 5) + 32; // Celsius to Fahrenheit
  } else if (fromUnit === "F" && toUnit === "C") {
    return (value - 32) * 5 / 9; // Fahrenheit to Celsius
  } else if (fromUnit === toUnit) {
    return value; // No conversion needed if units are the same
  } else {
    // Construct the key for the conversion dictionary
    const conversionKey = `${fromUnit}_${toUnit}`;
    // Check if the conversion ratio exists in the dictionary
    if (conversions[conversionKey] !== undefined) {
      return value * conversions[conversionKey]; // Perform the conversion
    } else {
      throw new Error(`Invalid or unsupported unit conversion from ${fromUnit} to ${toUnit}.`); // Throw error for unsupported conversions
    }
  }
}
