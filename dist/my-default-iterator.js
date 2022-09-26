"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyDefaultIterator = void 0;
class MyDefaultIterator {
    constructor(dataStructure) {
        this.dataStructure = dataStructure;
        this.index = 0;
    }
    reset() {
        this.index = 0;
    }
    next() {
        const returnValue = this.makeValue(this.dataStructure.items[this.index]);
        returnValue.done = this.index >= this.dataStructure.size();
        this.index++;
        return returnValue;
    }
    makeValue(value) {
        return { value, done: false };
    }
}
exports.MyDefaultIterator = MyDefaultIterator;
