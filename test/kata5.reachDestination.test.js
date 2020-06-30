const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toBe("I should be there in 4.5 hours.");
    expect(reachDestination(25, 4)).toBe("I should be there in 6.5 hours.");
    expect(reachDestination(80, 25)).toBe("I should be there in 3 hours.");
  });
});
