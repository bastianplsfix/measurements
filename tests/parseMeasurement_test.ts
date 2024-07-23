import { assertEquals } from "@std/assert";
import { parseMeasurement } from "../index.ts";

Deno.test("Parse measurement from string", () => {
  assertEquals(parseMeasurement("0.75 teaspoon Dijon mustard"), { amount: "0.75", unit: "teaspoon" });
  assertEquals(parseMeasurement("0.75teaspoon Dijon mustard"), { amount: "0.75", unit: "teaspoon" });
  assertEquals(parseMeasurement("0.75-tsp Dijon mustard"), { amount: "0.75", unit: "tsp" });
  assertEquals(parseMeasurement("0.75tablespoon Dijon mustard"), { amount: "0.75", unit: "tablespoon" });
  assertEquals(parseMeasurement("1cup sugar"), { amount: "1", unit: "cup" });
  assertEquals(parseMeasurement("1/2 teaspoon salt"), { amount: "1/2", unit: "teaspoon" });
  assertEquals(parseMeasurement("1/4-cup olive oil"), { amount: "1/4", unit: "cup" });
  assertEquals(parseMeasurement("2/3 tbsp vinegar"), { amount: "2/3", unit: "tbsp" });
  assertEquals(parseMeasurement("5 grams of sugar"), { amount: "5", unit: "g" });
  assertEquals(parseMeasurement("2kg flour"), { amount: "2", unit: "kg" });
  assertEquals(parseMeasurement("1 lb beef"), { amount: "1", unit: "lb" });
  assertEquals(parseMeasurement("3.5 ounces of cheese"), { amount: "3.5", unit: "ounce" });
  assertEquals(parseMeasurement("250ml milk"), { amount: "250", unit: "ml" });
  assertEquals(parseMeasurement("1.5 liters of water"), { amount: "1.5", unit: "liter" });
  assertEquals(parseMeasurement("100 milligrams of caffeine"), { amount: "100", unit: "milligram" });
  assertEquals(parseMeasurement("2 deciliters of juice"), { amount: "2", unit: "deciliter" });
  assertEquals(parseMeasurement("no match here"), null);
});
