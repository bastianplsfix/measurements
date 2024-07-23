// Define a type alias for the supported units of measurement with comments for full names
export type Unit =
  | "tsp"       // Teaspoon
  | "tbsp"      // Tablespoon
  | "fl oz"     // Fluid ounce
  | "c"         // Cup
  | "pt"        // Pint
  | "qt"        // Quart
  | "gal"       // Gallon
  | "ml"        // Milliliter
  | "l"         // Liter
  | "dl"        // Deciliter
  | "oz"        // Ounce
  | "lb"        // Pound
  | "g"         // Gram
  | "kg"        // Kilogram
  | "F"         // Degrees Fahrenheit
  | "C"         // Degrees Celsius
  | "pinch"     // Pinch
  | "dash"      // Dash
  | "smidgen"   // Smidgen
  | "m"         // Meter
  | "ft"        // Foot
  | "cm"        // Centimeter
  | "in";       // Inch


type UnitMapping = {
    [key: string]: string;
};

const unitMapping: UnitMapping = {
    'tsp': 'teaspoon | teaspoons',
    'tbsp': 'tablespoon | tablespoons',
    'fl oz': 'fluid ounce | fluid ounces',
    'c': 'cup | cups',
    'pt': 'pint | pints',
    'qt': 'quart | quarts',
    'gal': 'gallon | gallons',
    'ml': 'milliliter | milliliters',
    'l': 'liter | liters',
    'dl': 'deciliter | deciliters',
    'oz': 'ounce | ounces',
    'lb': 'pound | pounds',
    'g': 'gram | grams',
    'kg': 'kilogram | kilograms',
    'F': 'degree Fahrenheit | degrees Fahrenheit',
    'C': 'degree Celsius | degrees Celsius',
    'pinch': 'pinch | pinches',
    'dash': 'dash | dashes',
    'smidgen': 'smidgen | smidgens',
    'm': 'meter | meters',
    'ft': 'foot | feet',
    'cm': 'centimeter | centimeters',
    'in': 'inch | inches'
};


