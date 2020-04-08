import { calculatePrice } from "./price";

describe("price utils", () => {
  describe("calculatePrice", () => {
    it("should handle ", () => {
      expect(calculatePrice(0, 0)).toBe(0);
      expect(calculatePrice(10, 1)).toBe(10);
      expect(calculatePrice(1, 10)).toBe(10);
    });

    it("should handle empty input", () => {
      expect(calculatePrice()).toBe(NaN);
    });
  });
});
