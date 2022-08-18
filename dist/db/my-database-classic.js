"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyDatabaseClassic = void 0;
class MyDatabaseClassic {
    constructor() {
        this.users = [];
    }
    static get instance() {
        if (MyDatabaseClassic._instance === null) {
            MyDatabaseClassic._instance = new MyDatabaseClassic();
        }
        return MyDatabaseClassic._instance;
    }
    add(user) {
        this.users.push(user);
    }
    remove(index) {
        this.users.splice(index, 1);
    }
    show() {
        for (const user of this.users) {
            console.log(user);
        }
    }
}
exports.MyDatabaseClassic = MyDatabaseClassic;
MyDatabaseClassic._instance = null;
