"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myDatabaseClassic = void 0;
// import { MyDatabaseClassic } from "./db/my-database-classic";
// import { MyDatabaseModule } from "./db/my-database-module";
const my_database_function_1 = require("./db/my-database-function");
// const myDatabaseClassic = MyDatabaseClassic.instance;
const myDatabaseClassic = my_database_function_1.MyDatabaseFunction;
exports.myDatabaseClassic = myDatabaseClassic;
myDatabaseClassic.add({ name: "John", age: 32 }); // Index: 0
myDatabaseClassic.add({ name: "Suzan", age: 25 }); // Index: 1
myDatabaseClassic.add({ name: "Michael", age: 41 }); // Index: 2
myDatabaseClassic.show();
