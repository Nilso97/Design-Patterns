"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteMemento = void 0;
class ConcreteMemento {
    constructor(name, date, filePath, fileFormat) {
        this.name = name;
        this.date = date;
        this.filePath = filePath;
        this.fileFormat = fileFormat;
    }
    getName() {
        return this.name;
    }
    getDate() {
        return this.date;
    }
    getFilePath() {
        return this.filePath;
    }
    getFileFormat() {
        return this.fileFormat;
    }
}
exports.ConcreteMemento = ConcreteMemento;
