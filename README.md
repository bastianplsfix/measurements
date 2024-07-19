# Measurements

A comprehensive unit conversion library for TypeScript and JavaScript. This
package supports a wide range of units for volume, weight, temperature, and
length, including common kitchen measurements like teaspoons, tablespoons, and
cups, as well as metric and imperial units. Perfect for developers needing
accurate and easy-to-use conversions in their applications.

## Features

- Convert between various units of volume, weight, temperature, and length.
- Supports both metric and imperial units.
- Includes common kitchen measurements like pinch, dash, and smidgen.
- Simple API for quick and easy conversions.
- Error handling for unsupported conversions.

## Usage

### Importing the Library

First, import the `convert` function from the library:

```typescript
import { convert } from "@sebastian/measurements";
```

### Examples

#### Volume Conversions

```typescript
const tablespoons = convert(3, "tsp", "tbsp");
console.log(`3 tsp is ${tablespoons} tbsp`);

const fluidOunces = convert(2, "tbsp", "fl oz");
console.log(`2 tbsp is ${fluidOunces} fl oz`);

const cups = convert(8, "fl oz", "c");
console.log(`8 fl oz is ${cups} cups`);
```

#### Weight Conversions

```typescript
const pounds = convert(16, "oz", "lb");
console.log(`16 oz is ${pounds} lb`);

const grams = convert(1, "oz", "g");
console.log(`1 oz is ${grams.toFixed(2)} g`);

const kilograms = convert(150, "lb", "kg");
console.log(`150 lb is ${kilograms.toFixed(2)} kg`);
```

#### Temperature Conversions

```typescript
const fahrenheit = convert(0, "C", "F");
console.log(`0°C is ${fahrenheit}°F`);

const celsius = convert(32, "F", "C");
console.log(`32°F is ${celsius}°C`);
```

#### Length Conversions

```typescript
const feet = convert(1, "m", "ft");
console.log(`1 meter is ${feet.toFixed(2)} feet`);

const meters = convert(3.28084, "ft", "m");
console.log(`3.28084 feet is ${meters.toFixed(2)} meters`);
```

#### Other Common Measurements

```typescript
const teaspoonsFromPinch = convert(1, "pinch", "tsp");
console.log(`1 pinch is ${teaspoonsFromPinch} tsp`);

const teaspoonsFromDash = convert(1, "dash", "tsp");
console.log(`1 dash is ${teaspoonsFromDash} tsp`);

const teaspoonsFromSmidgen = convert(1, "smidgen", "tsp");
console.log(`1 smidgen is ${teaspoonsFromSmidgen} tsp`);
```

### Error Handling

The `convert` function throws an error if the conversion is invalid or
unsupported:

```typescript
try {
  const invalidConversion = convert(1, "lb", "m");
} catch (error) {
  console.error(error.message); // Invalid or unsupported unit conversion.
}
```

## API

### `convert(value: number, fromUnit: Unit, toUnit: Unit): number`

#### Parameters:

- `value`: The numerical value to be converted.
- `fromUnit`: The unit of the input value.
- `toUnit`: The unit to which the value should be converted.

#### Returns:

- The converted value.

#### Throws:

- An error if the conversion is invalid or unsupported.

### Supported Units

- **Volume**: 'tsp' (Teaspoon), 'tbsp' (Tablespoon), 'fl oz' (Fluid ounce), 'c'
  (Cup), 'pt' (Pint), 'qt' (Quart), ' gal' (Gallon), 'ml' (Milliliter), 'l'
  (Liter), 'dl' (Deciliter)
- **Weight**: 'oz' (Ounce), 'lb' (Pound), 'g' (Gram), 'kg' (Kilogram)
- **Temperature**: 'F' (Degrees Fahrenheit), 'C' (Degrees Celsius)
- **Other Common Measurements**: 'pinch' (Pinch), 'dash' (Dash), 'smidgen'
  (Smidgen)
- **Length**: 'm' (Meter), 'ft' (Foot)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on
GitHub.

## License

This project is licensed under the MIT License.
