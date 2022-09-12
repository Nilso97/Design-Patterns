"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const image_editor_1 = require("./image-editor");
const image_editor_backup_manager_1 = require("./image-editor-backup-manager");
const imageEditor = new image_editor_1.ImageEditor("/media/imagem.png", "png");
const backupManager = new image_editor_backup_manager_1.ImageEditorBackupManager(imageEditor);
backupManager.backup();
imageEditor.convertFormatTo("jpg"); // Será desfeito e o Backup de "imageEditor" será restaurado
backupManager.backup();
imageEditor.convertFormatTo("gif");
backupManager.backup();
imageEditor.convertFormatTo("bmp");
console.log(imageEditor);
backupManager.undo();
console.log(imageEditor); // Restaura ".gif"
backupManager.undo();
console.log(imageEditor); // Restaura ".jpg"
backupManager.undo();
console.log(imageEditor); // Restaura ".png"
backupManager.undo();
console.log(imageEditor); // no mementos
