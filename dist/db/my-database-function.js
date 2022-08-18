"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyDatabaseFunction = void 0;
exports.MyDatabaseFunction = (function () {
    const users = [];
    return {
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
})();
