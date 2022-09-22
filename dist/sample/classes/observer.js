"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Observer {
    constructor(id) {
        this.id = id;
    }
    update() {
        console.log(`Observer ${this.id} updated`);
    }
}
exports.default = Observer;
