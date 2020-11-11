const { success, fail, repair, get } = require("./enhancer.js");
// test away!

// describe("make sure jest is working", () => {
//   it("sanity check", () => {});
// });

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

  describe("fail", () => {
    test("if less than 15", () => {
      const item = { name: "tom", durability: 20, enhancer: 10 };
      fail(item);
      expect(item.durability).toBe(15);
    });

    test("if greater or equal to 15", () => {
      const item = { name: "tom", durability: 20, enhancer: 16 };
      fail(item);
      expect(item.durability).toBe(10);
    });

    test("if greater than 16", () => {
      const item = { name: "tom", durability: 20, enhancer: 17 };
      fail(item);
      expect(item.enhancer).toBe(16);
    });
  });
});
