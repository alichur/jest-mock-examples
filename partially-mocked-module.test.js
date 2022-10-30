import { sum, helpers } from "./sum";

jest.mock("./sum", () => {
  const originalModule = jest.requireActual("./sum");
  return {
    __esModule: true,
    ...originalModule,
    sum: jest.fn((a, b) => "this is the mocked sum function")
  };
});
describe("sum module", () => {
  it("calls the mocked function in a partially mocked file", () => {
    sum(2, 3);
    expect(sum(2, 3)).toEqual("this is the mocked sum function");
  });
  it("calls the unmocked function in a partially mocked file", () => {
    expect(helpers.subtract(10, 4)).toEqual(6);
  });
  it("calls the real function even if the property is set to a function mocked elsewhere", () => {
    //helpers.add is the same as sum which is mocked above
    expect(helpers.add(10, 4)).toEqual(14);
  });
  it("does not let you mock within a test or describe section", () => {
    jest.mock("./sum", () => {
      return {
        __esModule: true,
        helpers: { add: () => "mock add", subtract: () => "mock subtract" },
        sum: jest.fn((a, b) => "this is the mocked sum function")
      };
    });
    // it ignores the mocking of the subtract function
    expect(helpers.subtract(10, 4)).toEqual(6);
  });
});
