"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CounterIteratorForward = exports.Counter = void 0;
class Counter {
    constructor() {
        this.current = 0;
        this.last = 5;
    }
    [Symbol.iterator]() {
        return this.resetIterator();
    }
    resetIterator() {
        return new CounterIteratorForward(this);
    }
}
exports.Counter = Counter;
class CounterIteratorForward {
    constructor(counter) {
        this.counter = counter;
        this.current = this.counter.current;
        this.last = this.counter.last;
    }
    next() {
        return { value: ++this.current, done: this.current > this.last };
    }
}
exports.CounterIteratorForward = CounterIteratorForward;
const counter = new Counter();
const [one, two, ...rest] = counter;
console.log(one, two, rest);
for (const count of counter) {
    console.log(count);
}
