"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageEditorBackupManager = void 0;
class ImageEditorBackupManager {
    constructor(imageEditor) {
        this.imageEditor = imageEditor;
        this.mementos = [];
    }
    backup() {
        console.log("Backup: salvando o estado de ImageEditor");
        this.mementos.push(this.imageEditor.save());
    }
    undo() {
        const memento = this.mementos.pop();
        if (!memento) {
            console.log("Backup: no mementos!");
            return;
        }
        this.imageEditor.restore(memento);
        console.log(`Backup: ${memento.getName()} foi restaurado com sucesso!`);
    }
    showMementos() {
        for (const memento of this.mementos) {
            console.log(memento);
        }
    }
}
exports.ImageEditorBackupManager = ImageEditorBackupManager;
