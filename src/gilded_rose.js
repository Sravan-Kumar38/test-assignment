const book1 = "+5 Dexterity Vest";
const book2 = "Aged Brie";
const book3 = "Elixir of the Mongoose";
const book4 = "Sulfuras, Hand of Ragnaros";
const book5 = "Backstage passes to a TAFKAL80ETC concert";
const book6 = "Conjured Mana Cake";

const bookData = {
  [book1]: {
    sell_in: 10,
    quality: 20,
  },
  [book2]: {
    sell_in: 2,
    quality: 0,
  },
  [book3]: {
    sell_in: 5,
    quality: 7,
  },
  [book4]: {
    sell_in: 0,
    quality: 80,
  },
  [book5]: {
    sell_in: 15,
    quality: 20,
  },
  [book6]: {
    sell_in: 3,
    quality: 6,
  },
};

const createItem = (name, sell_in, quality) => ({
  name: name,
  sell_in: sell_in,
  quality: quality,
});

const generateItems = (bookData) => {
  return Object.keys(bookData).map((key) =>
    createItem(key, bookData[key].sell_in, bookData[key].quality)
  );
};

const update_quality = (items) => {
  items.map((item) => {
    switch (item.name) {
      case book1:
      case book3:
      case book6:
        item.sell_in = item.sell_in - 1;
        item.quality =
          item.quality > 0
            ? item.sell_in < 0
              ? item.quality - 2
              : item.quality - 1
            : item.quality;
        break;
      case book2:
        item.sell_in = item.sell_in - 1;
        item.quality =
          item.quality < 50
            ? item.sell_in < 0
              ? item.quality + 2
              : item.quality + 1
            : item.quality;
        break;

      case book5:
        item.sell_in = item.sell_in - 1;
        item.quality =
          item.sell_in < 0
            ? item.quality - item.quality
            : item.quality < 50
            ? item.sell_in < 11 || item.sell_in < 6
              ? item.quality + 2
              : item.quality + 1
            : item.quality;
        break;
    }
  });
};

// const items = generateItems(bookData);
// update_quality(items);

module.exports = {
  createItem,
  generateItems,
  update_quality,
};
