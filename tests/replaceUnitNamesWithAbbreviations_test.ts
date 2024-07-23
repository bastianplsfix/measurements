import { assertEquals } from "@std/assert";
import { replaceUnitNamesWithAbbreviations, unitMapping } from "../index.ts";

Deno.test("Replace unit names with abbreviations", () => {
  const text = "Add 2 teaspoons of sugar and 1 cup of flour. Mix well.";
  const expected = "Add 2 tsp of sugar and 1 c of flour. Mix well.";
  assertEquals(replaceUnitNamesWithAbbreviations(text), expected);
  
  const text2 = "Use 3 tablespoons of olive oil and 1 quart of water.";
  const expected2 = "Use 3 tbsp of olive oil and 1 qt of water.";
  assertEquals(replaceUnitNamesWithAbbreviations(text2), expected2);
  
  const text3 = "Pour 500 milliliters of milk and 200 grams of sugar.";
  const expected3 = "Pour 500 ml of milk and 200 g of sugar.";
  assertEquals(replaceUnitNamesWithAbbreviations(text3), expected3);
  
  const text4 = "Mix 4 liters of water with 1 kilogram of flour.";
  const expected4 = "Mix 4 l of water with 1 kg of flour.";
  assertEquals(replaceUnitNamesWithAbbreviations(text4), expected4);
});
