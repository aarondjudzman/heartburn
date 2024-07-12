import Fuse from "fuse.js";
import { FoodItem, FoodItems } from "../data/food";

const fuse = new Fuse(FoodItems, {
  keys: ["name"],
  threshold: 0.3,
  includeScore: true,
});

function preprocessInput(input: string): string {
  return input.toLowerCase().trim();
}

export function searchFood(input: string): FoodItem[] {
  const preprocessedInput = preprocessInput(input);
  if (!preprocessedInput) return [];

  const results = fuse.search(preprocessedInput);
  return results.map((result) => result.item);
}
