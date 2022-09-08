"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartHouseApp = void 0;
class SmartHouseApp {
    constructor() {
        this.commands = {};
    }
    addCommand(key, command) {
        this.commands[key] = command;
    }
    executeCommand(key) {
        this.commands[key].execute();
    }
    undoCommand(key) {
        this.commands[key].undo();
    }
}
exports.SmartHouseApp = SmartHouseApp;
