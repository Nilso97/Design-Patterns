"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subject {
    constructor() {
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        this.observers.filter((obs) => obs !== observer);
    }
    unsubscribeAll() {
        this.observers = [];
    }
    notify(observer) {
        observer.update();
    }
    notifyAll() {
        this.observers.forEach((obs) => this.notify(obs));
    }
}
exports.default = Subject;
