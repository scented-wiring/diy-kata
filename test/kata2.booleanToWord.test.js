const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns 'Yes' or 'No' dependent on True or False", () => {
    expect(booleanToWord(true)).toBe("Yes");
    expect(booleanToWord(false)).toBe("No");
  });
});
