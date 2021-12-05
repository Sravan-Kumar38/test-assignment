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

test("Generating item list", async () => {
  const bookData = {
    "Sulfuras, Hand of Ragnaros": {
      sell_in: 10,
      quality: 20,
    },
    "Backstage passes to a TAFKAL80ETC concert": {
      sell_in: 20,
      quality: 10,
    },
  };

  expect(generateItems(bookData)).toHaveLength(2);
});

test("Creating an item", async () => {
  const bookList1 = [
    { name: "Sulfuras, Hand of Ragnaros", sell_in: 10, quality: 20 },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sell_in: 20,
      quality: 10,
    },
  ];
  update_quality(bookList1);
  expect(bookList1).toStrictEqual([
    { name: "Sulfuras, Hand of Ragnaros", sell_in: 10, quality: 20 },
    {
      name: "Backstage passes to a TAFKAL80ETC concert",
      sell_in: 19,
      quality: 11,
    },
  ]);
});
