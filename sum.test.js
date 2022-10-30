import { sum, helpers } from "./sum";

describe("sum module", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("subtracks 3 from 5", () => {
    expect(helpers.subtract(5, 3)).toBe(2);
  });
});
