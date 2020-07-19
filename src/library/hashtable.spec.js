import HashTable from "./hashtable.js";

describe("HashTable", () => {
    let hashTable;
    beforeEach(() => {
        hashTable = new HashTable();
    });
    it("handles one insertion", () => {
        hashTable.set("test", 100);
        expect(hashTable.get("test")).toEqual(100);
    });
    it("handles several insertions", () => {
        hashTable.set("test", 100);
        hashTable.set("hoot", 30);
        hashTable.set("crab", 20);
        expect(hashTable.get("hoot")).toEqual(30);
    });
    it("returns undefined when getting missing keys", () => {
        expect(hashTable.get("hoot")).toEqual(undefined);
    });
    it("handles deletion", () => {
        hashTable.set("test", 100);
        hashTable.set("hoot", 30);
        hashTable.set("crab", 20);
        hashTable.remove("hoot");
        expect(hashTable.get("hoot")).toEqual(undefined);
    });
});
