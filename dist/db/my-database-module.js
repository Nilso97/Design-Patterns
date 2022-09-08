"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyDatabaseModule = void 0;
const users = [];
exports.MyDatabaseModule = {
    add(user) {
        users.push(user);
    },
    remove(index) {
        users.splice(index, 1);
    },
    show() {
        for (const user of users) {
            console.log(user);
        }
    },
};
