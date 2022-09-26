"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyReverseIterator = void 0;
class MyReverseIterator {
    constructor(dataStructure) {
        this.dataStructure = dataStructure;
        this.index = this.dataStructure.size();
    }
    reset() {
        this.index = this.dataStructure.size();
    }
    next() {
        this.index--;
        const returnValue = this.makeValue(this.dataStructure.items[this.index]);
        returnValue.done = this.index < 0;
        return returnValue;
    }
    makeValue(value) {
        return { value, done: false };
    }
}
exports.MyReverseIterator = MyReverseIterator;
