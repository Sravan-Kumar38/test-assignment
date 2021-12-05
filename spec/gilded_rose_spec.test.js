const {
  createItem,
  generateItems,
  update_quality,
} = require("../src/gilded_rose");

test("Creating an item", async () => {
  const name = "Crime and punishment";
  const sell_in = 10;
  const quality = 20;

  expect(createItem(name, sell_in, quality)).toStrictEqual({
    name: name,
    sell_in: sell_in,
    quality: quality,
  });
});
