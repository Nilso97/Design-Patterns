// import { MyDatabaseClassic } from "./db/my-database-classic";
// import { MyDatabaseModule } from "./db/my-database-module";
import { MyDatabaseFunction } from "./db/my-database-function";
import { myDatabaseClassic as myDatabaseFromModule_a } from "./module_a";

// const myDatabaseClassic = MyDatabaseClassic.instance;
const myDatabaseClassic = MyDatabaseFunction;

myDatabaseClassic.add({ name: "Carl", age: 34 }); // Index: 0
myDatabaseClassic.add({ name: "Peterson", age: 22 }); // Index: 1
myDatabaseClassic.add({ name: "Julian", age: 19 }); // Index: 2

myDatabaseClassic.remove(0);

myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModule_a);
