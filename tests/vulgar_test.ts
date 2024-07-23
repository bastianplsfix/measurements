import { assertEquals } from "@std/assert";
import { toDecimal, toVulgar, parseVulgars } from "../index.ts";

Deno.test("Convert decimal to vulgar fraction", () => {
  assertEquals(toVulgar(0.5), '½');
  assertEquals(toVulgar(1/8), '⅛');
  assertEquals(toVulgar(0.75), '¾');
  assertEquals(toVulgar(2/3), '⅔');
});

Deno.test("Convert vulgar fraction to decimal", () => {
  assertEquals(toDecimal('⅜'), '0.375');
  assertEquals(toDecimal('⅗'), '0.6');
  assertEquals(toDecimal('⅞'), '0.875');
  assertEquals(toDecimal('⅕'), '0.2');
});

Deno.test("Parse vulgar fractions in text", () => {
  assertEquals(parseVulgars('Use 1/3 cup of milk'), 'Use ⅓ cup of milk');
  assertEquals(parseVulgars('Add 1/4 teaspoon of salt'), 'Add ¼ teaspoon of salt');
  assertEquals(parseVulgars('1/2 cup of sugar and 3/4 cup of flour'), '½ cup of sugar and ¾ cup of flour');
  assertEquals(parseVulgars('Mix 2/5 cup of water'), 'Mix ⅖ cup of water');
});

Deno.test("Invalid inputs", () => {
  assertEquals(toVulgar(0.1274859937), '0.1274859937');
  assertEquals(toDecimal('Hello World!'), 'Hello World!');
});
