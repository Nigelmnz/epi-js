import Trie from "./trie.js";

describe("Trie", () => {
    let trie;
    beforeEach(() => {
        trie = new Trie();
    });
    it("handles init", () => {
        expect(trie).toBeDefined();
    });

    it("handles insertion", () => {
        trie.insert("hello");
        expect(trie.children.h).toBeDefined();
        expect(trie.children.h.children.e).toBeDefined();
        expect(trie.isLeaf).toBe(false);
    });

    it("modifies leaf status", () => {
        trie.insert("h");
        expect(trie.isLeaf).toBe(false);
        expect(trie.children.h.isLeaf).toBe(true);
    });

    it("can search", () => {
        trie.insert("hello");
        expect(trie.search("hello")).toBe(true);
        expect(trie.search("hell")).toBe(false);
        trie.insert("helmet");
        trie.insert("hellion");
        trie.insert("hockey");
        expect(trie.search("helmet")).toBe(true);
        expect(trie.search("helme")).toBe(false);
    });
    it("can delete", () => {
        trie.insert("hello");
        trie.delete("hell");
        expect(trie.search("hello")).toBe(true);
        trie.insert("helmet");
        trie.insert("helm");
        trie.insert("hellion");
        trie.insert("hockey");
        trie.delete("helmet");
        trie.insert("hell");
        trie.delete("hellion");
        expect(trie.search("helmet")).toBe(false);
        expect(trie.search("helm")).toBe(true);
        expect(trie.search("hell")).toBe(true);
        expect(trie.search("hellion")).toBe(false);
    });

    it("can get all", () => {
        trie.insert("one");
        trie.insert("two");
        trie.insert("uno");
        trie.insert("under");
        trie.insert("un");
        expect(trie.getAll().length).toEqual(5);
    });

    it("can get all with prefix", () => {
        trie.insert("one");
        trie.insert("two");
        trie.insert("twin");
        trie.insert("uno");
        trie.insert("under");
        trie.insert("understand");
        trie.insert("underboard");
        expect(trie.getWithPrefix("tw").length).toEqual(2);
        expect(trie.getWithPrefix("und").length).toEqual(3);
    });

    it("can autocomplete", () => {
        trie.insert("lodash", 3);
        trie.insert("love", 4);
        trie.insert("lovely", 5);
        trie.insert("mega", 3);
        expect(trie.autocomplete("lo")).toEqual("love");
        expect(trie.autocomplete("m")).toEqual("mega");
    });
});
