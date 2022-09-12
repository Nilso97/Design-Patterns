import { ConcreteMemento } from "./concrete-memento";
import { IMemento } from "./memento";

// Originator
export class ImageEditor {
  constructor(private filePath: string, private fileFormat: string) {}

  convertFormatTo(format: string): void {
    this.fileFormat = format;
    this.filePath = this.filePath.split(".").slice(0, -1).join("");
    this.filePath += "." + format;
  }

  save(): Readonly<IMemento> {
    const date = new Date();

    return new ConcreteMemento(
      date.toISOString(),
      date,
      this.filePath,
      this.fileFormat
    );
  }

  restore(memento: IMemento): void {
    const concreteMemento = memento as ConcreteMemento; // Type cast
    this.filePath = concreteMemento.getFilePath();
    this.fileFormat = concreteMemento.getFileFormat();
  }
}
