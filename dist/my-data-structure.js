"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyDataStructure = void 0;
const my_default_iterator_1 = require("./my-default-iterator");
class MyDataStructure {
    constructor() {
        this._items = [];
        this.iterator = new my_default_iterator_1.MyDefaultIterator(this);
    }
    addItem(...items) {
        items.forEach((item) => this.items.push(item));
    }
    get items() {
        return this._items;
    }
    size() {
        return this._items.length;
    }
    changeIterator(iterator) {
        this.iterator = iterator;
    }
    [Symbol.iterator]() {
        return this.iterator;
    }
    resetIterator() {
        this.iterator.reset();
    }
}
exports.MyDataStructure = MyDataStructure;
