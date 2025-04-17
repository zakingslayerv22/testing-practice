import { AnalyzeArray } from "./analyze-array.js";

const analyzeArray = new AnalyzeArray();

test("return object with average, max, min and length properties", () => {
  expect(analyzeArray.analyze([1, 3, 5, 7, 9, 11])).toEqual({
    average: 6,
    max: 11,
    min: 1,
    length: 6,
  });
});
