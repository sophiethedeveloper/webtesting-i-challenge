const { success, fail, repair, get } = require("./enhancer.js");
// test away!

describe("make sure jest is working", () => {
  it("sanity check", () => {});
});

describe("enhancer", () => {
  describe("repair", () => {
    test("repair function", () => {
      expect(
        repair({ name: "tom", durability: 40, enhancer: 20 })
      ).toHaveProperty("durability", 100);
    });

    test("preserves other properties of item", () => {
      expect(
        repair({ name: "tom", durability: 40, enhancer: 20 })
      ).toMatchObject({ name: "tom", enhancer: 20 });
    });
  });

  describe("success", () => {
    test("if less than 20 add 1", () => {
      const item = { name: "tom", durability: 40, enhancer: 19 };
      success(item);
      expect(item.enhancer).toBe(20);
    });
  });
});
