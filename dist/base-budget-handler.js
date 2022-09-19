"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseBudgetHandler = void 0;
class BaseBudgetHandler {
    constructor() {
        this.nextHandler = null;
    }
    setNextHandler(handler) {
        this.nextHandler = handler;
        return handler;
    }
    handle(budget) {
        if (this.nextHandler)
            return this.nextHandler.handle(budget);
        return budget;
    }
}
exports.BaseBudgetHandler = BaseBudgetHandler;
