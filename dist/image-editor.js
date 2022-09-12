"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageEditor = void 0;
const concrete_memento_1 = require("./concrete-memento");
// Originator
class ImageEditor {
    constructor(filePath, fileFormat) {
        this.filePath = filePath;
        this.fileFormat = fileFormat;
    }
    convertFormatTo(format) {
        this.fileFormat = format;
        this.filePath = this.filePath.split(".").slice(0, -1).join("");
        this.filePath += "." + format;
    }
    save() {
        const date = new Date();
        return new concrete_memento_1.ConcreteMemento(date.toISOString(), date, this.filePath, this.fileFormat);
    }
    restore(memento) {
        const concreteMemento = memento; // Type cast
        this.filePath = concreteMemento.getFilePath();
        this.fileFormat = concreteMemento.getFileFormat();
    }
}
exports.ImageEditor = ImageEditor;
