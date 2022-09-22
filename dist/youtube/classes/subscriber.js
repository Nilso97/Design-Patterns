"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subscribe {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    update(video) {
        console.log(`${this.name} has been notification about ${video.title}`);
    }
}
exports.default = Subscribe;
