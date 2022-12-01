const {Shop, Item} = require("../src/gilded_rose");

const names = [
    "Other",
    "Aged Brie",
    "Elixir of the Mongoose",
    "Sulfuras, Hand of Ragnaros",
    "Backstage passes to a TAFKAL80ETC concert",
]

const sellIn = [-5, -1, 0, 1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 20, 30, 40, 48, 49, 50, 51, 52, 53, 100]
const quality = [-5, -1, 0, 1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 20, 30, 40, 48, 49, 50, 51, 52, 53, 100]

describe("Gilded Rose", function () {
    it("Should match old values", function () {
        const data = []

        for (const name of names) {
            for (const s of sellIn) {
                for (const q of quality) {
                    const gildedRose = new Shop([new Item(name, s, q)]);
                    data.push(gildedRose.updateQuality());
                }
            }
        }
        expect(data).toMatchSnapshot();
    });
});
