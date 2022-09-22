"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VideoNotification {
    constructor(video) {
        this.video = video;
        this.observers = [];
    }
    subscribe(sub) {
        this.observers.push(sub);
    }
    unsubscribe(sub) {
        this.observers = this.observers.filter((element) => element !== sub);
    }
    unsubscribeAll() {
        this.observers = [];
    }
    notify(sub) {
        sub.update(this.video);
    }
    notifyAll() {
        this.observers.forEach((sub) => this.notify(sub));
    }
}
exports.default = VideoNotification;
