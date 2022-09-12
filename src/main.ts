import { ImageEditor } from "./image-editor";
import { ImageEditorBackupManager } from "./image-editor-backup-manager";

const imageEditor = new ImageEditor("/media/imagem.png", "png");
const backupManager = new ImageEditorBackupManager(imageEditor);

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
console.log(imageEditor); // no mementos!
