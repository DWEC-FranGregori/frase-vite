import { describe, expect, test } from "vitest";

import {
  letters,
  words,
  upperString,
  titleString,
  backwardsLetters,
  backwardsWords,
  palindrome,
} from "../functions";

describe('Funciones sobre la frase "Una frase para probar"', () => {
  const frase = "Una frase para probar";
  const frase2 = "La ruta nos aporto otro paso natural";

  test("letters devuelve 21", () => {
    expect(letters(frase)).toBe(21);
  });
  test("words devuelve 4", () => {
    expect(words(frase)).toBe(4);
  });
  test("upperString devuelve UNA FRASE PARA PROBAR", () => {
    expect(upperString(frase)).toBe("UNA FRASE PARA PROBAR");
  });
  test("titleString devuelve Una Frase Para Probar ", () => {
    expect(titleString(frase)).toBe("Una Frase Para Probar");
  });
  test("letrasReves devuelve raborp arap esarf anU", () => {
    expect(backwardsLetters(frase)).toBe("raborp arap esarf anU");
  });
  test("backwardsLetters devuelve probar para frase Una", () => {
    expect(backwardsWords(frase)).toBe("probar para frase Una");
  });
  test('palindrome sobre "Una frase para probar"  devuelve FALSE', () => {
    expect(palindrome(frase)).toBe(false);
  });
  test('palindrome sobre "La ruta nos aporto otro paso natural"  devuelve TRUE', () => {
    expect(palindrome(frase2)).toBe(true);
  });
});
