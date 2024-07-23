import { assertEquals, assertThrows } from "@std/assert";
import { convert } from "../index.ts";

// Volume Measurements
Deno.test("Teaspoon to Tablespoon", () => {
  assertEquals(convert(3, "tsp", "tbsp"), 1);
});

Deno.test("Tablespoon to Teaspoon", () => {
  assertEquals(convert(1, "tbsp", "tsp"), 3);
});

Deno.test("Tablespoon to Fluid Ounce", () => {
  assertEquals(convert(2, "tbsp", "fl oz"), 1);
});

Deno.test("Fluid Ounce to Tablespoon", () => {
  assertEquals(convert(1, "fl oz", "tbsp"), 2);
});

Deno.test("Fluid Ounce to Cup", () => {
  assertEquals(convert(8, "fl oz", "c"), 1);
});

Deno.test("Cup to Fluid Ounce", () => {
  assertEquals(convert(1, "c", "fl oz"), 8);
});

Deno.test("Cup to Pint", () => {
  assertEquals(convert(2, "c", "pt"), 1);
});

Deno.test("Pint to Cup", () => {
  assertEquals(convert(1, "pt", "c"), 2);
});

Deno.test("Pint to Quart", () => {
  assertEquals(convert(2, "pt", "qt"), 1);
});

Deno.test("Quart to Pint", () => {
  assertEquals(convert(1, "qt", "pt"), 2);
});

Deno.test("Quart to Gallon", () => {
  assertEquals(convert(4, "qt", "gal"), 1);
});

Deno.test("Gallon to Quart", () => {
  assertEquals(convert(1, "gal", "qt"), 4);
});

Deno.test("Milliliter to Liter", () => {
  assertEquals(convert(1000, "ml", "l"), 1);
});

Deno.test("Liter to Milliliter", () => {
  assertEquals(convert(1, "l", "ml"), 1000);
});

Deno.test("Deciliter to Liter", () => {
  assertEquals(convert(10, "dl", "l"), 1);
});

Deno.test("Liter to Deciliter", () => {
  assertEquals(convert(1, "l", "dl"), 10);
});

// Weight Measurements
Deno.test("Ounce to Pound", () => {
  assertEquals(convert(16, "oz", "lb"), 1);
});

Deno.test("Pound to Ounce", () => {
  assertEquals(convert(1, "lb", "oz"), 16);
});

Deno.test("Gram to Kilogram", () => {
  assertEquals(convert(1000, "g", "kg"), 1);
});

Deno.test("Kilogram to Gram", () => {
  assertEquals(convert(1, "kg", "g"), 1000);
});

Deno.test("Gram to Ounce", () => {
  assertEquals(convert(28.3495, "g", "oz"), 1);
});

Deno.test("Ounce to Gram", () => {
  assertEquals(convert(1, "oz", "g"), 28.3495);
});

// Temperature Measurements
Deno.test("Celsius to Fahrenheit", () => {
  assertEquals(convert(0, "C", "F"), 32);
});

Deno.test("Fahrenheit to Celsius", () => {
  assertEquals(convert(32, "F", "C"), 0);
});

// Other Common Measurements
Deno.test("Pinch to Teaspoon", () => {
  assertEquals(convert(1, "pinch", "tsp"), 1 / 8);
});

Deno.test("Dash to Teaspoon", () => {
  assertEquals(convert(1, "dash", "tsp"), 1 / 6);
});

Deno.test("Smidgen to Teaspoon", () => {
  assertEquals(convert(1, "smidgen", "tsp"), 1 / 32);
});

// Length Measurements
Deno.test("Meter to Foot", () => {
  assertEquals(convert(1, "m", "ft"), 3.28084);
});

Deno.test("Foot to Meter", () => {
  assertEquals(convert(1, "ft", "m"), 1 / 3.28084);
});

// Error Handling
Deno.test("Invalid Conversion", () => {
  assertThrows(
    () => {
      convert(1, "lb", "m"); // Invalid conversion
    },
    Error,
    "Invalid or unsupported unit conversion from lb to m.",
  );
});
