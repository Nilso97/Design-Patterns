"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { MyDatabaseClassic } from "./db/my-database-classic";
// import { MyDatabaseModule } from "./db/my-database-module";
const my_database_function_1 = require("./db/my-database-function");
const module_a_1 = require("./module_a");
// const myDatabaseClassic = MyDatabaseClassic.instance;
const myDatabaseClassic = my_database_function_1.MyDatabaseFunction;
myDatabaseClassic.add({ name: "Carl", age: 34 }); // Index: 0
myDatabaseClassic.add({ name: "Peterson", age: 22 }); // Index: 1
myDatabaseClassic.add({ name: "Julian", age: 19 }); // Index: 2
myDatabaseClassic.remove(0);
myDatabaseClassic.show();
console.log(myDatabaseClassic === module_a_1.myDatabaseClassic);
