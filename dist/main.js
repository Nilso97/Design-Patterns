"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const my_data_structure_1 = require("./my-data-structure");
const my_reverse_iterator_1 = require("./my-reverse-iterator");
const dataStructure = new my_data_structure_1.MyDataStructure();
dataStructure.addItem("A", "B", "C", "D", "E", "F");
const [a, b] = dataStructure;
console.log("ROUBADOS:", a, b);
console.log("EXECUTEI VÁRIAS COISAS E DEPOIS USEI O ITERATOR");
const [c, ...rest] = dataStructure;
console.log(c, rest);
dataStructure.resetIterator();
for (const data of dataStructure) {
    console.log(data);
}
console.log();
console.log("REVERSE");
dataStructure.changeIterator(new my_reverse_iterator_1.MyReverseIterator(dataStructure));
console.log();
for (const data of dataStructure) {
    console.log(data);
}
console.log();
console.log("AQUI PRECISO RESETAR MEU ITERATOR");
dataStructure.resetIterator();
for (const data of dataStructure) {
    console.log(data);
}
