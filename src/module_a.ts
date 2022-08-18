// import { MyDatabaseClassic } from "./db/my-database-classic";
// import { MyDatabaseModule } from "./db/my-database-module";
import { MyDatabaseFunction } from "./db/my-database-function";

// const myDatabaseClassic = MyDatabaseClassic.instance;
const myDatabaseClassic = MyDatabaseFunction;

myDatabaseClassic.add({ name: "John", age: 32 }); // Index: 0
myDatabaseClassic.add({ name: "Suzan", age: 25 }); // Index: 1
myDatabaseClassic.add({ name: "Michael", age: 41 }); // Index: 2

myDatabaseClassic.show();

export { myDatabaseClassic };
